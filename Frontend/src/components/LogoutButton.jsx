import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const { logout, isAuthenticated, getAccessTokenWithPopup } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        onClick={() =>
          logout({
            logoutParams: { returnTo: window.location.origin + "/rewards" },
          })
        }
      >
        Log Out
      </Button>
    )
  );
};

export default LogoutButton;
