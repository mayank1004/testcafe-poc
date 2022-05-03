const {Selector} =  require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.LoginPage = {
    emailAddress : function() {
        return select("#txtLoginEmailAddress");
    },
    password: function() {
        return select("#txtLoginPassword")
    },
    signInButton: function() {
        return select("#linkLogin");
    },
    portalLink: function() {
        return select("a".withAttribute("href", "https://portal.tandemdiabetes.com/login"))
    }
}
