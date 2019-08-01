function getFiles(folder){
 var files = [];
 var fileItr = folder.getFiles()
 while(fileItr.hasNext()){
  files.push(fileItr.next())
 }
  var folderItr = folder.getFolders()
  while(folderItr.hasNext()){
    getFiles(folderItr.next()).forEach(function(file){
     files.push(file)
    })
   
  }
 return files;

}


