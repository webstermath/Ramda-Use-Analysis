var PROPS;

function run(){
  var PROPS = PropertiesService.getScriptProperties();
  
  var folder = getFolder();
  
  var files = getFiles(folder);
  
  if(!files.length) return SpreadsheetApp.getActive().toast('No code files found in folder.', 'RUA' ,-1)
   
  var rFuncs = getRamdaFunctions();
  
  var analysis =  getAnalysis(files, rFuncs);

  addAnalysisToSs(analysis);
  
  SpreadsheetApp.getActive().toast('Success: file analysis finished', 'RUA' ,3)
}

