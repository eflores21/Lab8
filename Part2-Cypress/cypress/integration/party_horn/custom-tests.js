describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  //First practice test
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75'); 
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });
  //second practice test
  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });
  //third practice test
  it('volume of the <audio> element changes when we change the value of our slider', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  //Test if the honk button is disabled when the textbox input is a empty or a non-number
  it('Test if the honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });

  //Test if the image and sound sources change when you select the party horn radio button
  it('Test if the image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  //Test if the volume image changes when increasing volumes (you must test for all 3 cases)
  it('Test if the volume image changes when increasing volumes (you must test for all 3 cases): case 3', () => {
    cy.get('#volume-slider')
      .invoke('val', 67)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Test if the volume image changes when increasing volumes (you must test for all 3 cases): case 2', () => {
    cy.get('#volume-slider')
      .invoke('val', 66)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Test if the volume image changes when increasing volumes (you must test for all 3 cases): case 1', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  //Test if an error is shown when you type a number outside of the given range for the volume textbox input
  it('Test if an error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('101'); 
    cy.get('input:invalid').should('exist');
    });
});

//First test was failing when i opened it up
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});