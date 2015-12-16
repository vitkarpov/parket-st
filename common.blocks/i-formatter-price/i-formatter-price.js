modules.define('i-formatter-price', function(provide) {
    provide(function formatterPrice(p) {
        var remain = p % 1000;

        if (remain === p) {
            return p;
        }
        if (remain === 0) {
            remain = '000';
        }
        return Math.ceil(p / 1000) + ' ' + remain;
    });
});
