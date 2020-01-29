import React from "react";

import { Button } from "semantic-ui-react";

import { userRoles } from "App";

interface Props {
  userRole: userRoles;
  setUserRole(role: string): void;
}

const RoleButton: React.FC<Props> = ({ userRole, setUserRole }) => {
  return (
    <React.Fragment>
      <Button.Group basic>
        <Button
          active={userRole === "admin"}
          onClick={() => {
            setUserRole("admin");
          }}
        >
          Admin
        </Button>
        <Button
          active={userRole === "shop"}
          onClick={() => {
            setUserRole("shop");
          }}
        >
          Shop
        </Button>
        <Button
          active={userRole === "user"}
          onClick={() => {
            setUserRole("user");
          }}
        >
          User
        </Button>
        <Button
          active={userRole === "none"}
          onClick={() => {
            setUserRole("none");
          }}
        >
          none
        </Button>
      </Button.Group>
    </React.Fragment>
  );
};

export default RoleButton;
