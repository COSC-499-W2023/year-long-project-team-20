import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from "react";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Text,
  Flex,
  AmplifyProvider,
} from "@aws-amplify/ui-react";

import { Mission } from "../ui-components";
import LearnMore from "../components/LearnMore.js";

const About = () => {
  return (
    <div>
      <Mission width={"100"} />
      <LearnMore />
    </div>
  );
};

export default withAuthenticator(About);
