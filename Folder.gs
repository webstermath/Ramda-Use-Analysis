function getFolder() {
  var props = PROPS || PropertiesService.getScriptProperties();
  var folderId = props.getProperty('folderId');
  try{
   if(folderId) return DriveApp.getFolderById(folderId);
  } catch(f){
    console.error(f)
  }
  return makeFolder(props);
}

function makeFolder(){
 var props = PROPS || PropertiesService.getScriptProperties();
 var folder = DriveApp.createFolder('RUA File Drop');
 folder.setDescription('Drop code files here for Ramda Use Analysis');
 props.setProperty('folderId', folder.getId())
 return folder;
}


function getFolderLink(){
 var folder = getFolder()
 
 var htmlOutput = HtmlService
    .createHtmlOutput('<a target="_BLANK" href="'+folder.getUrl()+'">'+folder.getName()+'</a>')
    .setWidth(250)
    .setHeight(100);
 
 SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'RUA File Drop Folder');

}