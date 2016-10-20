var express = require('express');
var fs = require('fs');
var uggraFile = require('../public/files/YggdraUnion/strategy.json');
var parser = {};
// var turns = {'01':'4', '02':'9', '03':'32', '04':'18', '05':'7', '06':'18', '07':'21', '08':'23', '09':'21', '10':'23', '11A':'18', '11B':'16', '12':'17', '13':'35', '14':'7', '15':'12', '16':'21', '17':'17', '18':'24', '19':'13', '20':'9', '21':'13', '22':'29', '23':'14', '23.5':'13', '24':'14', '25':'27', '26':'54', '27':'18', '28':'25', '29':'21', '30':'32', '31':'47', '32':'46', '33':'10', '34':'2', '35':'49', '36':'34', '37':'16', '38':'40', '39':'14', '40':'30', '41':'50', '42':'26', '43':'45', '44':'55', '45':'4', '46':'7', '47':'10', '48':'???'}
var readFileSync = function(filepath, encoding) {
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return file;
}

var dealData = function(data, path) {
	data.forEach(function(chapter){
		chapter.battleFields = chapter.battleFields.map(function(bf){
			bf.maxTurns = turns[bf.id] || "???";
			return bf;
		});
	});
	fs.writeFileSync(path, JSON.stringify(data));
}


parser.getJsonData = function() {
	var path = __dirname + '/../public/files/YggdraUnion/strategy.json'
	var str = readFileSync(path);
	var data = JSON.parse(str);
	// dealData(data);
	return data;
}

module.exports = parser;
