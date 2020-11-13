# Web App Dashboard

In this project, you'll take a mockup and a few icons and build a beautiful, web dashboard complete with JavaScript-driven charts and graphs. You only need to take the design and create the HTML, CSS and JavaScript functionality for this one page -- you don't need to create other pages, or build any backend or database functionality.

## Requirements

1. Create a responsive web page from the supplied dashboard.png mockup with the following:

   - Header with app name, notification icon badge and profile avatar and name.
   - SVG icon based navigation with the following links: Dashboard, Members, Visits, and Settings. NOTE: You only have to build out the main dashboard page, not any of the other pages.
   - Main content area where the specific dashboard widgets will go.
   - Ensure that the design responds well to mobile (320px), tablet (768px) and desktop (1024px) screen sizes.

2. Demo alert notification.

   - In the dashboard.png, this appears as the purple bar near the top of the page with the word "Alert" in it. When the page loads this alert should be visible, but the user should be able to close the alert by clicking the X button.
   - Include a notification icon in the navigation header. Use the icon-bell.svg file. In the mockup this is the bell in the top right corner of the page.

3. Chart widgets

   - Using chart.js, create and include the information for the following chart widgets, as shown in the mockup for the:
     - Web Traffic (line chart)
     - Daily Traffic Bar Chart (bar chart)
     - Mobile User Pie Chart (donut chart)
   - Style the charts to match the overall style of the dashboard.
   - You will need to make up this data -- you can see the mockup for sample data.

4. Social Stats Widget

   - Create a widget (or three separate widgets) to display social network stats for Facebook, Twitter and Google+.
   - Use the provided SVG icons for each of the social networks.
   - SVG fill colors have been changed to match the mockups.
   - Style the social information to match the corresponding social network.
   - Style to match the overall look and feel of the dashboard.

5. New Members and Recent Activity Widgets

   - Create widgets that list users for both widgets.
   - Include avatars for each member (member avatars are inside images folder).
   - Add the information for each user as shown in the mockup, such as Member name, email address, Sign up Date etc.

6. Message User Widget

   - Create a field for searching for a user.
     - You don't have to add real search functionality, but if you attempt to get the exceeds grade, you'll need to make up some user data.
   - Add a message textarea field that lets you add a message.
   - Create a “Send” button and use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.
   - Use JS to display error messages if user isn’t selected or message field is empty.
   - Style to match the overall look and feel of the dashboard.

7. Settings Widget
   - Create a settings widget to display various setting options using different form elements.
   - Create an on/off widget for whether to send email notifications.
   - Create an on/off widget for whether to set profile to public or private.
   - Create a dropdown to select timezone.
   - Add Save and Cancel buttons (these do not have to do anything functional).
   - Style to match the overall look and feel of the dashboard.

## Extra credit

1. Display at least two notifications when the user clicks the alerts icon

   - This could be a pop-up window or dropdown menu.

2. Traffic chart widget

   - Create a navigation similar to the one in the mockup to display different data when the Hourly, Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly and Monthly buttons so that a different line chart is displayed on click.

3. Add an "autocomplete" feature for the "Search for User" box, listing names that match the search term.

4. Use local storage to save the settings.
   - When page is reloaded the settings are remembered.

## Accessing the site

As previous lessons introduced 'Gulp' as a build tool, I have used this to produce the files and run a server so we can use the svgs.
Distribution files are not tracked with Git. To produce them, install Gulp, install the node files with npm install, and initiate in the command line with `gulp`.

## Notes from the build

- Browser testing: Safari 14.01, Chrome 86 and Firefox 83
- Breakpoints added as described in the brief
  - Grid and flexbox used to adapt to the breakpoints
  - Graceful degradation hasn't been implemented for grid/flex as this has been created in 2020
  - Site has issues with rendering on resizing - see special note in issues
- All 4 points of the extra credit criteria have been implemented
- In the file structure and gulp configuration, original svg files are overwritten by the svgo task before being used to create a sprite.
  - Potentially this should be adapted for redundancy
  - The Facebook svg needed to be handled manually before using svgo to avoid removing the svg tag!

## Issues

The site has issues when increasing the width of the page, in that at the breakpoints, the page resizes to fit but the images can be too small. On refreshing the page, everything fits as expected. On reducing the width of the browser, the elements do not shrink but stay at the size they stretched too. My thoughts are that this is potentially due to the text resizing I introduced for larger devices.
