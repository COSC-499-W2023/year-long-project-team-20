# Maya Ayaviri Bacarreza's Logs 
## Week 25 - Project Log
**Work period March 25th - March 31st**


<img width="708" alt="Screen Shot 2024-03-31 at 8 55 46 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/615b8747-dafc-4c84-8b6f-36aab269d598">


### Tasks Completed This Work Period (found on pull request https://github.com/COSC-499-W2023/year-long-project-team-20/pull/228)
* Added ViewContext to store information about which page view the user has selected in library or request pages
* Updated library and request pages to load information from ViewContext and save information to it
* started UI for sent requests to allow user to edit requests (found on viewSentRequestsMaya branch)
* started to store progress bar info in context to display ongoing process even if user leaves the page
   
### Future Tasks
* Continue to develop sent requests UI
* Make fixes to the progress bar suggested such as update colors to match theme and make it so that the progress bars still updates if the user navigates to another page

### Context 
This week I added the ViewContext page to store which view user has last selected in the library and request pages. This allows for the user to make a selection, navigate to another page, navigate back and see the view that they last selected. Previously, for example, in the library page it would default back to the uploaded videos page even if you selected recieved videos. With the changes made it will no longer switch to the default. 
I also tried to use context for the progress bars, but since there can be multiple progress bars it is more complicated to implement. If there is time next week I'll continue to work on this. But, I will be more focused on finishing the ui for sent requests that will allow users to edit requests.


# Maya Ayaviri Bacarreza's Logs 
## Week 24 - Project Log
**Work period March 18th - March 24th**
<img width="648" alt="Screen Shot 2024-03-24 at 9 26 59 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/2898284c-bd91-4f1a-aefb-e71bb2174c32">

### Tasks Completed This Work Period (found on pull request https://github.com/COSC-499-W2023/year-long-project-team-20/pull/218)
* Develop receieved requests UI to be used to display any requests other users have sent the logged in user
* Changed the filename of recorded videos to not contain any colons in collaboration with Ryan, after he informed the group that it was causing issues in the backed for blur video
   
### Future Tasks
* Develop sent requests UI
* Find way to have toggle button remember the selected view even after the user navigates away 
* Make fixes to the progress bar suggested such as update colors to match theme and make it so that the progress bars still display ongoing progress if the user navigates to another page

### Context 
This week I worked on the receiving requests UI, I created a component that displays the information about a request like who sent it, its description, 
when it is due by, and if it is or is not complete. I set up the UI to decrease the opacity of the card if it is marked as completed, so that the users attention
can be drawn to requests that have not yet been completed. Additionally, I added a date selector to the send a request page after it was discussed in a team meeting 
that requests will have an associated due date. 

I also coordinated with ryan to make an adjustment to the names that we were using to save videos to the backend. 

# Maya Ayaviri Bacarreza's Logs 
## Week 23 - Project Log
**Work period March 11th - March 17th**

<img width="700" alt="Screen Shot 2024-03-17 at 3 38 04 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/08a54f61-2c88-4077-9656-bb2c77ab9bd7">

### Tasks Completed This Work Period (found on https://github.com/COSC-499-W2023/year-long-project-team-20/pull/195)
* Develop request video ui (involved making a new toggle button component to let users switch between two screen display options)
* Update library page ui to use new toggle button
   
### Future Tasks
* Find way to have toggle button remember the selected view even after the user navigates away 
* Make fixes to the progress bar suggested such as update colors to match theme and make it so that the progress bars still display ongoing progress if the user navigates to another page

### Context 
This week I worked on the request video UI. On the request tab we wanted users to be able to select between the option of sending a video request to another user or to view requests that have been sent to them. This is similar to the libray tab which allows users to pick between seeing their uploaded video and videos sent to them. So I created a toggle button component (that user can click on to switch between two given views) that could be used on both pages to allow our design to be consistent and easily understandable for the user. After the toggle button was implemented and working, I made the request video form to be shown when the user wants to request a video. And then I modified the library.js code to use the toggle button as well.




# Maya Ayaviri Bacarreza's Logs 
## Week 22 - Project Log
**Work period March 4th - March 10th**

<img width="793" alt="Screen Shot 2024-03-10 at 4 24 54 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/9cd3f616-ea00-4277-9389-9bc9dc811451">

### Tasks Completed This Work Period (found on "allow multiple video uploads at once" pull request https://github.com/COSC-499-W2023/year-long-project-team-20/pull/183)
* Allow user to upload multiple videos simultaneously on upload video page, updating user on progress of each one
* Only show the progress update bar when upload video is hit, and hide the progress bar if an error occurs
* Stop camera access when end recording is hit, restart camera access when start recording is hit
* Centred recording component and buttons, made the size of the reocrding component dependant on users browser window size 
   
### Future Tasks
* Develop request video ui
* Make fixes to the progress bar suggested such as update colors to match theme and make it so that the progress bars still display ongoing progress if the user navigates to another page
* Use FFMPEG with lambdas in aws

### Context 
This week we had the peer evaluation session which was very useful in helping us find things to change or update. The changes to the video recording and the progress bar component were based off of the feedback we got from users during the peer evaluation. With the changes made, now in the upload page a user can upload many videos at once easily and view how long each one will take based off the progress bar. Next week I'll be woking on the request video ui since it is a feature we are aiming to get done. 


# Maya Ayaviri Bacarreza's Logs 
## Week 21 - Project Log
**Work period February 26th - March 3rd**
<img width="745" alt="Screen Shot 2024-03-03 at 8 25 10 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/3e9dda51-565e-4755-b89c-16bf439d0419">


### Tasks Completed This Work Period (found on "record-ui-changes" pull request)
* Added progress bar that updates on the percentage of their video that has been uploaded https://github.com/COSC-499-W2023/year-long-project-team-20/pull/165
* Made some minor improvements to the changes from last week https://github.com/COSC-499-W2023/year-long-project-team-20/pull/163
   
### Future Tasks
* Allow user to upload multiple videos simultaneously on upload video page, updating user on progress of each one
* Use FFMPEG with lambdas in aws

### Context 
The test issue from last week was resolved. I was able to implement a progress bar that lets the user know how much of the video has been uploaded. Next week I will work on allowing users to upload multiple videos, each displaying its own progress bar. If time allows I will pick back up trying to use ffmpeg with lambdas. Otherwise I will work on UI improvements or bugs found during peer eval.

## Week 20 - Project Log

**Work period February 12th - February 18th**
<img width="990" alt="Screen Shot 2024-02-18 at 9 30 18 AM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/7de34650-d787-481e-a942-1cc3128d2f90">

### Tasks Completed This Work Period (found on "record-ui-changes" pull request)
* Added prompts to record video page
* Added text to be more responsive to user (Clearly lets user know when video recording is in progress or when it has stopped)
* Changed button styling to align with peer feedback (Larger text, colour changed after pressed)
* Re-verification feature from last week was merged to master

### Future Tasks
* Add a progress bar for when video is uploading to back end (to record video and upload video page)
* Allow user to upload multiple videos simultaneously on upload video page
* Use FFMPEG with lambdas in aws
  
### Context 
The issue we faced last week with certain tests not passing was fixed this week, however it appears we have a different bug in the backend preventing users from uploading their videos to the backend. This week I was able to apply advice we got from the peer feedback to the recording video page. Users expressed confusion on if their video successfully uploaded to the backend, now we have an alert to let them know if it did or did not. Additionally text was added that indicates to the user if a video recording is in progress or if they have stopped it. Lastly, the button styling was changed to be more easily understood. The previous design was not responsive enough to the user. With these changes the site more clearly displays to the user what is currently going on. 

For the next work period, hopefully the backend issue will be resolved and I can work on implementing a progress upload bar to let the user to know how long it will take to upload their video to the backend. Additionally, I will try to allow a user to upload multiple videos on the upload video page, each upload should have its own progress bar as well. 

## Week 19 - Project Log

**Work period February 5th - February 11th**

<img width="864" alt="Screen Shot 2024-02-11 at 12 16 57 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/30e58266-a0a7-4c27-9b1b-0529bfcb9e40">

### Tasks Completed This Work Period (found on "edit profile fix" and "updated home page" draft pull requests)
* Fixed profile edit bug, added email re-verification feature
* Added instructions to home page to show user how to use the website
* Attend team meetings/add team log

### Future Tasks
* Add prompts to record video page
* Expand on general UI for record video
* Try to use FFMPEG with lambdas in aws
  
### Context 
When I took a look at the edit profile feature, I noticed that the users email was not being changed because it was not asking the user to reverify their email. Additionally, the username is immutable. So I removed the option to edit the username and added a re-verification system for the new users email. Now the user can change their email, as long as they enter the correct confirmation code sent to their new email. Additionally, I added images and instructions to the home page to make it more user friendly for new vistors. I made these changes on two branches (which are draft pull requests right now), however when I went to deploy the branches on amplify I recieved a build error. This appears to be because there were changes made on the amplify backend (unelated to my changes) that need to be fixed. We could not fix it at this last team meeting but will try to at our next in person meeting. 


## Week 18 - Project Log

**Work period January 29th - February 4th**
<img width="752" alt="Screen Shot 2024-02-04 at 6 07 37 PM" src="https://github.com/COSC-499-W2023/year-long-project-team-20/assets/66889922/3ed5294b-75f5-4283-a163-8e94efc9a7a8">

### Tasks Completed This Work Period (found on trim-video branch)
* Tried many different approaches to get the ffmpeg video to playback properly

### Future Tasks
* Fill out home page with instructions on how to navigate/use website
* Fix profile edit bug
  
### Context 
This week I discovered the library I was using previously (ffmpegwasm) is not compatible with our project, this could explain why I could not get the video to playback. I then tried to use another library (fluent-ffmpeg) that interacts with ffmpeg and should be compatible with the project. However, I encountered problems with this library error as well. I got a  "webpack polyfilling" error, which seemed to require an edit to webpack.config.j to fix. Unfortunately this was not possible, possibly because we used "Create React App" when we started the project (prevents access to this file). Another approach I was to split the video storing array into chunks and discard the first ones, to trim the video down. This did not work either and it seems to be because metadata is stored in the start of the array, so if you discard it ruins the video. The last approach I tried was modifying the parts of the video that the video tag could access/play then downloading that, but that just would download the original content. An approach I considered but did not try was using an API such as cloudinary, the reason I did not try this was because the client mentioned that they wanted features to either be local or done with aws. 

After reviewing the client specifications and discussing with the team, we decided to place focus on other aspects of the website. Specifially, things we found needed to be fixed after peer testing. We got a lot of comments about the home page and the edit profile bug, so I will be working on that this upcoming week. If there is time to come back to work on the edit video feature, perheps an aws service could be used.

## Week 17 - Project Log

**Work period January 22nd - January 28th**

### Tasks Completed This Work Period (found on trim-video branch)
* Added implementation of trim video functionality, however there is still some debugging/fixing that needs to be done in order to allow for the trimmed video to play back or be downloaded by the user.

### Future Tasks
* Allow user to play or download the trimmed video
* Prevent users from cutting out their entire video
* Add tests for the progress bar/trim function
  
### Context 
I was able to get all my Ffmpeg functions running without errors, however getting the actual trimmed video to play/be downloaded is causing some issues which can hopefully be resolved soon.
Note, for some reason my log from last week was not on main. However I was able to retrieve it from my branch luckily, not sure why this happened. 


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
