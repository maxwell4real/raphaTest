class LoginPage {

    get enterUsername(){
        return $ ('#username');
    }

    get enterPassword(){
        return $('#password');
    }

    get loginBtn(){
        return $('button[type="submit"]')
    }

}

export const loginpage = new LoginPage()