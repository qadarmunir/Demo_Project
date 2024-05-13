const { JSDOM } = require('jsdom');
describe('mailosaur', () => {
    const SERVER_ID = 'khpz4jy2';
    const serverDomain = "khpz4jy2.mailosaur.net";
    const emailAddress = 'generally-call@' + serverDomain;
    it('verify subject', () => {
        cy.mailosaurGetMessage(SERVER_ID, {
            sentTo: emailAddress//"generally-call@khpz4jy2.mailosaur.net"
        }, {
            timeout: 60000, // Increased timeout to 60 seconds
        })
        .then((email) => {
            if (email) {
                cy.log(email.subject);
            }
        })
    });
    it('found link in email', ()=>{
        cy.mailosaurGetMessage(SERVER_ID, {
            sentTo: emailAddress//"generally-call@khpz4jy2.mailosaur.net"
        }, {
            timeout: 60000, // Increased timeout to 60 seconds
        }).then((email) => {
            cy.log(`${email.html.links.length} links found in HTML content`);
            // cy.log(`${email.text.links.length} links found in plain text content`);
            //it will access foirst link which is contains in the email body
            return cy.visit(email.html.links[0].href);
          }).then(() =>{
            //assertion on link 
            cy.get(':nth-child(2) > [data-cy="air-data-item-type-table"]').invoke('text').then((text)=>{
            cy.log(text);
            expect(text.trim()).to.equal('12');
          })
        })

    });
    it('Delete all emails', ()=>{
        cy.mailosaurDeleteAllMessages(SERVER_ID);
    });

});
    

  
  
  