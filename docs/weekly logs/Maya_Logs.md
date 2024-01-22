# Maya Ayaviri Bacarreza's Logs 

## Week 16 - Project Log

**Work period January 15th - January 21st**

<img width="714" alt="Screen Shot 2024-01-21 at 9 50 37 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/3df3c4dc-3b5a-4555-a6bf-143d6fb33aaf">

### Tasks Completed This Work Period (found on trim-video branch)
* Added UI for the trim video function
* Found library to allow for the implementation of the trim video function (ffmpeg)
* Initialized and set up ffmpeg within the project, added a function that updates user on the amount of video processing completed

### Future Tasks
* Complete implementation of trim video function (allows users to cut however many seconds they want off of their videos from either the start or end)
* Prevent users from cutting out their entire video
* Add tests for the progress bar
* Find what other editing functions can be added to the project using ffmpeg
  
### Context 
Like I said last week, the features I was working on previously were different from what I had experience with already in this project. Following a team discussion, where others expressed interest in working on the share video function I decided to switch to working on the trim video function. I already was familiar with working with video so this allows me to get started quicker. 

Ffmpeg seems to be a good resource for working with videos. However, I found they had some big updates as of 2023. This made it a little tricky in finding up to date resources for working on it, but it has good documentation which helped.

I also spent some time trying to figure out why some of our aws tests are not passing, even though the website runs like normal locally. This is something the team is still trying to fix.

## Week 15 - Project Log

**Work period January 8th - January 14th**
<img width="1133" alt="Screen Shot 2024-01-14 at 9 17 57 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/2721cc72-085b-49fd-93cf-488180202969">

### Tasks Completed This Work Period
* Attended team meeting to discuss MVP features to implement
* Filled out team log report
* Updated Kanban board
* Began researching what back end approach we will take to allow users to share videos with other users
  
### Future Tasks
* Complete impementation of the share video function
* Add more automated tests

### Context 
The features I'm working on this semester are quite different from the ones I worked on last semester, which is why I am spending time now researching before starting the implementation. 
  
## Week 13 - Project Log
**Work period November 27th - December 3rd**
<img width="910" alt="Screen Shot 2023-12-03 at 8 43 28 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/43723443-cfad-432e-ada8-3c111bae0c7a">

### Tasks Completed This Work Period (found on maya-record-video branch and master)
* Fixed bugs in play video back function
* Added some styling to the video buttons, and made download video its own button
* Added save video button and functionality from the front end side, and called back end function which was implemented by another memeber so that video gets uploaded to an s3 bucket
* Worked on design milestone document
* Added tests in cypress for router and record video functions

### Future Tasks
* Expand on current tests 

### Context 
This week Issa was able to solve the issue that prevented us from being able to connect to the s3 bucket. Mo and Abijith also spent time trying to resolve this issue. After it was resolved I used their functions to combine it with the front end of side of saving a video using the media recorder api. 

## Week 11 & 12 - Project Log
**Work period November 13th - November 26th**

<img width="870" alt="Screen Shot 2023-11-26 at 12 42 57 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/9f1765f6-0fb3-4418-b408-a97508244a51">

### Tasks Completed This Work Period (found on maya-record-video branch)
* Implemented the record video function, which asks users for camera/audio permissions and allows user to start and stop a recording
* Added play video back function, which plays the recorded video for the user when play video button is pressed
* Added download video function, which downloads the recorded video to the users computer when the video is played 

### Tasks in Progress 
* Improve design/appearance of the record video ui
* Implement share video front end
* Work on design milestone document/video submission

### Context 
Following a team meeting where AWS Kinesis challenges were discussed, we decided to change directions. Instead of using Kinesis and WebRTC for recordings of livestreams, we shifted to allowing users to record videos directly from their browsers (using WebRTC and MediaRecorder API). Then we would save these videos to an S3 bucket. This is why I shifted from focusing on the share video feature to the record video function.

## Week 10 - Project Log
**Work period November 6th - November 12th**
<img width="767" alt="Screen Shot 2023-11-12 at 4 45 51 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/f6601826-5fe8-473b-8b95-8c843a3eb93f">

### Tasks Completed This Week (found on maya-front-end branch)
* Implemented a functional navigation bar using amplify components and react-router (which is compatible with the amplify's authentication setup)
* Set up pages that the navigation bar redirects user to
* Added information about our software to the about us page using amplify's figma component generator
* Added a personalized welcome message on home page 
  
### Tasks in Progress 
* Implement share video frontend
* Research how the front end of record video will interact with the backend (using possibly either amazon kinesis or amazon ivs)
* Research ways we will implement share video backend

  

## Week 9 - Project Log
**Work period October 30th - November 5th**
<img width="793" alt="Screen Shot 2023-11-05 at 4 56 37 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/9138b8d6-944c-4ea8-84a7-9bdb8409a199">


### Tasks Completed This Week
* Completed mini presentation (worked on my slides/script, added graphics) & Reviewed other team presentations
* Experimented with amplify's figma react component generator 
  
### Tasks in Progress 
* Decide on website branding/theme/colour scheme and implement it for the home page 
* Utilize amplify's figma react component generator
* Grab user data to display personalized webpage content

### Context for week 8
This week we switched up who is working on what after we decided to put some more focus on the front end side of our website. We spent a lot of time this week focused on the presentations and seeing what we could do differently after seeing what other groups have done, that is why we switched up assigned tasks. 


## Week 8 - Project Log
**Work period October 23rd - October 29th**

<img width="1066" alt="Screen Shot 2023-10-29 at 1 28 20 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/ab17a14d-29a3-4a98-a413-7835e9141f6c">

### Tasks Completed This Week 
* Worked with team to discuss what we will each say for the presentation
* Decided with team to pivot away from using amplify video due to its limited documentation and it no longer being maintained/upkept
* Decided with team to switch video back end to AWS Kinesis, as it was suggested by the client
* Had my git branch connected to amplify (as did the rest of the team so now we have the ability to work separately for the front end)

### Tasks in Progress 
* Research how Amazon kinesis can be integrated/implemented with our current project
* Complete presentation

### Context for week 8
* In the process of trying to implement aws video, our website deployment began failing on amplify. With the help of another team member this issue was resolved, but set us back in terms of making progress


## Week 7 - Project Log
**Work period October 16th - October 22nd**

<img width="614" alt="Screen Shot 2023-10-15 at 11 45 30 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/8ca5f512-2657-4eea-aca9-f0cfa2a174c5">

### Tasks Completed This Week 
* Connect amplify to my local repository
* Run website locally
* Research how to set up amplify to work with multiple collaborators
  
### Tasks in Progress 
* Set up video back end
* Possibly modify amplify environment set up so that multiple people can work on it simultaneously, pending discussion with team members 


### Context for week 7
This week the team members in charge of setting up Amplify were able to complete this task which was demonstrated to the rest of the team on Tuesday. I began the set up process of connecting my local environment with our set up amplify environment to be able to run it and modify it. By thursday I was able to run the website locally but was having problems connecting it with amplify. I helped other team members with running the website locally. 

Thursday we shifted the allocation of tasks. To set up Amplify we switched our front end from Next/ts to react. Due to this my record video front-end task was set aside for a later time. One member was having trouble with signing into aws/completing the amplify set up, so I was assigned to work on the video back end set up. For the rest of the week this is what I worked on. First I had to complete connecting my environment with the existing amplify backend, which I was able to do. 

I tried to configure amplify so that I could test out the video back end feature on a seperate amplify environment (equivalent to a git branch) so that in case something went wrong it wouldn't impact the website we currently had running. However I had troubles with this, my environment would give me errors upon deploying the website using my git branch. I decided to just try and set up the video back end on the main environment running it locally, without pushing to amplify. 

## Week 6 - Project Log
<img width="614" alt="Screen Shot 2023-10-15 at 11 45 30 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/8ca5f512-2657-4eea-aca9-f0cfa2a174c5">

### Tasks Completed This Week 
**Work period October 12th - October 15th**
* Researched TypeScript basics online 
* Started experimenting with the sample Node.js/TypeScript project, implemented basic designs for the welcome page 
* Attended amplify set up meeting with team members 
  
### Tasks in Progress
* Begin working on record video back end now that amplify is set up 
* Continue working on front end (record video page)


## Week 5 - Project 

### Tasks Completed This Week
* Created basic UI designs in figma for the record video view 
* Disscused design ideas for the user home page and how shared videos will be accessed
* Reviewed how AWS/Amplify works with team members 
* Conducted research on how backend implementation of recording a video will work
  
### Next Week Goals
* Expand upon figma prototype design in collaboration with other team members (edit video view, add contact view, profile view, login view, sign up view, welcome page view)
  * Refine the record video view
* After prototype is complete, modify tasks assigned if new features are added or removed
* Help team members working on the aws/amplify set up
  * If set up goes well, then begin working on the record video front end. Other wise, just focus on helping members with the set up
  
### Board Screenshot
![week 5 board ](https://i.imgur.com/PaYmjQy.png)
Other: Research on how aws/amp works & potential ways to implement recording video feature using an aws service

## Week 4 - Project Plan 

### Tasks Completed This Week
* Come up with possible user groups
* Help decide what features will be included in MVP 
* Help split up MVP's features into tasks that can be assigned to different milestones
* Add tasks to KanBan board
  
### Board Screenshot
![week 4 board ](https://i.imgur.com/qKuuemi.png)

### Goals for Next Week 
* Brainstorm ideas for website design with team, create paper prototypes
* Resarch how to implement video recording feature (front end and back end)
* Begin implementing video recording feature (front end)

## Week 3 - Word Chain
### Tasks Completed
* Added a test to check that generated word differs if program is run multiple times with the same input
* Added tests to check that nothing is returned when there are no possible chain words that exist or when all the possible return chain words have already been used
* Changed import line in main.py to fix error that showed up when importing find_chain_word in test file

### Tasks completed from board

<img width="651" alt="Screen Shot 2023-09-24 at 4 57 13 PM" src="https://github.com/COSC-499-W2023/word-chain-exercise-team-20/assets/66889922/fb7283b2-c152-4291-952f-0ea0d2de7ea9">
