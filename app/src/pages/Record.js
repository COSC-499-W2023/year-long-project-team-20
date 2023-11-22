import React from "react";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
    Text,
    Flex,
    AmplifyProvider
  } from "@aws-amplify/ui-react";
  

const Record = () => {

  return (
    <div>
      <h1>Record</h1>
      {/* Your component code here */}
    </div>
  );
};

export default withAuthenticator(Record);
