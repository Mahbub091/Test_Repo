/// <reference types="cypress" />

import homepage from "../pages/homePage"
import credUtils from "../support/credentialUtils"

describe('', () => {
	it("Navigating to the website", () => {
		homepage.open(credUtils.homePage)
	})

    it('Logining In to System', () => {
        homepage.inputUserName(credUtils.username)
        homepage.inputPassword(credUtils.pass)
        homepage.clickOnLoginButton()
        cy.validUrl(credUtils.platformName, credUtils.inventoryPage)
    });

    it('Adding Product To Cart & Checkout', () => {
        homepage.backpackAddToCartButton()
        homepage.clickOnCartButton()
        homepage.validatingItemOnCart()
        homepage.checkoutClick()

        homepage.userFirstNameInput(credUtils.firstName)
        homepage.userLastNameInput(credUtils.lastName)
        homepage.userZipCodeInput(credUtils.zipCode)

        homepage.clickOnContinueButtonInput()

        homepage.validateProductName()

    });

    it('User Logout from system', () => {
        homepage.clickingOnHamburgerMenu()
        homepage.clickingOnAppReset()
        homepage.clickingOnLogOut()
    });
});