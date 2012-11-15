(function() {
'use strict';

//Save a reference to the global object (`window` in the browser, `exports`
// on the server).
var root = this;
var ajaxSync = Backbone.sync;

Backbone.sync = function(method, model, options, error) {
    var me = this;

    this.trigger('before:sync');

    if (this.hasOwnProperty('beforeSync')) {
        this.beforeSync();
    }

    this.fetched = false;

    var deferred = ajaxSync(method, model, options, error);

    deferred.then(function() {
        me.trigger('after:sync');

        me.fetched = true;

        if (me.hasOwnProperty('afterSync')) {
            me.afterSync();
        }
    });

    return deferred;
}

}).call(this);
