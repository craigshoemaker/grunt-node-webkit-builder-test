(function () {

    var attemptRequire = function(moduleName){
        try {
            var mod = require(moduleName);
            console.log(moduleName + ' loaded');
        } catch (ex){
            console.log(ex);
        }
    };
    
    attemptRequire('underscore');
    attemptRequire('lodash');
    attemptRequire('humanize-plus');
    attemptRequire('fs');
    attemptRequire('fs-extra');
    attemptRequire('node-webkit-fdialogs');

}());