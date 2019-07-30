
function analyzeFiles(files, funcs){
  return files.map(function(file){
   return analyzeFile(file, funcs)
  })
}

function analyzeFile(file, funcs){
  var props = PROPS || PropertiesService.getScriptProperties();
  var lastUpdated = file.getLastUpdated().valueOf();
  var id = file.getId();
  if(+props.getProperty(id+'D') === lastUpdated){
    var savedAnalysis = props.getProperty(id);
    if(savedAnalysis) return JSON.parse(savedAnalysis)
  }

  var result = {
    name: '=HYPERLINK("'+file.getUrl()+'","'+file.getName()+'")'
  }
  var data = file.getBlob().getDataAsString();
  
  result.data = funcs.reduce(function(acc,func){
    acc[func] = countWord(data, 'R.' + func);
    return acc;
  },{});
  try{
   props.setProperty(id+'D', JSON.stringify(lastUpdated));
   props.setProperty(id, JSON.stringify(result));
  }
  catch(f){
   console.error(f);
  }
  return result; 
}

function getAnalysis(files, rFuncs){
  var fileAnalyses = analyzeFiles(files, rFuncs);
  var totals = getAnalysisTotal(fileAnalyses, rFuncs);
  return {
    fileAnalyses: fileAnalyses,
    totals: totals
  }
}

function getAnalysisTotal(analyses, rFuncs){
  return analyses.reduce(function(acc, analysis){
    rFuncs.forEach(function(rFunc){
      if(typeof acc[rFunc] !== 'number' ) acc[rFunc] = 0;
      acc[rFunc] += analysis.data[rFunc];
    });
    return acc;
  },{});
}
