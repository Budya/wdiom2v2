const Element = require('../../framework/element');

module.exports = {
    loginInput: new Element('#username', 'Login input'), 
    passwordInput: new Element('#password', 'Password input'),
    loginButton: new Element('button[type="submit"]', 'Login button')
}