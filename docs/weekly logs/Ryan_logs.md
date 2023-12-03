# Ryan Grant logs
## Week 12 Nov 20-26
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
## Week 10 & 11 Nov 6-19
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
