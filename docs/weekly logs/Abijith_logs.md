# Abijith Ashok Log
## Week 23 (March 18th to March 24th)
## Feature worked on
- Created the table RequestVideo with the following Fields and indexes:
- - created: tracks the time the request was created
- - dueDate: sets the time by which the request must be completed by
- - from: lets the current user know the user (by username) requested for the video
- - to: tracks who the request is supposed to go to
- - fromEmail/toEmail: lets the current user choose whether to notify the recipient of the request by email or username, if they choose email then a lambda will send an email to notify them of the request
- - isRead: tracks the read status of the request by the recipient
- - isCompleted: tracks which requests have been completed
- - message: stores the message that the current user wants to send to the recipient
- - There are also two indexes on this table for quick look-up: The first index partitions the table based on the recipient usernames and sorts the tuples based on the DueDate, the second index also paritition the table based on the recipient usernames and sorts the tuples based on their creation time. 

- Finished writing the first version fo the request video feature
- - Users can now use the Requests page to send request to other users asking them to upload a video. 
- - Users can also provide a due data and message along with their request
- - I used conditional css to make sure the cards change in appearance based on whether the request has been completed or not. 
- - There is also a blue dot to indicate if a request has been read or not. 
- - I also wrote a lambda to send an email to the recipient if the current user chooses to send their request via email

## Goals for next week
- Implement a simple notification system on the app to let the user know whether some other user has shared a vidoe with them or requested a video from them
- Implement a send request page to see the status of the request that was send from the current user
- Request production access to extend the email feature functionality of the app to non-verified Amazon Simple Email Service (SES) users (Essentially all users of the app)
- Buy a domain to incorporate with Amazon SES
- Clean up the UI for the Request Video and Share Video
![Week 23 Logs](https://imgur.com/D81wsL0.png)


## Week 22 (March 10th to March 17th)
## Features worked on
- Finished writing the Lambda to send emails based on the InAppMessaging 
- - Lambda code can be found in the docs/weekly logs/lambda function
- - Lambda is set to trigger on every update to the shareVideo InAppMessaging table
![Lamda Trigger Configurations](https://imgur.com/13Ryvea.png)
- Set up Amazons Simple Email Service to send emails to verified users
- - Each user receives a custom email send to their email whenever a video is shared
- - The email uses Inline HTML to format the email to the desired template
![Email Format](https://imgur.com/zz4E4iI.png)
- Started working on the request video feature
- - Decided on the table that will be used to make the request feature table
- - Request will have a due date and read status

## Goals for next week
- Finish the Request Video Feature
- Finish share video using email
- Set up email notifications
![Week 22 Logs](https://imgur.com/ET5anPj.png)

## Week 18 (January 28th to February 4th)
## Features worked on
- Started work on in app messaging with amplify
- Set up database and graphql to take in messages and save videoURLs
- Started work on frontend of the chat feature
## Goals for next week
- Finish working the chat feature
- Have atleast one way of sharing videos among users
![Week 18 Logs](https://imgur.com/dB6YvWX.png)

## Week 14 (January 8th to January 14th)
## Features worked on 
- Fixing the build error bug (posted on aws-amplify discord and amplify hosting github issues page)
- - Build fails even on older versions of the app having changed nothing (including code or build settings)
- Started work on improving the UI
- Building the Share Video Feature
## Goals for next week 
- finish the share video feature
- collaborate with Mo to implement access controls for videos
![Week 14 Logs](https://imgur.com/mvPRkwJ.png)


## Week 13 ( November 28th to December 3rd)
## Features worked on 
- Troubleshooting Upload video feature with Issa and Mo, Issa fixed the major AccessDenied issue on Saturday and now the video are stored in their required S3 Buckets
- Wrote Test Report for the features we currently have (tests/TestReportDec2.md)
- build prototype for the new UI for better user experience
- finished the upload video feature 
- learned about formatting the HTTP request for uploading and downloading from s3 
- started working on the download video from database feature
 ## Goals for next week
 - Finish the download from database feature
 - Finish the new UI design 

 ![Week 13 Logs](https://imgur.com/EfSDEHP.png)

## Week 12 (November 13th to November 27th)
## Features Worked on
- Attended team meetings
- Held pair programming session with Mo, we tried to finish the upload feature
- - failed with error permission denied
- - tried multiple different fixes, and spent over 4 hours exploring different ways to fix this issue
- - aws still doesn't recognize the cognito user pool as authorised users even after creating different policies and allocation roles accordingly. This issue will be posted on the discord as we have been unable to make progress for a week with the same error.

## Goals for next week
- Finish the upload video feature
- Finish view video feature
- Finish transcoding and download video feature
![Week 12 Logs](https://imgur.com/tlWq9xc.png)

## Week 10 (November 6th to November 12th)
## Features Worked on
- Tried using the amplify video package to initialize the backend environment with amplify studio
- - Amplify push/Buiding resources failed ( error logs are attached in the docs folder) 
- - cannot figure out how to make it work with the current tech stack
- - will have to rebuild after researching about new backend tech stack
- - all work done with this approach can be seen on the branch (ullattil-video-trial)

- Building in progress with cloudformation for video service
- - it shows create complete, but untested as of the time of writing
- - will test setting up S3 bucket to pull video for each user
- - still shows create in progress (after running it for 2 hours). I will update log once the build is complete

## Goals for next week
- Finish building the backend resources for creating and uploading video for each user
- Test the new build by uploading and downloading video for each user
![Week 10 Logs](https://imgur.com/XycbV02.png)

## Week 9 (October 30th to November 5th)
## Features Completed
- Helped make the team presentation
- Researched about alternatives to amplify video
- Started working on AWS kinesis and rekognition

## Goals for next week
- Set up AWS kinesis
- Set up Video Upload
- Integrate with frontend
![Week 9 Logs](https://i.imgur.com/l1S3MO4.png)

## Week 8
## Features Completed
- Set up Cypress for automatic testing of cypress
- Set up pull request review on AWS amplify
- Created feature branches for testing storage
- Set up canary with CloudWatch to monitor uptime and downtime of website
- Solved issues with framework and platform settings on amplify through CLI
![Imgur](https://imgur.com/FqltdKJ.png) 

## Week 6-7
## Features Completed
- set up amplify CLI on our project
- set up storage on S3, configured S3 bucket to host videos
- debugged issues with amplify init
- designed starter database Schema (will be modified with each new feature we implement)
- Set up AWS Amplify project using credentials and then User tokens
- Debugged our project especially setting up amplify init
![Imgur](https://imgur.com/GB6HSPF.png)


## Week 5
- Attended all team meetings
- setting up admin access for our project on aws
- linking github repo to our project
- Refined the tech stack and tried setting up the project on aws(unsuccessful)
- Accepted and distributed tasks
![Imgur](https://imgur.com/4a9AxI0.png)

## Week 4
## Features Completed
- Attended all team meetings
- Researched about the tech stack and how it integrates with AWS amplify
- Wrote most of the tech stack section in the project plan
- Accepted and distributed tasks
- Established expectations about team coordination for coding and testing
## Number of tasks completed from board
![Imgur](https://imgur.com/wcJCbUB.png)

## Week 3
## Features completed

- Wrote Test for checking word length parity of output and input
- Fixed line length too long error which resulted in tests failing upon push
- fixed the pyproject.toml file to ingnore future errors from E501: line too long
- confirmed that all tests pass

## Number of tasks completed from board
![Imgur](https://imgur.com/BtmMEM0.png)
