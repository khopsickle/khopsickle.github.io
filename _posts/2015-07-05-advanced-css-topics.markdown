---
layout: post
title:  "Advanced CSS Topics"
date:   2015-07-05 18:56:00
categories:
  - css
---
There were a lot of intermediate/advanced CSS topics that weren't extensively covered in TOP, particularly things like positioning/layout (w/ flexbox) and responsive design. The articles in the course do include some decent explanations and a few tutorials, but some are 4 years old and out of date. I also found a lack of coverage for responsive images. I definitely preferred the more detailed example exercises I found elsewhere.

I didn't quite do these in the order listed, but if I could redo it I'd do it this way - it seems to make the most sense.

## DevTips - [CSS Positioning Playlist][devtips-position]

DevTips is a YouTube channel/series that covers lots of (front-end) web development topics. Really, I like the whole channel because the creator (Travis) does a good job of teaching and explaining things in a 'human' way. It isn't as dry or high-level as a lot of other resources I've been using and also includes a lot of real-world use cases - Travis is a professional developer and shares a lot of his own industry experiences.

Most of this CSS Positioning playlist is covered elsewhere in intro topics and in TOP resources so I focused on the last two videos in the list - **FlexBox Essentials** and **Practical Examples**.  The first one explains, one by one, all the properties you can use for flexbox and the second puts these in use to make things.

Some of these videos (especially earlier ones) can get a little weird as he's experimenting with different ideas for videos, but overall I find the videos engaging and fun to watch.

## UD - [Responsive Web Design Fundamentals][ud-rwd]
I think this may be my favorite course/lesson of any I've come across in the past month and a half. It answers all the best practices questions I've been having since week 2 of starting. The course teaches strategies towards building responsive websites and takes a mobile-first approach.

The instructors cover things like viewports and the difference between device pixels (resolution of your phone's screen) and the actual physical pixels it's displaying to you (DPI or DIP). They also walk you through what you need to keep in mind when designing for small screens, media queries, and how to choose breakpoints for your design. Flexbox is also covered, but only the basics, the more important bit is methods of using flexbox to create responsive patterns.

There is a tiny, tiny bit of JavaScript here - they use the console to figure out widths and heights for various purposes, but it's explained in the context of using developer tools rather than actual JavaScript.

## UD - [Responsive Images][ud-ri]
This lesson is sort of a companion to Responsive Web Design but they can be done independently.  It covers a few more developer tools and some great HTML and CSS used for responsive design (like picture elements and calc).

The better parts are when they go over raster vs. vector and image compression to save space on file size while still serving HQ images.  Markup alternatives, using CSS or typography instead of images whenever possible, are also covered and definitely useful.

[devtips-position]:     https://youtu.be/kejG8G0dr5U?list=PLqGj3iMvMa4L731ispRfGAabXeRpM4RL6
[ud-rwd]:               https://www.udacity.com/course/responsive-web-design-fundamentals--ud893
[ud-ri]:                https://www.udacity.com/course/responsive-images--ud882