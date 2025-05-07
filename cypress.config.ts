import { defineConfig } from "cypress";
//import fs from "fs";

export default defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    // reporter: "cypress-mochawesome-reporter",
    e2e: {

        //baseUrl: "",



        experimentalModifyObstructiveThirdPartyCode: true,
        chromeWebSecurity: false,
        testIsolation: false,

        setupNodeEvents(on, config) {
            on("task", {
                // register a task named login which calls the generated login from @intility/cypress-msal
                log(message) {
                    console.log(message)
                    return null
                },
            });
            // implement node event listeners here
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            // require("cypress-mochawesome-reporter/plugin")(on);
            return config;
        },
        env: {
            myDevice: 'default',
            hideCredentials: true,
            hideCredentialsOptions: {
                headers: ["Authorization"],
                body: ["username", "password"],
            },
        },
        experimentalRunAllSpecs: true,
        experimentalStudio: true,
        experimentalWebKitSupport: true,

        //hideXHRInCommandLog: true, // https://dev.to/samelawrence/muting-noisy-xhr-logs-in-cypress-4495
        projectId: "fy3hpu",
        video: false,
        viewportHeight: 1080,
        viewportWidth: 1920,
        watchForFileChanges: false,
    },




});
