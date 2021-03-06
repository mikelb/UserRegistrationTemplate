(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    var Const = {};

    Const.responsecodeSucceed = 1;
    Const.responsecodeError = 0;

    Const.httpCodeSucceed = 200;
    Const.httpCodeFileNotFound = 404;
    Const.httpCodeServerError = 500;
    
    Const.credentialsMinLength = 6;

    
    // Exports ----------------------------------------------
    module["exports"] = Const;

})((this || 0).self || global);
