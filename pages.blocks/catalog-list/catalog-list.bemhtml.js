block('catalog-list').content()(function() {
    var cnt = applyNext();
    var res = [];

    cnt.forEach(function(item, i) {
        if (!(i % 3)) {
            res.push({
                elem: 'row',
                content: []
            })
        }
        var row = res[res.length - 1];
        row.content.push(item);
    });

    return res;
})
