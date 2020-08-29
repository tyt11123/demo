import * as React from "react";
import { GoBack } from "./GoBack";

export const NoMatch = ({ location }) => (
  <div>
    <h3>
      404 <code>{location.pathname}</code> not found
    </h3>
    <GoBack/>
  </div>
);