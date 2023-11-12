import { Outlet } from "react-router-dom";

import logo from "../logo.svg";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
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

import {
  Mission 
 } from '../ui-components';

const About = () => {

  return (
     <Mission width={"100"} />
  );
};

export default withAuthenticator(About);
