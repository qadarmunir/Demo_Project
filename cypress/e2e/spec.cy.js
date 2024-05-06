// Assuming you've already installed Cypress and set up your project

describe("Password reset", () => {
  const serverId = "khpz4jy2"; // Replace with your Mailosaur server ID
  const serverDomain = "darkness-element@khpz4jy2.mailosaur.net";
  const emailAddress = "darkness-element@" + serverDomain;

  it("should receive a password reset email", () => {
    // Trigger the password reset action (e.g., click the "Forgot Password" link)
    // ...

    // Wait for the email to arrive (you can adjust the timeout as needed)
    cy.mailosaurGetMessage(serverId, {
      sentTo: emailAddress,
      subject: "hy", // Adjust this to match your email subject
      timeout: 30000, // 30 seconds
    }).then((email) => {
      // Assert email content or perform other checks
      expect(email.subject).to.equal("hy");
      //expect(email.text.body).to.contain("Click the link below to reset your password");

      // Optionally, you can extract the reset link and visit it
      const resetLink = email.html.links.find((link) => link.text === "hy");
      if (resetLink) {
        cy.visit(resetLink.href);
        // Now you're on the password reset page
        // Fill in the new password and submit the form
        // ...
      } else {
        throw new Error("Reset link not found in email");
      }
    });
  });
});

