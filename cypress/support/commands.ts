// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("consent", () => {
  //cy.setCookie('daad_cookie_consent', `{"availableCookies":["session","daad-cookie-consent","google-analytics","daad-chatbot","sticky-alert"],"acceptedCookies":${JSON.stringify(acceptedCookies)},"lastUpdated":1598520087509}`)
  document.cookie = '__0params={}; __3noUtmSent=1; TCPID=1231141420397082465830; FPLC=fNZKxb07v8ZwIHLKE5hmrPWk8G8xX%2FT%2Fj5ZBnIPCe0qRnJW1g94Pa1Ly8oIOcRofo%2FaYLxmfrF8%2Bu1hWVkVPJUeaUJBRDYnoT5LDl6NJp06ICmz00VqRp0X8aFCjaw%3D%3D; ctp_refresh_token=dach-prd-danone%3AF_WNalJM-n_re6riJfeh-xaOzkdx_0J02YJ_Q0sNXGI; dtc_tokens_are_for_site=dach-prd-danone; ctp_access_token=HjsKOBa4daFOKM1BdOLE6P6ZqtfGc4f8; TC_PRIVACY=0%40032%7C13%7C1665%402%2C3%2C4%2C5%401%401701350442246%2C1701350442246%2C1735046442246%40; TC_PRIVACY_CENTER=2%2C3%2C4%2C5; at_check=true; _gid=GA1.2.300289953.1701350442; _gcl_au=1.1.466820511.1701350442; _gat_UA-50714493-13=1; _fbp=fb.1.1701350442606.1137196389; mbox=session#36d5b2a241aa450283370f80a4e71b4a#1701352303|PC#36d5b2a241aa450283370f80a4e71b4a.37_0#1764595243; mboxEdgeCluster=37; BCSessionID=5de1325b-5a66-4a95-b474-49cacfda639e; _pin_unauth=dWlkPU5XWXpOR001TVdVdE9HSmxPUzAwTm1ZMExXRmxOVFF0Tm1VeVlUWmtZelkyWkdOaQ; tfpsi=5472c54c-e472-4b86-ac15-54d857324592; cto_bundle=oS78fl9halkzRHlCcVlrN2hmMzlxUGg1ZkIzd3RRdyUyRmJTd3daRHhKeEc3WUN4aHgwc0M3TGV0eHo2UjdPTG1QeDhJNHhJRmRramFRaWg0eDhZV0NNRzJ6SVdMRXAxMlAwTnlYamtHWDZ4ZDc0OVBWZUNtdkJ5VG9qZ09lcUpiNWJxbVJmZzB4NmN2VjVISDlXTENYem5PZEZCdyUzRCUzRA; _ga=GA1.2.1962054732.1701350441; _ga_PC757DRRZ1=GS1.1.1701350439.2.1.1701350445.0.0.0'
});

Cypress.Commands.add("deletecart", () => {



});



Cypress.Commands.add('getIframeBody', (iframe) => {
  return cy.get(iframe).then($iframe => {
    const $body = $iframe.contents().find('body')
    cy.wrap($body)
  })
})




Cypress.Commands.add('setDeviceViewport', (device: string) => {
  if (device === 'Iphone12') {
    cy.viewport(390, 844);
    cy.log('viewport sets to for Iphone 12 (390, 844)');
  }
  else if (device === 'Iphone13') {
    cy.viewport(390, 844);
    cy.log('viewport sets to for Iphone 13 (390, 844)');
  }
  else if (device === 'Iphone12Pro') {
    cy.viewport(390, 844);
    cy.log('viewport sets to for Iphone 12 Pro (390, 844)');
  }
  else if (device === 'Iphone12mini') {
    cy.viewport(360, 780);
    cy.log('viewport sets to for Iphone 12 mini (360, 780)');
  }
  else if (device === 'Iphone12ProMax') {
    cy.viewport(428, 926);
    cy.log('viewport sets to for Iphone 12 ProMax (428, 926)');
  }
  else if (device === 'Iphone13ProMax') {
    cy.viewport(428, 926);
    cy.log('viewport sets to for Iphone 13 ProMax (428, 926)');
  }
  else if (device === 'Iphone13Pro') {
    cy.viewport(390, 844);
    cy.log('viewport sets to for Iphone 13 Pro (390, 844)');
  }
  else if (device === 'Iphone13mini') {
    cy.viewport(360, 780);
    cy.log('viewport sets to for Iphone 13 mini (360, 780)');
  }
  else if (device === 'Iphone14') {
    cy.viewport(390, 844);
    cy.log('viewport sets to for Iphone 14 (390, 844)');
  }
  else if (device === 'Iphone14Plus') {
    cy.viewport(428, 926);
    cy.log('viewport sets to for Iphone 14 Plus (428, 926)');
  }
  else if (device === 'Iphone14Pro') {
    cy.viewport(393, 852);
    cy.log('viewport sets to for Iphone 14 Pro (393, 852)');
  }
  else if (device === 'Iphone14ProMax') {
    cy.viewport(430, 932);
    cy.log('viewport sets to for Iphone 14 ProMax (430, 932)');
  }
  else if (device === 'Iphone15') {
    cy.viewport(393, 852);
    cy.log('viewport sets to for Iphone 15 (390, 852)');
  }
  else if (device === 'Iphone15Plus') {
    cy.viewport(430, 932);
    cy.log('viewport sets to for Iphone 15 Plus (430, 932)');
  }
  else if (device === 'Iphone15Pro') {
    cy.viewport(393, 852);
    cy.log('viewport sets to for Iphone 15 Pro (393, 852)');
  }
  else if (device === 'Iphone15ProMax') {
    cy.viewport(430, 932);
    cy.log('viewport sets to for Iphone 15 ProMax (430, 932)');
  }
  else if (device === 'IphoneXR') {
    cy.viewport(414, 896);
    cy.log('viewport sets to for Iphone XR (414, 896)');
  }
  else if (device === 'IphoneSE') {
    cy.viewport(375, 667);
    cy.log('viewport sets to for Iphone SE (375, 667)');
  }
  else if (device === 'IphoneX') {
    cy.viewport(375, 812);
    cy.log('viewport sets to for Iphone X (375, 812)');
  }
  else if (device === 'Iphone8') {
    cy.viewport(375, 667);
    cy.log('viewport sets to for Iphone 8 (375, 667)');
  }
  else if (device === 'IPad') {
    cy.viewport(1024, 1366);
    cy.log('viewport sets to for IPad (1024, 1366)');
  }
  else if (device === 'IPadMini') {
    cy.viewport(768, 1024);
    cy.log('viewport sets to for IPad (1024, 1366)');
  }
  else if (device === 'default') {
    cy.viewport(1920, 1080);
    cy.log('viewport sets to default (1920, 1080)')
  } else {
    // Use custom viewport for other devices
    const [width, height] = device.split('x').map(Number);
    cy.viewport(width, height);
    cy.log('show the viewport viewport(width, height)');
  }
});

