describe('abc', () => {
    it("Validate the dropdown option selection by it's value", () => {
        cy.visit("https://www.bstackdemo.com/")
        cy
            .get("select")
            .select("lowestprice")
            .invoke("val")
            .should("eq", "lowestprice")
    })

    it("Validate the dropdown option selection by it's value", () => {
        cy.visit("https://www.bstackdemo.com/")
        cy
            .get("select")
            .select("lowestprice")
            .invoke("val")
            .should("eq", "lowestprice")
    })

    it("Validate the dropdown option selection by it's text and assert the selection", () => {
        cy.visit("https://www.bstackdemo.com/")
        cy.get("select").select("Highest to lowest")
        cy
            .get("select option:selected")
            .invoke("text")
            .should("eq", "Highest to lowest")
    })


    it.only("Validate the dropdown option selection by it's text and assert the selection", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click().wait(2000)
        //cy.get('.orangehrm-header-container > .oxd-button').click()

        // // cy.get('.oxd-select-wrapper .oxd-select-text-input')
        //  cy.get('[data-v-13cf171c]:eq(1)').eq(0).click();
        // cy.get('.oxd-select-dropdown')
        // .should('be.visible')
        // .contains('.oxd-select-option', 'Admin')
        // .click();


        // cy.get('.oxd-autocomplete-text-input > input').clear().type('Thomas Kutty Benny')
        // cy.contains('.oxd-autocomplete-option', 'Thomas Kutty Benny', { includeShadowDom: true }).click();

        // //cy.get('.oxd-select-wrapper .oxd-select-text-input')
        // cy.get('[data-v-13cf171c]:eq(3)').eq(0).click();
        // cy.get('.oxd-select-dropdown')
        //     .should('be.visible')
        //     .contains('.oxd-select-option', 'Enabled')
        //     .click();

        // const randomText = Math.random().toString(36).substring(2, 9); // generates 7+ characters
        // cy.get('[data-v-1f99f73c]:eq(1)').type(randomText)
        // cy.get('[data-v-1f99f73c]:eq(2)').type('aA@12345678')
        // cy.get('[data-v-1f99f73c]:eq(3)').type('aA@12345678')
        // cy.get('[data-v-10d463b7]:eq(1)').click()



       cy.get(':nth-child(3) > .oxd-main-menu-item').click()

        //cy.get('.oxd-select-wrapper .oxd-select-text-input')



// Get today's date
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.toLocaleString('default', { month: 'long' });
const currentYear = today.getFullYear();

cy.get('.oxd-date-input-icon').eq(0).click(); // Click calendar icon

// Adjust selector below depending on calendar structure
cy.get('.oxd-calendar-date') // Example class for individual dates
  .contains(new RegExp(`^${currentDay}$`)) // Match exact day (e.g., 18)
  .click();

    })
})