// A good place to start understanding Mocha Test steps
// http://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/
// 
// Simple example taken from:
// https://github.com/SamDecrock/pdf2table 


var fs = require('fs');
var assert = require('assert');
pdf2table = require("../lib/pdf2table")

var load_rows_from_file = function(file_name){
    var rows=[]
    //var pdf2table = require('pdf2table');
    fs.readFile(file_name, function (err, buffer) {
      if(err) throw err;
      if (err) return console.log(err);

    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
      if(err) throw err;
      if(err) return console.log(err);

          return rows;
      });
  });
  return rows;
}

describe('PDF Import', function() {
  describe('Simple Table Read', function() {
    it('should return read a the tests.pdf', function() {
      var rows = load_rows_from_file('./example_pdfs/tests.pdf');
      console.log(rows);
      //assert.equal(rows.length,10,'Expect the tests.pdf to have 10 rows');
    });
  });
});