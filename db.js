db = {};

db.init = function(callback) {
    $.getJSON('data/db.json', function(data) {
        db.data = data;
        if(callback) {
            callback();
        }
    });
}