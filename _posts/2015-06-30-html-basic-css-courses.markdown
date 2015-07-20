---
layout: post
title:  "HTML (& basic CSS) Courses"
date:   2015-06-30 22:00:00
categories:
  - html
  - css
---
Learning HTML is pretty easy - I was able to cover all the basic tags and their uses in a few hours because the bulk of any website you'll build is in CSS or JavaScript.  HTML is for content, CSS is for style, and JavaScript is for interaction.

With that in mind, I organized this post to summarize what I've covered thus far in HTML and basic CSS course materials.  There are advanced CSS topics as well, but those come from lots of Googling and blog browsing (those'll be in their own post).  I'm focusing heavily on HTML and CSS because I'm more interested in front-end development.

## Starting with The Odin Project

TOP starts with a survey of courses - covering installations, HTML, CSS, JavaScript, Ruby, Rails, then some development frameworks then has you do an in-depth chapter later on. Personally, I dislike the jumping around as well as the position of Git, SSL, FTP, etc. lessons at the end of a bunch of projects.  I'd reorganize the curriculum as below. It would make a lot more sense and save me a bit of time.

* **Chapter 2: Web Development 101** (select sections)
  * **The Basics** installing at least Ruby is important for Sass later on
  * **The Front End** through HTML/CSS project
  * **Additional Important Topics** covered in last post
* **Udacity: Intro to HTML &amp; CSS**
* **Chapter 5: HTML5 and CSS3**

## TOP - [Chapter 2: Web Development 101][top-ch2] (select sections)

**The Basics**
<br>
Pretty self explanatory.  I skipped the installations project (for Ruby, Rails, etc.) because I wanted to focus on front-end.  I did have to install Ruby eventually because Sass (CSS preprocessors) is basically Ruby, but I would still skip the project and RailsBridge installation for a few reasons that I'll explain in the advanced CSS post.

**The Front End - [HTML &amp; CSS][ca-html] (Codecademy)**
<br>
This is the first real coding assignment from TOP.  Great for understanding how HTML and CSS work together at the basic level and a definition of what tags, attributes, selectors, and properties are.  It's kind of like learning english - we learn vocab words (body, h1, div, p) and what they mean and how they can be used at the basic level, but we also need to learn what groupings these words fit into (is it a noun, verb, adjective?)

TOP actually gets a little repetitive here.  The reading points you to [HTMLdog][htmldog] but Chapter 5 also has you read an online HTML and CSS book by [Shay Howe][shayhowe].  I'd skip HTMLdog and go right to Shay Howe - though both are great references for looking up that tag you forgot how to use.

## UD - [Intro to HTML &amp; CSS][ud-html]

This course is definitely better after getting a good overview on CLI (command line) and the basics via the CA course.  I liked it because it introduces the more functional concepts behind writing html and css - particularly coding modularly.  There's also a bit on CSS frameworks (specifically, Bootstrap) and how they're essentially modular CSS in conveniently documented libraries.

## Back to TOP - [Chapter 5: HTML5 &amp; CSS3][top-ch5]

Most of this is a breeze because I read/skimmed all of Shay Howe's book before continuing past the first step.  The "What's New" section, especially [Dive Into Html5][dive-html] can get a little advanced with all the cross compatibility (making websites work across different browsers and browser versions) issues and uses quite a bit of JavaScript (which makes sense if you follow the original TOP course).

I focused on reading through the first 4 sections simply to understand the basics of cross compatibility and skimmed through the rest.

[top-ch2]:        http://www.theodinproject.com/web-development-101#section-additional-important-topics
[top-ch5]:        http://www.theodinproject.com/html5-and-css3
[ca-html]:        http://www.codecademy.com/tracks/web
[htmldog]:        http://htmldog.com/
[shayhowe]:       http://learn.shayhowe.com/
[ud-html]:        https://www.udacity.com/course/intro-to-html-and-css--ud304
[dive-html]:      http://diveintohtml5.info/
