var express = require('express');
var router = express.Router();
var parser = require('../utilities/parser.js');
var data = parser.getJsonData();
var map = flattenToBattleFields(data);
function flattenToBattleFields(data) {
	var map = {};
	data.forEach(function(chapter){
		chapter.battleFields.forEach(function(battleField){
			map[battleField.id] = battleField;
		});
	});
	return map;
}

/* GET users listing. */
router.get('/strategy/yggdraUnion', function(req, res, next) {
	res.send(data);
});

router.get('/strategy/yggdraUnion/battleField', function(req, res, next) {
	let id = req.query.id;
	if (id < 10) { id = '0' + id; }
	id = id.toUpperCase();
	if (map[id]) {
		res.send(map[id]);
	} else {
		res.status(500).send({ error: 'invalid map id' });
	}
});

module.exports = router;
