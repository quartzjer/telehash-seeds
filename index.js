exports.json = require("./seeds.json");
exports.install = function(self)
{
  Object.keys(exports.json).forEach(function(seed){self.addSeed(exports.json[seed])});
}