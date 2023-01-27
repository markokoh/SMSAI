<!-- @format -->

# Title: SMS AI

# Description:

“SMS AI” Is an open source project that allows users to use Open AI, via text message - it’s a chatGPT chat bot, that also does images. Simply send a question or prompt, and the AI will reply with a text message or image.

It uses the Open AI API, Firebase Cloud Functions and SignalWire for SMS and MMS. For text replies a cloud function called “getAiCompletion” is triggered by an SignalWire XLM web hook, and “getAiImage”is triggered for images. They are attached to 2 separate phone numbers, though you could them on one, but within the prompt you would need a reference to determine if and text response or image is desired.

# How to use:

For text replies, send a prompt to +1 (844) 929 2924
For image responses send a prompt to +1 (855) 875 8622

Text replies are limited to 140 Open AI tokens.

**Video Demo:**

https://firebasestorage.googleapis.com/v0/b/textvote-7a52e.appspot.com/o/images%2FSMS%20AI%20Vid%202.mp4?alt=media&token=46966a2d-84fd-468b-a800-b4c3836a6d94

**Code Sandbox:**

https://codesandbox.io/p/github/markokoh/SMSAI/draft/autumn-sound?file=%2Ffunctions%2Findex.js

If you wish to fork this project and make your own version you will need SignalWire, Firebase, and Open AI accounts:

https://openai.com/api/
https://firebase.google.com/
https://signalwire.com/

The code is made available through a GNU LGPLv3 license.
