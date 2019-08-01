# Ramda-Use-Analysis
Tracks Ramda function usage across multiple code files.

![RUA Screenshot](https://github.com/webstermath/Ramda-Use-Analysis/blob/master/RUA_Screenshot.png)

Ramda Use Analysis (RUA) is a Google App Script for Google Sheets that counts the number of times each Ramda function has been used in various script files.  RUA creates a folder called "Rua File Drop" where code files can be placed for analysis.

Currently only functions accessed as methods of R in dot notation are counted, e.g. `R.curry`.  Analysis of individually 
imported Ramda functions will be added later, hopefully.

Collaboration and feedback are welcome.

## Instructions
1. Create a Google Spreadsheet.
2. Go to Tools > Script Editor.
3. Give your Google Apps Script (GAS) project a name.
4. Down load the files from this repo in to your GAS project. This is far easier using [Google Apps Script GitHub Assistant](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo)
5. Go to the Triggers file and run the onOpen function.
6. Google will now prompt you with dire warnings that the following project has not been reviewed by them.  Click Advance and proceed at your own peril.
7. Now go back to your sheet where there should be a RUA menu in your menu bar. Got to RUA > Get File Drop Folder Link. This will bring up a prompt with a link to a new folder where you can drop your Ramda files and file containing folders.
8. After placing some files and/or folders in the File Drop Folder. go to RUA > Run Analysis.
9. After the analysis is finished, rejoice.




