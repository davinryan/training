import router from "./router";
import * as auth0 from "@auth0/auth0-spa-js";

window.env = {
  APP_URL: "http://localhost:38500",
  API_URL: "http://localhost:35500",
  AUTH0_DOMAIN: "part1.au.auth0.com",
  CLIENT_ID: "AQxeCQYm6zi4F46dQM3pfp7Lb4kcEY6i",
};

const domain = window.env.AUTH0_DOMAIN;
const clientId = window.env.CLIENT_ID;
const redirect_uri = window.env.APP_URL;

(async function () {
  window.auth0Client = await auth0.createAuth0Client({
    domain,
    clientId,
    authorizationParams: {
      redirect_uri,
    },
  });

  // handle user navigation
  window.addEventListener("hashchange", () => {
    router();
  });
  window.addEventListener("load", () => {
    // avoid calling router twice when handling redirect callback upon sign in
    if (!sessionStorage.getItem("reload")) {
      router();
      sessionStorage.setItem("reload", "true");
    }
  });

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) {
    sessionStorage.setItem("reload", "true");
    await router();
  }
})();
