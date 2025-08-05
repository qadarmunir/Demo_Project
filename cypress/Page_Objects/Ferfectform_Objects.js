// cypress/Page_Objects/Ferfectform_Objects.js

const serviceSelect = '#select-f0d6c77f-ad48-4b22-bcd3-fa225cb5c6b5-field'
const stateSelect = '#select-b272d90f-0cdf-4320-aa3b-a179e6fe11c2-field'
const entitySelect = '#select-dbf1bea8-a996-405d-9c1c-7b54d0b052cb-field'
const formBlock = '#block-8c4f8d2276a7e94984a4'
const submitButton = 'button[type="submit"]'

class PerfectFormPageObjects {
  getServiceSelect() {
    return cy.get(serviceSelect)
  }

  getStateSelect() {
    return cy.get(stateSelect)
  }

  getEntitySelect() {
    return cy.get(entitySelect)
  }

  getFormBlock() {
    return cy.get(formBlock)
  }

  getSubmitButton(index = 1) {
    return cy.get(submitButton).eq(index)
  }
}

export { PerfectFormPageObjects }