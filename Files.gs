function getFiles(folder){
 var files = [];
 var fileItr = folder.getFiles()
 while(fileItr.hasNext()){
  files.push(fileItr.next())
 }
 return files;

}


