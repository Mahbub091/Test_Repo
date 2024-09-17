/// <reference types="cypress" />

import credUtils from "../support/credentialUtils"

Cypress.Commands.add("navigatingToSauceDemo", () => {
	cy.visit(credUtils.homePage)

	cy.url().then(value => {
		cy.log("Current Url Is: ", value)
		expect(value).to.eq(credUtils.homePage)
	})

	cy.request(credUtils.homePage).should(response => {
		expect(response.status).to.eq(200)
	})

	cy.request(credUtils.homePage).should(response => {
		expect(response.status).to.not.eq(400)
		cy.log("Request Time Out")
	})
})


Cypress.Commands.add("validUrl", (partialUrl, fullUrl) => {
	cy.url().then(value => {
		cy.log("Current Url Is: ", value)
		expect(value).to.contains(partialUrl)
		expect(value).to.eq(fullUrl)
	})

	cy.request(fullUrl).should(response => {
		expect(response.status).to.eq(200)
	})

	cy.request(fullUrl).should(response => {
		expect(response.status).to.not.eq(400)
		cy.log("Request Time Out")
	})
})
