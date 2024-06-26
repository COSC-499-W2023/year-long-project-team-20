# Ryan Grant logs
# T2 Week 13 April 1st - April 7th
# This week:
1. Start and finish final report
2. Talk with Abijith on how DynamoDB graphQL and associated lambdas work within out system
3. Multiple meetings with Abijith Maya and Issa (Mo was MIA all week) regarding our final document system feature list discussing DFD / how our system components integrate with others
4. Recording video demonstration for our project
## Peer Evaluation
![img](https://i.imgur.com/7Im5SQQ.png)
# T2 Week 11 March 18th - March 24th
## Context 
### After posting logs for last week I posted a request for help regarding videos not working in aws rekognition. After talking with a few people in discord Paul from group 1 asked if it was a encoding issue. He ran CLI ffmpeg to reencode the video to ".mp4" AND IT FIXED THE ISSUE. This let me narrow the issue down to: The files that we were recording from our project were named .mp4 but were actually encoded differently. This issue occurs because videos recorded on browser are saved in a webm container. For example running ffprobe on one of the videos:
![ffprobe](https://i.imgur.com/QGmevEB.png)
## This meant that it was an issue that I would be able to solve through the use of lambdas. 
## I spoke again with Paul about how he solved this issue for his group and we spoke about ffmpeg, docker, containers, images. And then after a bit more reseach I found a lambda layer that contained ffmpeg and decided that would be the best way for me to proceed.
## Goals for the week
1. Re-encode videos before blurring
2. Fix video redirection failing in certain cases. 

## Work done this week
1. Setup, redirect generalBucketToPreprocessed to new S3 bucket: change-encoding-to-mp4
2. create new lambda function named: changeEncodingToMP4 triggers off s3 put in change-encoding-to-mp4
- function should reencode video file to .mp4 then move to rekognitionvideofaceblurr-inputimagebucket
3. deployed ffmpeg-lambda-layer, then added it to my function

## Problems encountered
1. ran into tons of issues getting the layer to work, mostly due to my inexperience
1. not setting the directory correctly, should be ffmpeg = '/opt/bin/ffmpeg'
2. trying to run the ffmpeg command off of the s3 object, have to actually download the file to a tmp dir
3. then not really understanding the tmp file system had to add os.chdir("/tmp/") and use the file name by doing tmp_file_name = tmp_file.name
After doing these changes, the cloudfront logs showed what looked like the correct output format but the file was not being reencoded
4. after messing around a bit more I talked with paul again and he had no idea

5. Continued to test, adding stderr, and stdout for error messages but that didnt help diagnose the issue
6. Then after a few hours of testing I found a logic error where I was uploading not the new file but the old file
7. This introduced a few more bugs that needed to be fixed such as needing a secondary tmp file and adding a few more inputs to the ffmpeg command
such as -y to force overwrite and -f "mp4" to force .mp4 file output
## At this point most videos works 
- Fixed issue with the encoding function which would fail on files with a colon in it needed the following 
``` 
import urllib.parse
urllib.parse.unquote_plus()
 ```
- Then I needed a similar fix when searching the file in findRenameMove lambda function 
## changeEncodingToMP4
[![changeEncodingToMP4](https://i.imgur.com/2HLraHo.png)](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/changeEncodingToMP4?fullscreen=true&tab=code)

## Now all videos recorded in our website are re-encoded -> Blurred -> Renamed -> added back to the original folder. 
### What is left (to do next week)
1. Frontend UI to only show one of either the blurred video or the non-blurred video
2. A way for the frontend to receive updates from each step along the way. IE after encoding send a message like "video has been re-encoded moving to blur", after blurring send message. Same thing for failure if that occurs. 
## Peer Evaluation
![img](https://i.imgur.com/vk4LEE4.png)
# T2 Week 10 March 11th - March 17
## Context 
### The team really needs bluring feature done this week as it is the last major feature needed for MVP. This will be top priority this week. I've spent close to 25 hours this week, how much to qualify as two weeks worth? (I have many weeks with 0 so any bonus marks would be greatly appricated)
## Goals for the week
1. Fix the blurring issue
2. Fix the rename and move code
## Problems
1. Managing S3 buckets with lambdas in two different regions require alternate triggers
2. Video that are .mp4 are not working with the blurring feature. While videos being recorded by a default camera app do work. 
## Research
1. Find where in the bluring process videos are failing
2. Find solutions to start_face_detection() not working/logging
## Work Done this week
1. fixed the lambda function detectOutputBlur, this required setting the correct lambda trigger, also modified to code to no longer move to processed folder as this was no longer needed.
2. fixed the findRenameMove lambda function. While I had the right logic for this function, 50% of the code had to be modified due to syntax errors, using correct dict/keys.
3. This function now does the following:
    1. Gets invoked by detectOutputBlur with the filename as context.
    2. Uses list_objects_v2() to get a list of all files in the main storage bucket.
    3. Strips the subfolders from each filename (each file is listed as protected/userfolder/filename).
    4. locates a matching file (the unblurred video)
    5. creates a new variable for the destination path.
    6. modifies the file adding -blur to differentiate between the two files.
    7. moves the file to the correct path.
    8. deletes the copy in the Output S3 bucket.

## Here is what findRenameMove looks like now:
[![img](https://i.imgur.com/EtUPHBi.png)](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/findRenameMove?fullscreen=true&tab=code)
## As there are many parts in this system of bluring I have included as flow diagram for reference:
![img](https://i.imgur.com/2eIwpi3.png)
## Unresolved issues
1. There seems to be a codec issue with how we are recording videos for the project. While the video says its a .mp4 video, it does not work in AWS Rekognition, while videos recorded on a camera app do. 
- 99% sure this can't be resolved through tweaking my code for blurring
## Goals for next week
1. Setup for react/amplify
2. configure frontend to show either blurred or unblurred depending on option selected
## Peer Evaluation
![img](https://i.imgur.com/gtMTfqJ.png)
# T2 Week 9 March 4th - March 10th
## Context
### Again I will have a longer weekly log to showcase the work that I'm doing. This week I should be done with the lambda functions, leaving next week to integrate AWS amplify. 
## Goals for the week
1. Create a lambda function to send a specified video from Bucket 1 -> Bucket 2
2. Add an amplify request to initiate the lambda function
3. Add a lambda function to detect video entering Bucket, 3 rename video to indicate that it is blurred, automatically move it back to bucket 1 (this step should be straight forward if part 1 is done)

## Problems
- My initial idea of automatically detecting a video does not work for a few reasons
- The copy function from bucket 1->2 is copying the entire folder stack
protected/userfolder/video
- Files are failing the blur (I will talk with other groups to see if theyre encountering similar problems)
### The only three solutions I see available are:
1. Do a frequent pass through the subfolders to create a list of all videos
- This would create added operating costs, additionally would add a delay to the bluring feature.
2. Find a way to detect a video entering a subfolder
3. Take the entire file path and just copy the file (this seems like the most straight forwards)

## Research 
1. https://stackoverflow.com/questions/71016610/trigger-lambda-function-by-s3-put-in-subfolder-of-undefined-folder
- one user has a solution: "You can't add a dynamic value for your trigger. So a solution is to get the event at a generic level like /prefix and then get the path of object. Extract the data you want and call your actual lambda. You can do this in 1 lambda as well and don't have to create 2."
S3 -> Lambda (extract path here) -> (actual) Lambda
2. Learning how to have a lambda trigger from amplify
## Work Done this week
1. Configure the S3 bucket trigger to detect new object creation 
2. Manage roles on the Lambda function for correct permissions
3. Reconfigure code to strip file from filepath
    - Done by adding this code
    ``` 
    key_with_folders = event['Records'][0]['s3']['object']['key']    
    filename = key_with_folders.split('/')[-1] 
    ```
4. Files now automatically go from uploaded to bluring
5. Added lambda function to detect video in blur output move file to a processing folder, then call next lambda function
[![link to aws](https://i.imgur.com/PMc9YtB.png)](https://ca-central-1.console.aws.amazon.com/lambda/home?region=ca-central-1#/functions/detectOutputBlur?newFunction=true&tab=code)
6. Added lambda function to find existing file, rename current file and then move it to existing file
[![img](https://i.imgur.com/oz20xVp.png)](https://ca-central-1.console.aws.amazon.com/lambda/home?region=ca-central-1#/functions/findRenameMove?newFunction=true&tab=code)
## For next week
1. Fix the blurring issue
2. Fix the rename and move code

### Peer Eval Screenshot
![peer eval](https://i.imgur.com/z2QNR5K.png)
# T2 Week 8 Feb 26th - March 3rd
## Due to complicatations with my mental health I am very behind where I want to be. This week was spent mostly on figuring out where I left off, where my group was at in the project and figuring out what would be the most useful thing I could do. 

1. The group needed the bluring configured to the website
## My goals for this week:
1. Research
2. Code 1/2 of my feature
## Research:
1. My group members had all done work in amplify and I was completely out of the loop. I needed to figure out how to use Amplify to send videos from one S3 bucket to the next
2. How I can comunicate information between the two services
3. After learning Amplify can only connect to one S3 bucket I would need a workaround. The solution seems to be use a lambda function to manage the data. 
## Basic data representation to help visualize what I am doing
![data representation](https://i.imgur.com/jGwo0gM.png)
- The connection between Bucket 2 and Bucket 3 is automatically done per my previous feature 
## This feature can be broken down into 2 parts:
1. Create a lambda function to send a specified video from Bucket 1 -> Bucket 2
2. Add an amplify request to initiate the lambda function
3. Add a lambda function to detect video entering Bucket, 3 rename video to indicate that it is blurred, automatically move it back to bucket 1 (this step should be straight forward if part 1 is done)
## Possible other steps 
1. If any steps fail add a way to communicate that back to amplify and move video back to bucket 1

## Code: 
https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/generalBucketToPreprocessed?newFunction=true&tab=code
![lambdafunction](https://i.imgur.com/m0jGWck.png)
# Peer Eval Screenshot
![peer eval](https://i.imgur.com/3Tp2t6s.png)
# T2 Week 4 Jan 29th-Feb 4th
# Time spent
1. After researching and talking with other groups regarding AWS Rekognition I concluded that the issue was with the regions
2. Small amount of research looking into what it means to be a different AWS region
3. Bootstraping and deploying the CDK to our AWS with us-west-2 as the region

### For the first time in countless hours of bugfixing the AWS Rekognition works. Here is a short demo of the work in action.
[![demo](https://img.youtube.com/vi/DXlHxnPn8VU/0.jpg)](https://www.youtube.com/watch?v=DXlHxnPn8VU)
## This was a great start and covers the following features: 
- Separate video into frames
- Blur individual frames (detecting faces maybe…)
- Combine blurred frames

## However this approach still needs a few touches to integrate with the rest of the system
1. Frontend option to blur video
2. Lambda trigger from frontend to move video into blurring process
3. Preview for video (after blurring)

### I can show you the lambda functions and state machine in class if you can't see through these links.
https://us-west-2.console.aws.amazon.com/states/home?region=us-west-2#/statemachines/view/arn%3Aaws%3Astates%3Aus-west-2%3A908962261904%3AstateMachine%3AStateMachine2E01A3A5-gxeBY65XUWNI
### Peer eval screenshot
![img](https://i.imgur.com/1pOZoWg.png)

# T2 Week 3 Jan 22nd-Jan 28th
# Time spent
### The first 1/2 of the week I continued trying to find a solution to the permissions problem. Another solution that I tried was changing the permissions that were hardcoded into the lambda functions. This was suggested by this user
![img](https://i.imgur.com/qFuBhGv.png)
### After changing the permissions I was still getting a permissions error.

### I then asked Jan (the person who was talking about rekognition in the first week workshop) if he had gotten it working.
### He let me know that it was not working in ca-central-1 because not all the features of rekognition were in ca-central-1.
### I only had a chance to bring this up on Saturday to the group and haven't been able to switch the regions. (this seems like a huge commitment) and I don't know if there a simple way to go about it.

## If I get this working it would cover 4 features on the feature list
- Separate video into frames
- Blur individual frames (detecting faces maybe…)
- Combine blurred frames
- Preview blurred video

# Context related to the Regions for AWS Rekognition
![img](https://i.imgur.com/ShtO5sD.png)
### Left showing the ca-central-1 options. Right showing us-west-2, options include video analysis
### Peer eval screenshot
![img](https://i.imgur.com/PMcAs6l.png)
# Week 14 Dec 4 - Jan 14
# Time Spent
### For all of the winter break I spent no time on the project.
### After a well needed break, I picked up where I left off. Debugging the lambda functions for AWS Rekognition.

### On Tuesday I was excited to learn how the other groups were finding rekognition, Unforetuntely, they were stuck at the same point as me, on the permissions error.
### On the bright side I now have a group of peers that I can colobrorate with to help solve this problem. 

## A few of the resources I tried to use with no avail:
1. https://docs.aws.amazon.com/rekognition/latest/dg/security_iam_troubleshoot.html
2. https://stackoverflow.com/questions/72462421/amazon-rekognition-accessdeniedexception-user-is-not-authorized-to-perform
3. https://docs.aws.amazon.com/rekognition/latest/dg/security_iam_id-based-policy-examples.html

# Group meetings
### On Tuesday: Issa and Maya were still out of town so it was hard to plan a meeting.
### On Sunday: I spoke with Maya breifly, (Issa joined the call but was traveling so his wifi was poor) about the tuesday class and how we were going to reach our MVP

### Peer eval screenshot
![img](https://i.imgur.com/6pgCKts.png)
# Week 13 Nov 27 - Dec 3
# Time Spent
## **Meetings on:**
### Tuesday: We discussed how much we needed to get done this week in order to make the milestone deadline on Sunday
### Saturday: reconvene and talk about was accomplished in the week and what we had to do during the weekend
### Sunday: Meet once more to finalize our design document for submission
## **This week I was trying to implement this [tutorial](https://aws.amazon.com/blogs/machine-learning/blur-faces-in-videos-automatically-with-amazon-rekognition-video/)**
### The article mentions lots of topics that I have little to 0 experience working with.
### Aws Rekognition - as this was doing the bulk of the heavy lifting for this section of the project
### [aws rekognition analyze metadata](https://aws.amazon.com/getting-started/hands-on/analyze-extract-metadata-video-rekognition/)
### [aws rekognition detect faces](https://aws.amazon.com/getting-started/hands-on/detect-analyze-compare-faces-rekognition/)
### Both of these pages gave me a better understanding of how aws - rekognition works
### Spent time learning how lambda functions work together (using Step functions)
### Docker/Images/AWS ECR
### I have never really understood docker. And after some more research I still don't really understand. Hopefully I will not need a deep understanding for this project.
## This [guide](https://aws.amazon.com/blogs/machine-learning/blur-faces-in-videos-automatically-with-amazon-rekognition-video/) details setting up the follow aws services
1. AWS S3 Bucket
2. AWS lambda function to start detection in video
3. Request sent to AWS rekognition
### Next 3 steps utilize AWS step functions to automate the process
4. AWS lambda to check status of face detection job
5. AWS lambda- get timestamps and face coordinates then information gets passed to aws-rekognition
6. AWS lambda function to blur faces in video this uses AWS Elastic container registry (ECR)
7. video sent to new S3 bucket

## Issues/time spent debugging
1. After <code>pip install -r requirements.txt</code> I was running into the error

` Getting requirements to build wheel ... error
  error: subprocess-exited-with-error

  × Getting requirements to build wheel did not run successfully.
  │ exit code: 1
  ╰─> [54 lines of output]`
  ### This took over 3 hours to debug as it was not clear that the build aws was using had an interaction between the pip modules PyYAML and cython. This issue was caused because the newest version of cython had some incompatibilites with PyYAML
  ### This was fixed by using PyYAML==5.3.1 in requirements.txt
  ### I only found this solution after digging through diffent solutions for over 2 hours
  
2. Then I got the error NFO: building library "npymath" sources
      error: Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools": https://visualstudio.microsoft.com/visual-cpp-build-tools/
      [end of output]
### installed build tools ~15-20 minutes after installing the wrong visual studio and restarting 
3. Several hours of trying to fix PATH variables
### Fixed by deleting python, node, npm and modules. Reinstalled, everything seems to be fixed. 
4. On deployment I was getting very strange error codes. 
### Fixed by doing 20-30 minutes of research someone suggested full disk causing errors and this happened to be my issue. 
5. After Deployment all of the Policies, roles, lambda functions and S3 buckets seemed to be in place. However as soon as I tested it with a video nothing worked. I was getting the error role does not have permission to call DetectFaces in Amazon Rekognition.
### Spent ~2 hours researching IAM roles, rekognition permisions, Testing different IAM Role policies. Created a new role called AdminLambda with the following policies AdministratorAccess and AmazonRekognitionFullAccess. Then set each of the 6 lambda functions execution role to be AdminLambda. 
### Even with all access I am still getting the error in StartFaceDetectFunction:
 <code> Lambda role does not have permission to call DetectFaces in Amazon Rekognition. </code>

### This is from 
<code>
 # use Amazon Rekognition to detect faces in video uploaded to Amazon S3
        try:
            job_id = start_face_detection(bucket, key, 1, reko)
</code>

### After a meeting on Saturay Dec 2nd we discussed how AWS amplify was likely causing permissions issues. We talked about 2 solutions
1. Find how to properly use AWS amplify to work with the permissions.
2. Completely scrap amplify (I don't think this is the best solution)
### Most of Sunday spent on the design document for milestone
### Peer eval screenshot
![img](https://i.imgur.com/QvriGmU.png)
## Week 11 & 12 Nov 13-26
## Assigning tasks for milestone 2
### We orignialy assigned myself, Issa and Abijith to work on KVS however none of us made progress. After Mo had figured out a solution, we reassigned tasks to have enough features to the milestone.
## Tasks I was assigned
1. Create lambda functions to detect when a new video is uploaded.
2. Create the bluring feature.
3. Create a lambda function to blur the video when detected from the first function, blur the video and send it to a new S3 bucket where the processed video was stored.
## Tasks completed this week
1. Setting up and offical S3 bucket for video preprocessing
2. Created a new Policy to give permissions for the lambda function to access the required resource.
3. Created a new IAM role. this grants a Lambda function permission to access AWS services and resources. 
4. Attached the 2 previous
5. Created a lambda function for detecting a new file being added to the S3 bucket video-preprocessing. 
6. Added manual testing as well as automated logs sent to cloudwatch services
### Tasks to do before milestone (1 week away)
1. Create a bluring feature
2. Create lambda function to blur and send to new bucket
### Peer eval screenshot
![img](https://i.imgur.com/7l1ou8C.png)
## Week 10 Nov 6-12
### From a week before the reading break I have been dealing with Major Depression disorder, causing massive ammounts of insomnia and complete lack to of will to work on any of my course. After talking with my parents they advised me to seek counsel. And im now taking medication to help alliviate these issue. I have talked about this a bit with my group to help them understand why I haven't been able to get that much done. During this time Mo steped up to sort out the storing video situation. I was at a huge roadblock so I am very grateful to him for this. Now I'm behind in all of my course and trying my hardest to meet the Milestone 2 deadline on Sunday Dec. 3rd.
## Week 9 Work period Oct 30 - Nov 5
## Overview of tasks completed
1. Create slides for Presentation
2. Create script for Presentation
3. Practice script until memorized
4. Coordinate 2 meetings for group practice. One on Wednesday night another on Thursday morning
5. Saturday meeting to go over features for next milestone
6. Assign features for next milestone
## Tasks to complete by milestone:
1. Create signal channel for KVS (WebRTC)
2. Create stream for KVS (WebRTC)
3. Front end get mic & camera
4. JS capture a/v
### Peer eval screenshot
![img](https://i.imgur.com/OFQBitK.png)
## Week 8 Work period Oct 23 - Oct 29
## Overview of tasks completed
1. Complete slides for Mini presentation
2. Create, edit, publish video demonstration for the presentation
### Although a major setback with not being able to use AWS video, considerable effor has been spent on Kinesis Video Stream (KVS) implementation. The use of WebRTC with associcated libraries in React has been reasearched. 
## Currently working on implementing these features:
1. Display video from database

## Tasks to complete by milestone:
1. Upload video to database
2. Display video from database
3. Mini-Presentation
### Peer eval screenshot
![img](https://i.imgur.com/SileOQX.png)
## Week 7 Work period Oct 16 - Oct 22
## Overview of tasks completed
### Our team ran into some major hurdles revolving around the setup of certain amazon services. Because the issues were preventing the continuation of indvidual tasks we decided to meet on Oct 17 in person to progress on our project. Although I was struggling with my personal laptop issues I was there to help if anyone needed my assistance. 
## Tasks to complete by milestone:
1. Upload video to database
2. Display video from database
3. Mini-Presentation
### With 2 weeks remaining until the mini presentation I should have my 2 features completed by next week. Leaving 1 week of work dedicated to the presentation. Including slides/video demonstration with prepared material. 
### Peer eval screenshot
![img](https://i.imgur.com/SileOQX.png)
## Week 6 Oct 9-15
## Overview of tasks completed:
1. Research how videos are stored in amazon database
2. Practice using video in html
3. Review peer work to familiarize myself with their implementation
## Goals for next week
1. Upload video to database
2. Display video from database
## Overview of tasks to be completed by milestone
1. Upload video to database
2. Display video from database
3. Mini-Presentation
### Peer eval screenshot
![week5](https://i.imgur.com/jdrc3Ep.png)
## Week 5 Oct 2-8
## Overview of tasks completed:
1. Plan meeting during class for project plan
2. Research tech stack including AWS, S3, etc
3. Break scope into smaller features
4. Assign features to each person for each milestone
## Overview of tasks to be completed by milestone
1. Website visual mockup
2. Upload video to database
3. Display video from database
### Peer eval screenshot
![tasks from board](https://i.imgur.com/UrmaTcI.png)
## Week 4 Sept 25 - Oct 1
## Overview of tasks:
### After being assigned to the datastructure portion of the word chain assignment I broke up the requirements into the following:
1. Find a word bank that would fit our specifications.
After reviewing many sources (most of which were in a unusable data format) I came upon 12Dicts and the various compliations of dictionaries. I chose the 2of12 wordlist which has all the words that were in at least 2 of the 12 major dictionaries. Resulting in a 41000 word .txt file.
2. Then with the .txt file I had to write code in python to convert to a .csv file. 
3. Take the .csv file and seperate it into seperate .csv files where the lengths of words were the same.
4. Write a simple python function to grab the designated .csv file convert it to a list and pass that to whoever needs it for the algorithm.
5. Finally I needed to document my work and push the python file and .csvs to the repo.

## Tasks completed from the board:
![tasks from board](https://i.imgur.com/9CpaTJy.png)

![tasks from board](https://i.imgur.com/9CpaTJy.png)
