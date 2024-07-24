import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-8axoaj12hkg375lw.us.auth0.com"
    clientId="YjUXTDjeKwvj5C471rsak54365k0V0Wi"
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
