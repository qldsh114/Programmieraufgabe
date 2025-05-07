//cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable {
        loginToMSAAD(username: string, password: string): void;
    }
}


declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to ... add your description here
         * @example cy.clickOnMyJourneyInCandidateCabinet()
         */
        clickOnMyJourneyInCandidateCabinet(): Chainable<null>;
    }
}

// describe custom Cypress commands in this file

// load the global Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        closeConsentManager(): Chainable<void>;
        logInTrustedUserToNonPRD(): Chainable<void>;
        logInTrustedUserToPRD(): Chainable<void>;
        logInTrustedUserToBeta(): Chainable<void>;
        loginUntrustedUserPutMoreExpensiveProductIntoCartAndOpenCart(): Chainable<void>;
        logInUntrustedUserToNonPRD(): Chainable<void>;
        logInUntrustedUserToPRD(): Chainable<void>;
        logInUntrustedUserToBeta(): Chainable<void>;
        consent(): Chainable<void>;
        deletecart(): Chainable<void>;
        loginagain(): Chainable<void>;
        getframe3D(): Chainable<void>;
        getIframeBody(): Chainable<void>;
        setDeviceViewport(device: string): Chainable;



    }
}
declare namespace Cypress {
    interface Chainable {
        getIframeBody(iframe: string): Chainable<JQuery<HTMLElement>>;
    }
}
