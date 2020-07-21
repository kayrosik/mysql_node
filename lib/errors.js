class AuthError extends Error {
    constructor(params) {
        super(params);
        this.name = 'Auth Error';
        this.msg = 'Login or password is incorrect';
    }
}

class EmptyRequiredParamsError extends Error {
    constructor(params) {
        super(params);
        this.name = 'Empty required params error';
        this.msg = 'Required params are empty';
    }
}

module.exports = {
    AuthError,
    EmptyRequiredParamsError,
};