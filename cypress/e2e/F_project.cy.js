import { PerfectFormPageObjects } from '../Page_Objects/Ferfectform_Objects'

const form = new PerfectFormPageObjects()

describe('Demo_Ferfectform', () => {
    beforeEach(() => {
        cy.visit('/');   //visit base url  before each test case   // cy.visit('https://www.perfectform.com/')
    });

    it('Demo 1', () => {
        //Select Services,State,Entity before submission of order
        form.getFormBlock().scrollIntoView()
        form.getServiceSelect()
            .select('Appoint/Change Registered Agent')
            .should('have.value', 'Appoint/Change Registered Agent');
        form.getStateSelect()
            .select('California')
            .should('have.value', 'California');
        form.getEntitySelect()
            .select('LLC')
            .should('have.value', 'LLC');
        //Handle New Tab in Cypress
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        });
        form.getSubmitButton().click();                         //Order submit button
        cy.get('@windowOpen').should('be.called')
        cy.get('@windowOpen').then((stub) => {                  // Extract the URL and visit it
            const openedUrl = stub.getCall(0).args[0]
            cy.log('Opened URL:', openedUrl)

            cy.request({                                       // Check status code that page navigataion is working
                method: 'HEAD',
                url: openedUrl,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(`Status code: ${response.status}`)
                expect(response.status).to.eq(200) // Assert 200 OK
            });
            cy.visit(openedUrl) //visit navigated url and verify through assertion by passing hard coded value
            expect(openedUrl).to.include('https://www.perfectform.com/order-services?state=California,entity=LLC,services=Appoint/Change Registered Agent')
            // Check if it's a correct or incorrect link
            if (openedUrl.includes('https://www.perfectform.com/order-services')) {
                cy.log('Conditional Data Have NOT proper URL ')
            } else if (openedUrl.includes('https://forms.perfectform.com')) {
                cy.log('Conditional Data Have correct URL')
            } else {
                cy.log('Unknown URL pattern')
            }
        });
        cy.get('h1, h2, h3').then(($headings) => {      //Assert first Heading of page
            if ($headings.length > 0) {
                const firstHeading = $headings.first().text().trim()
                cy.log('First heading text:', firstHeading)
            }
        });
    });

    it('Demo 2', () => {
        //Select Services,State,Entity before submission of order
        form.getFormBlock().scrollIntoView()
        form.getServiceSelect()
            .select('Formation')
            .should('have.value', 'Formation');
        form.getStateSelect()
            .select('California')
            .should('have.value', 'California');
        form.getEntitySelect()
            .select('Limited Partnership')
            .should('have.value', 'Limited Partnership');
        //Handle New Tab in Cypress
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        });
        form.getSubmitButton().click();                         //Order submit button
        cy.get('@windowOpen').should('be.called')
        cy.get('@windowOpen').then((stub) => {                  // Extract the URL and visit it
            const openedUrl = stub.getCall(0).args[0]
            cy.log('Opened URL:', openedUrl)

            cy.request({                                       // Check status code that page navigataion is working
                method: 'HEAD',
                url: openedUrl,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(`Status code: ${response.status}`)
                expect(response.status).to.eq(200) // Assert 200 OK
            });
            cy.visit(openedUrl) //visit navigated url and verify through assertion by passing hard coded value
            expect(openedUrl).to.include('https://forms.perfectform.com/perfectform/form/CALimitedPartnershipFormation2/formperma/ouftqHUE8PLBAZR4CruGkkROucGUhb56qfvTQTbUB1w')
            // Check if it's a correct or incorrect link
            if (openedUrl.includes('https://www.perfectform.com/order-service')) {
                cy.log('Conditional Data Have NOT proper URL ')
            } else if (openedUrl.includes('https://forms.perfectform.com')) {
                cy.log('Conditional Data Have correct URL')
            } else {
                cy.log('Unknown URL pattern')
            }
        });
        cy.get('h1, h2, h3').then(($headings) => {                                         //Assert first Heading of page
            if ($headings.length > 0) {
                const firstHeading = $headings.first().text().trim()
                cy.log('First heading text:', firstHeading)
            }
        })

    });
});


