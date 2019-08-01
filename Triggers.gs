//function onInstall(e) { // for add-on
//  onOpen(e);
//}

function onOpen(e){
  addMenu()
}


function addMenu() {
  SpreadsheetApp
  .getUi()
  .createMenu('RUA') // comment out for add-on
  //.createAddonMenu() // uncomment for add-on
  .addItem('Run Analysis', 'run')
  .addItem('Get File Drop Folder Link', 'getFolderLink')
  .addToUi()
}


