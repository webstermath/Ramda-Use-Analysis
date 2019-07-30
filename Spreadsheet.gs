function addAnalysisToSs(analysis) {
  var matrix = getAnalysisMatrix(analysis)
  var ss = SpreadsheetApp.getActive(); 
  var sheet = ss.getSheetByName('RUA') || ss.insertSheet('RUA')
  sheet
  .clear()
  .getRange(1,1,matrix.length, matrix[0].length)
  .setNumberFormat("0")
  .setValues(matrix);
}


function getAnalysisMatrix(analysis){
 var fileAnalyses = analysis.fileAnalyses;
 var totals = analysis.totals;
 var rFuncs = getRamdaFunctions();
   
  var fileNameRow = ['','TOTALS'].concat(fileAnalyses.map(function(fileAnalysis){
   return fileAnalysis.name
  }));
  
 var rFuncRows = rFuncs.map(function(rFunc){
   var rFuncVals = fileAnalyses.map(function(fileAnalysis){
    return fileAnalysis.data[rFunc]
   })
   return [rFunc]
   .concat([totals[rFunc]])
   .concat(rFuncVals) 
 })
 
 return [fileNameRow].concat(rFuncRows)

}

