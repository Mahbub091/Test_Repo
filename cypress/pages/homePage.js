/// <reference types="cypress" />

import credUtils from "../support/credentialUtils"

class HomePage {
	open() {
		return cy.navigatingToSauceDemo()
	}

	inputUserName (name) {
		return cy.get("input#user-name").should('be.visible').clear().type(name)
	}

	inputPassword (password) {
		return cy.get("input#password").should('be.visible').clear().type(password)
	}

	
	clickOnLoginButton () {
		return cy.get("input#login-button").should('be.visible').click()
	}

	validateSuccessLogin () {
		return cy.validUrl(credUtils.platformName, credUtils.inventoryPage)
	}

	backpackAddToCartButton () {
		return cy.get(".inventory_list .inventory_item:nth-of-type(1) .btn_inventory").click()
	}

	clickOnCartButton () {
		return cy.get("div#shopping_cart_container path").should('be.visible').click()
	}

	validatingItemOnCart () {
		return cy.get("a#item_4_title_link > .inventory_item_name").should('have.text', "Sauce Labs Backpack")
	}

	continueShoppingClick () {
		return cy.get(".cart_footer .btn_secondary").should("be.visible").click()
	}

	checkoutClick () {
		return cy.get("div#cart_contents_container .btn_action.checkout_button").should("be.visible").click()
	}

	userFirstNameInput (firstName) {
		return cy.get("input#first-name").should("be.visible").clear().type(firstName)
	}

	userLastNameInput (lastName) {
		return cy.get("input#last-name").should("be.visible").clear().type(lastName)
	}

	userZipCodeInput (zipCode) {
		return cy.get("input#postal-code").should("be.visible").clear().type(zipCode)
	}

	clickOnContinueButtonInput () {
		return cy.get("div#checkout_info_container  form  .btn_primary.cart_button").should("be.visible").click()
	}

	validateProductName () {
		return cy.get("a#item_4_title_link > .inventory_item_name").should("be.visible").should('have.text', 'Sauce Labs Backpack')
	}


	clickOnFinishButton () {
		return cy.get(".cart_button").should("be.visible").click()
	}




	








	clickingOnHamburgerMenu () {
		return cy.get(".bm-burger-button button").click()
	}

	clickingOnAppReset () {
		return cy.get("a#reset_sidebar_link").should("be.visible").click()
	}
	
	clickingOnLogOut () {
		return cy.get("a#logout_sidebar_link").should("be.visible").click()
	}



	





	





	


	


	
}

export default new HomePage()
