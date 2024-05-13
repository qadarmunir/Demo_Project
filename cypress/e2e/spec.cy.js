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
              // console.log(message.text.body) // "Hi Jason, ..."
              // cy.log(email.text); // Log the email body text
          }
      });
      cy.mailosaurGenerateEmailAddress("SERVER_ID").then((emailAddress) => {
        cy.log(emailAddress); // "bgwqj@SERVER_ID.mailosaur.net"
      });
  });
  it('EmailTextbody', () => {
    cy.mailosaurGetMessage(SERVER_ID, {
        sentTo: emailAddress//"generally-call@khpz4jy2.mailosaur.net"
    }, {
        timeout: 60000, // Increased timeout to 60 seconds
    })
    .then((email) => {
      // Check that the email contains some text
      expect(email.text.body).to.contain("what are u doing?");
    });
});
});


