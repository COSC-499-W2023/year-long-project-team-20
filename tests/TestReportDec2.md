1. Test: Uploading Video

Objective: To verify the functionality of uploading videos to the S3 bucket "videosharebucket230842-staging" and ensure proper storage organization based on user.

Procedure: Uploaded a test video to the designated S3 bucket.
Expected Result: The video is successfully uploaded and stored in a user-specific folder within the bucket.
Actual Result: The test video was successfully uploaded and stored in the correct folder corresponding to the user.
Status: Pass
2. Test: Record Video

Objective: To validate the video recording feature including permission requests, storage format, and consistency of audio and video.

Procedure: Initiated video recording through the application.
Sub-Tests:
Permission Request:
Expected Result: Application requests access to the microphone and webcam upon button click.
Actual Result: Access to mic and webcam was successfully requested and granted.
Status: Pass
Storage Format:
Expected Result: Recorded video is stored in MP4 format on the local computer.
Actual Result: Video was successfully recorded and stored in MP4 format.
Status: Pass
Audio and Video Consistency:
Expected Result: Recorded video maintains consistent sound and video quality.
Actual Result: Both sound and video were consistent and of good quality.
Status: Pass
3. Test: Play Video on the Website

Objective: To test the functionality of video playback on the website, including both video and audio components.

Procedure: Played a previously uploaded video through the website interface.
Sub-Tests:
Video Playback:
Expected Result: The video plays smoothly without interruptions.
Actual Result: Video playback was successful and uninterrupted.
Status: Pass
Audio Functionality:
Expected Result: The audio plays synchronously with the video.
Actual Result: Video played without audio. Issue identified and fix is in progress.
Status: Fail
Conclusion: The testing session on Saturday 2 December revealed that the video upload and recording functionalities are working as expected, with successful video uploading to the designated S3 bucket and efficient recording with consistent audio and video quality. However, the video playback on the website encountered an issue with the audio component, which is currently being addressed by the development team. All other aspects of the tested functionalities met the expected outcomes.

Recommendations: Immediate attention is required to resolve the audio issue in video playback. Further testing should be scheduled post-fix to ensure complete functionality.

Next Steps: Await resolution of the audio issue and plan a re-test of the video playback feature.

Tester Name: Abijith Ashok
Date: Saturday, 2 December