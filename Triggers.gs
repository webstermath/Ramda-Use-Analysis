//function onInstall(e) { // for add-on
//  onOpen(e);
//}

function onOpen(e){
  addMenu()
}


function addMenu() {
  SpreadsheetApp
  .getUi()
  //.createMenu('RUA') // toggle for add-on
  .createAddonMenu()
  .addItem('Run Analysis', 'run')
  .addItem('Get File Drop Folder Link', 'getFolderLink')
  .addToUi()
}


