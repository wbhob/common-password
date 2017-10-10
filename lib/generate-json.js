/*jslint node: true */
'use strict';

var fs = require('fs');

function isNotEmpty(line) {
  return line.length > 0;
}

function parseLine(line) {
  return line.trim()
  // return crc32.unsigned(line.trim());
}

var lines = fs.readFileSync('./lib/10k-most-common.txt').toString().split('\n');
var result = lines.filter(isNotEmpty)
.map(parseLine);
var json = JSON.stringify(result, null, 2);
var f = "export const passwords: string[] = " + json;
fs.writeFileSync('./lib/passwords.ts', f);
