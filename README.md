# Setup Guide

## Requirements
In order to run this project you should have:
- Node 8.0.0 or Greater, NPM 6.0.0 or Greater and Angular CLI 7.0.0 or greater.

## Running Setup
- Go to the ./voice123-app and run `npm install`
- After that you can proceed to execute `ng serve --open`, the project will automatically open in the port 4200 on your localhost



# Working Log
- 2019/06/07 - 7:30PM  Began reading the test and understanding the problem to solve
- 2019/06/07 - 7:30PM - 8:00PM API Testing using postman to get familiar with the structure of the response (body, headers, etc)
- 2019/06/07 - 8:00PM - 8:30PM Github repository and basic project structure generated.
- 2019/06/07 - 8:30PM - 10:00PM Unfortunate issue at work happened.
- 2019/06/07 - 10:00PM - 11:00PM Resuming to the test, worker on the prototype UI, basically made all the HTML and CSS. 
- 2019/06/07 - 11:00PM - 11:30PM Tried to find out the URL for the voice samples, it was not quite clear where to find them and only the suffis of the files were exposed by the API, however I managed to find them out by scrapping into voice123's website.
- 2019/06/07 - 11:30PM - 12:00PM Implemented the Actor's profile card.
- 2019/06/08 - 12:00AM - 1:00AM Worked on Typeahead Funcionality and search by button
- 2019/06/08 - 1:00AM - 1:45AM Struggled with a bug that prevented me from concat two different observables which I needed for the initial state of the application.
- 2019/06/08 - 1:45AM - 2:30AM Implemented the pagination funcionality
- 2019/06/08 - 2:45AM - 3:30AM Struggled with some bugs related to pagination, apparently for some reason the current page header in the provided API is returning 1 always.
- 2019/06/08 - 3:30AM  Sent solution and documented
- 2019/06/08 - 8:56AM Readme modification 

# Future work

- Implement an ExhaustMap strategy in the search button in order to prevent the user to overwhelm the server with unnecessary requests for the same desired information.
- Implement a InMemory Cache strategy in order to avoid making previously made request to the server, that way we could improve the user experience as well.
- Review the API in order to see why does it return the same current page.
- Look for some better and prettier paginator control system (Angular Material paginator shows a weird behaviour and it is kind of ugly to being honest)
- We could do a lot of performance optimization by following the RAIL and PRPL patterns by implementing stuff like SSR or Service Workers.

NOTE: 
I modified the README since I consider I was not quite clear with something. There is an small bug related with the paginator when the size of the collection attached to it changes and you are on a page different than number one.

I'm aware of this and already know the solution. 

However I decided to not implement it because once you do it since the API returns always 1 as the index for the current page it would prevent the user to go any further in the pagination flow, basically it was a trade-off (solution is just one line of code tho).






