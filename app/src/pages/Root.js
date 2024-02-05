
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
  NavBarHeader2 
 } from '../ui-components';
 import { useNavigate } from 'react-router-dom';


 //Components that are in root will show up in all pages of our website, such as the navigation bar
const Root = ({ signOut }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      Auth.currentAuthenticatedUser()
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate();

    //Override amplify component so that nav bar buttons lead to the correct page
    const navbarOverrides = {
        "Home" : {
          style: {
            cursor: "pointer",
          },
    
          onClick: () => {
            navigate("/");
          }
        },
    
        "Profile" : {
          style: {
            cursor: "pointer",
          },
    
          onClick: () => {
            navigate("/profile");
          }
        },
    
        "Record" : {
            style: {
              cursor: "pointer",
            },
      
            onClick: () => {
              navigate("/record");
            }
          },

          "Upload" : {
            style: {
              cursor: "pointer",
            },
      
            onClick: () => {
              navigate("/upload");
            }
          },

          "Library" : {
            style: {
              cursor: "pointer",
            },
      
            onClick: () => {
              navigate("/library");
            }
          },
        
        "About" : {
          style: {
            cursor: "pointer",
          },
    
          onClick: () => {
            navigate("/About");
          }
        },
        "Chat" : {
          style: {
            cursor: "pointer",
          },
    
          onClick: () => {
            navigate("/Chat");
          }
        }
    
      }

  return (
    <AmplifyProvider>
     <View padding="all" className="App">
       <Card>
         <Flex direction="column" align="center" gap="1rem">
         <NavBarHeader2 width={"100"} 
         overrides = {navbarOverrides}/> 
         <Outlet></Outlet>
         </Flex>
       </Card>
     </View>

    </AmplifyProvider>
  );

  
};

export default withAuthenticator (Root);
