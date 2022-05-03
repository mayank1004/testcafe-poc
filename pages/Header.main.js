const {Selector} =  require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.Headers = {
    signOutLink : function() {
        return select("#linkLogout");
    }
}
