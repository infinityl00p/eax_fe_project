Name: James Gill
Date: Nov.5/2018
Project-Name: EAX_FE_Assignment

# Installation and Setup
1. The first step is to ensure `node` and `npm` are installed on your machine
2. `node_modules` have been removed in order to reduce total file size, run `npm install` in order to install dependencies
3. `npm run start` to start the app
4. You should be automatically redirected to `localhost:3000`


## Project Check List
[x] The background along with game icons are part of a background media carousel. Below is the requirement for timing of content rotation:
a. Images: images along with the game icon rotate should every 10 seconds
b. Videos: videos should play to the end before rotating (along with game icon)

[x] The carousel is expected to be able to handle any of these content:
a.	Multiple videos (with variable lengths)
b.	Single video
c.	Multiple images
d.	Single image
e.	Combination of videos and images

[x]	Videos are all hosted on YouTube.

[x]	Use images/videos provided in the html attached.

[x]	The top navigation should be dynamically populated; navigation anchor data should come from anchors <about-navigation-anchor> embedded in each <about-section>.Keep in mind that the order in which each <about-navigation-anchor> gets initialized is not guaranteed. The ordering of each anchor in top navigation should be preserved. NOTE: The top navigation can be seen near the center of the top section in the wireframe, which reads:
a.	“Great PC Games                            Download Now”

[x]	The page must be fully functional in latest versions of Edge, Firefox and Chrome

[x]  Bonus 1: Pause carousel videos when out of the viewport, the video should resume when video is back in viewport

[x]	Bonus 2: Make the page responsive
