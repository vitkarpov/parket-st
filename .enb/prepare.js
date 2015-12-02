var fs = require('fs');
var path = require('path');
var pathToDist = path.resolve('dist');
var pages = JSON.parse(fs.readFileSync('pages.json', 'utf8'));

pages.forEach(function(page) {
    var bemdecl = path.join(pathToDist, page + '.bemdecl.js');
    var rootDecl = 'exports.blocks = [{"name": "root"}];';

    fs.existsSync(bemdecl) || fs.writeFileSync(bemdecl, rootDecl);
});
