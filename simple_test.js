var fs = require('fs');
var assert = require('assert');
pdf2table = require("./lib/pdf2table")

var load_rows_from_file = function(file_name){
    console.log('Loading file "'+file_name+'" ');
    var rows=[]
    //var pdf2table = require('pdf2table');
    fs.readFile(file_name, function (err, buffer) {
      //if(err) throw err;
      if (err) return console.log(err);

    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
      //if(err) throw err;
      if(err) return console.log(err);

          return rows;
      });
  });
  return rows;
}
var rows = load_rows_from_file('./example_pdfs/neg-test-multiple-head-cells.pdf');
      console.log(rows);


