# Getting Started with the React App:
## I. Prequisites: 

1. Install git:
    
    a. For Windows, Go to https://git-scm.com/download/win and Download and run the installer of your choice from the webpage.

    b. For MacOS, you need to have homebrew installef,if you don't, you can run this command: 

        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    assuming you now have homebrew installed you can run: 

        brew install git

    c. For Linux, 

        sudo apt install git

2. Set up git credentials on github:  
    
    a. Configure github credentials by running this command:
        git config --global user.name "Your Name"

        git config --global user.email "your_email@example.com" 
   b. You should follow this guide to authenticate with your github account with git: https://docs.github.com/en/get-started/getting-started-with-git/set-up-git

3. Install node by going to this website https://nodejs.org/en/download and selecting the latest node version for you operating system
    
    a. For Linux:

        sudo apt install nodejs npm

    b. For MacOS: 

        brew install node

4. update npm to the latest version: 

        npm install -g npm@latest

5. Install VScode (or another IDE of your choice) (optional).

6. Install AWS CLI (this will depend on the type of AWS account you have as well as the operating software).Therefore please see link on installation guide. https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html 


7. Configure AWS CLI credentials. This step is dependent on the type of AWS account that you have and the access credientials. There are also many ways in which one can configure their credentials. Therefore, refer to this documentation: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html \
One way to configure the CLI is to run:

        aws configure
        aws configure ssoYou will be prompted
    You will be prompted to login to your aws account and then you will be prompted to enter your credentials in the terminal.

8. Install amplify cli. You can refer to the documentation here: https://docs.amplify.aws/javascript/tools/cli/start/set-up-cli/

        npm install -g @aws-amplify/cli
    Then run 

        amplify configure
    This will prompt you to login to your AWS account and then take you to the IAM Identity and Access Management page on the console. There you will be prompted to either select an existing User or create a new User and attach IAM policies and roles. For our project we selected the CapStonePowerUser role that was assigned to us. 

## II. Installation

1. Clone our repo using the following command: 

        git clone https://github.com/COSC-499-W2023/year-long-project-team-20.git

2. After cloning repo change directory into the app directory of the repository.

        cd year-long-project-team-20/app

3. Install all node dependcies and packages

    a. mac or linux: 

        sudo npm install
    
    b. windows: 
    
        npm install
4. Use this command to pull the amplify backend for this app:
        
        amplify pull --appId d2z50th821pl3w --envName staging
5. Finally use this command to run the app on your localhost: 
    
    a. mac or linux: 
        
        sudo npm run start
    b. windows: 
        
        npm run start


## Available Scripts

In the project's app directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npx cypress open`

Launches the test runner in the interactive mode.\
See the section about [running tests](https://docs.cypress.io/guides/getting-started/opening-the-app) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
