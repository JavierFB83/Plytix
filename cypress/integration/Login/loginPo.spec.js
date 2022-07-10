/// <reference types="cypress" />

import { HomePage, } from "../../pageobject/home-page";
import { LoginPage } from "../../pageobject/login-page";
import { SecurePage } from "../../pageobject/secure-page";


describe('tests de login',() => {
    const homepage = new HomePage()
    const loginpage = new LoginPage()
    const securepage = new SecurePage()
   
beforeEach(() =>{
    homepage.gotohomepage()
    })

it ("valid user can login", () =>{
    homepage.clicklogin()
    loginpage.enterUsername("tomsmith")
    loginpage.enterPassword("SuperSecretPassword!")
    loginpage.clickloginbutton()
    securepage.CheckMessage("You logged into a secure area")
})

it ("not valid user can NOT login", () =>{
    homepage.clicklogin()
    loginpage.enterUsername("Smith")
    loginpage.enterPassword("SuperSecretPassword!")
    loginpage.clickloginbutton()
    loginpage.checkErrorMessage("Your username is invalid!")
  })

it ("not valid pasword can NOT login", () =>{
    homepage.clicklogin()
    loginpage.enterUsername("tomsmith")
    loginpage.enterPassword("Secret!")
    loginpage.clickloginbutton()
    loginpage.checkErrorMessage("Your password is invalid!")
  })

})
