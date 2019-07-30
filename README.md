# Ramda-Use-Analysis
Tracks Ramda function usage across multiple code files.

Ramda Use Analysis (RUA) is a Google App Script for Google Sheets that counts number of times each Ramda function has been used in a user supplied list of code files.  RUA creates a folder called "Rua File Drop" where code files can be placed for analysis.

Currently only functions accessed as methods of R in dot notation are counted, e.g. `R.curry`.  Analysis of individually imported Ramda functions will be added later, hopefully.

At some point I hope to make RUA into an add-on.

Collaboration and feedback are welcome.
