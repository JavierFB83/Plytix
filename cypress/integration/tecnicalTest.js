/// <reference types="cypress" />

import { tecnicalPage } from"../pageobject/tecnical-page"
import { homePage } from"../pageobject/home-page"
import { menuelementPage } from"../pageobject/menuelement-page"
import {problemaPage} from"../pageobject/problema-page"

describe ("Technical Test",() => {
    const HomePage = new homePage ()
    const TecnicalPage = new tecnicalPage ()
    const MenuElementPage = new menuelementPage ()
    const ProblemaPage = new problemaPage ()


    it ("The table has 5 elements", () =>{
        HomePage.gotohomepage()
        ProblemaPage.clickOnShiftingContent()
        MenuElementPage.clickOnElementContent()
        TecnicalPage.findFiveElementsInTheTable()
        })
    })

  

