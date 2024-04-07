# Getting Started with the React App 
# 1. Prequisites: 
i. Install git:
    a. For Windows, Go to https://git-scm.com/download/win and Download and run the installer of your choice from the webpage
    b. For MacOS, you need to have homebrew installed:
            if you don't, you can run this command: 

                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        assuming you now have homebrew installed you can run: 

                brew install git

    c. For Linux, 

            sudo apt install git

ii. Set up git credentials on github.
    a. Configure github credentials by running this command:
        
        git config --global user.name "Your Name"

        git config --global user.email "your_email@example.com" 

iii. Install node by going to this website https://nodejs.org/en/download and selecting the latest node version for you operating system
    a. For Linux:

        sudo apt install nodejs npm

    b. For MacOS: 

        brew install node

iv. update npm to the latest version: 

    npm install -g npm@latest

v. Install VScode (or another IDE of your choice) (optional)

vi. Install aws cli (this will depend on the type of AWS account you have as well as the operating software).Therefore please see link on installation guide. https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html 


Configure AWS CLI credentials. This step is dependent on the type of AWS account that you have and the access credientials. Therefore, refer to this documentation: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
However you can refer to this guide for  for general  Run AWS Configure SSO
Install amplify cli
https://docs.amplify.aws/javascript/tools/cli/start/set-up-cli/

After the pre-requisities are installed. Clone our repo using the following command: https://github.com/COSC-499-W2023/year-long-project-team-20.git
After cloning repo change directory into the app directory of the repository.
Use this command to install all node dependcies and packages
mac or linux: $ sudo npm install
windows: npm install
Use this command to pull the amplify backend for this app:$ amplify pull --appId d2z50th821pl3w --envName staging
Finally use this command to run the app on your localhost: 
mac or linux: $ sudo npm run start
windows: npm run start
Install or update to the latest version of the AWS CLI - AWS Comman...
Instructions to install or update the AWS CLI on your system.
Configure the AWS CLI - AWS Command Line Interface
Configure settings that the AWS CLI uses to interact with AWS.
Set up Amplify CLI - JavaScript - AWS Amplify Documentation
How to install and configure Amplify CLI AWS Amplify Documentation
Image


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
