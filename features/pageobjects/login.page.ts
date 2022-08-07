import { ChainablePromiseElement } from 'webdriverio';

class LoginPage {
    /**
     * define selectors using getter methods
     */
    error_message: string;

    constructor() {
        this.error_message = "//h3/text()";
    }

    public get inputUsername() {
        return $('#user-name');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get loginButton() {
        return $('#login-button');
    }
    public get errorMessage() {
        console.log("ELEMENT ******" + this.error_message);
        return $('//h3');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

}

export default new LoginPage();
