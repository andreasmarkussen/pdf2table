// A good place to start understanding Mocha Test steps
// http://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/
// 
// Simple example taken from:
// https://github.com/SamDecrock/pdf2table 


var fs = require('fs');
var assert = require('assert');
pdf2table = require("../lib/pdf2table")

var load_rows_from_file = function(file_name){
    var the_rows=['one'];
    console.log("XX-loading " + file_name );
    //var pdf2table = require('pdf2table');
    fs.readFile(file_name, function (err, buffer) {
      //console.log("File read");
      
      assert.equal(1,3,"111");
      if(err){
        1/0;
        assert.equal(1,2,"XCV");
        assert.equal(err,undefined,'No error expected');
        assert.fail(err) 
        throw err;
      }
      //if (err) return console.log(err);
      rows.push("two");
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
      if(err) return console.log(err);
      the_rows = rows; 
      return rows;
      });
  });
  return the_rows;
}

describe('PDF Import', function() {
  describe('Negative Read', function() {
    it('should return read a the neg-tests.pdf', function() {
      var rows = load_rows_from_file('Gexample_pdfs/neg-test-multiple-head-cells.pdf');
      console.log(rows);
    //  assert.equal(rows.length,10,'Expect the tests.pdf to have 10 rows');
    });
  });
});