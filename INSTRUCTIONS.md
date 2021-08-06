# Instructions

## User Story

As a user I want to be able to either swipe on mobile or click on either arrows on desktop to go to the next slide with a sliding transition so that I know slides have change.

## Introduction

The clients is quite pleased with the outcome of the implementation of the design so far. But he mentions that he does not like how the Caroussel-Component looks behaves on this page:
https://author-p24706-e78340.adobeaemcloud.com/content/fe-assessment/en/home.html?wcmmode=disabled

He has these issues:

1. The carousel needs to scroll from one image to the next as it does for this carousel:
   https://getbootstrap.com/docs/4.0/components/carousel/#with-indicators
2. The carousel currently is not swipeable on mobile devices.
3. The carousel has no styling

## Acceptance Criterias

Please adjust the carousel component so it fullfills the following acceptance criterias:

- Carousel can slide individual items
  - Slide can be done from 1st to 2nd slide
  - Slide can be done from 2nd to 1st slide
  - Slide can be done from 1st to 3rd slide
  - Slide can be done from 3rd to 1st slide
- Indicators for next/prev can still be used
- Indicators of current active slide is still functional
- On mobile devices the slider can also be interacted with via swiping
  - swipe from left to right will go to previous slide
  - swipe from right to left will go to next slide
  - swiping from right to left can be done infinitly (when the last slide is reached it will start with the first again and vice versa)
- Add the styles according to the wireframe.xd for the carousel component

## Additional Acceptance Criterias

- a new branch has to be created
- changes must be commited to the branch new branch
- no additional framework must be used
- Find the carousel wireframe here as well: https://xd.adobe.com/view/c459894e-c1cd-46b5-bc22-aa67cbc9cf14-910a/
