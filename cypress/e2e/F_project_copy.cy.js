import { PerfectFormPageObjects } from '../Page_Objects/Ferfectform_Objects'

const form = new PerfectFormPageObjects()
const missingUrls = [];

describe('Demo_Ferfectform', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
    });

    it('Test all combinations', function () {
        cy.fixture('combinations.json').then((combinations) => {
            combinations.forEach((combo, idx) => {
                // Select values from combination
                form.getFormBlock().scrollIntoView();
                form.getServiceSelect().select(combo.service).should('have.value', combo.service);
                form.getStateSelect().select(combo.state).should('have.value', combo.state);
                form.getEntitySelect().select(combo.entity).should('have.value', combo.entity);

                form.getSubmitButton().click();

                cy.get('@windowOpen').should('have.been.called');
                cy.get('@windowOpen').then((stub) => {
                    const openedUrl = stub.getCall(idx).args[0];
                    cy.log('Opened URL:', openedUrl);

                    // Check for missing "services url"
                    if (openedUrl.includes('https://www.perfectform.com/order-services')) {
                        missingUrls.push({ ...combo, url: openedUrl });
                    }
                });
            });
        });
    });

    after(() => {
        cy.writeFile('cypress/results/missing_services_urls.json', missingUrls);
    });
});