/// <reference types="cypress" />

import homepage from "../pages/homePage"
import credUtils from "../support/credentialUtils"

describe('', () => {
	it("Navigating to the website", () => {
		homepage.open(credUtils.homePage)
	})

    it('User Login To SauceDemo Shop', () => {
        homepage.inputUserName(credUtils.username)
        homepage.inputPassword(credUtils.pass)
        homepage.clickOnLoginButton()
        homepage.validateSuccessLogin()
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
        homepage.clickOnFinishButton()

    });

    it('User Logout from SauceDemo System', () => {
        homepage.clickingOnHamburgerMenu()
        homepage.clickingOnAppReset()
        homepage.clickingOnLogOut()
    });
});