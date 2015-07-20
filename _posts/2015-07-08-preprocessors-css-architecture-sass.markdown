---
layout: post
title:  "Preprocessors & CSS Architecture: Sass"
date:   2015-07-08 08:33:00
categories:
  - css
---
Since those early articles on coding best practices that TOP introduced, I've had a lot of unanswered questions about how exactly you're supposed to implement clean, readable, and modular CSS.  It's not really something you pick up when you're first learning to write your markup, though it's often referenced for developers working professionally and with other developers.

CSS preprocessors are especially powerful for managing CSS since they can combine multiple 'partial' files into one single CSS file.  You get to organize your files and folders in a way that's easily understood (even if you haven't touched the project in a while) and still use a single stylesheet for better performance/fewer http requests.  Not to mention how `@extend` and nesting save so much time.  In my mind they go hand in hand.

## Sass? Less? Stylus?
Of the major preprocessors out there I chose **Sass** to learn first for a few reasons:

1. I like `.sass` syntax (no semi-colons or curly braces!).
2. Sass seems more widely used - this was just a basic, look at jobs in my area. Also, Bootstrap has even ported to Sass from Less.
3. Ultimately I chose Sass because I ended up going to a local Sass meetup and there don't seem to be any other active ones.

## Applications vs Command Line
I decided to use Sass with CLI because I felt starting with Sass in it's 'pure' form would give me a better foundation.  Many of the highly recommended GUI versions all seem to be paid or come with their own frameworks which would've complicated things (I wanted the fundamentals, first!).

I did the RailsBridge install fest through TOP links a couple of weeks ago but ended up having to reformat my computer. Going back a second time I've decided to install everything individually (minus Heroku for now because I'm not ready to do apps yet). I didn't like that everything was together in a separate RailsInstaller folder and I kept getting deprecated warnings after updating everything.

Also, installing RailsBridge and updating everything one by one actually ended up being more convoluted than installing the latest version of each the first time. Finally, RailsBridge for Windows also installs a Windows CLI to use with it, which is pretty awful and doesn't let you use a lot of UNIX commands. I was using Git Bash anyway, so I felt it was cleaner and simpler to do each install individually.

## Getting Started

There are quite a few introductions to using Sass, including [their own documentation][sass-doc], and pretty much all are the same. Sass isn't difficult so, again, I'm looking for are resources for how to approach using Sass in a systematic way.

## DevTips - [CSS Architecture with SMACSS][devtips-arch] (w/ Caleb Meredith)

In comes SMACSS and BEM. Every project is different and of course there are pre-made grid systems and frameworks so I don't expect to always use SMACSS or BEM, but they're good ways of looking at abstracting CSS and structuring it to be scalable and reusable.

## Matt Stauffer - [ORGANIZING CSS WITH OOCSS, SMACSS, AND BEM][bem]

This presentation covers CSS architecture approaches an takes it even further in removing style (CSS, utility classes) from content (HTML). The bit on utility classes starts around 25:00.

[sass-doc]:       http://sass-lang.com/documentation/file.SASS_REFERENCE.html
[devtips-arch]:   https://youtu.be/6co781JgoqQ
[bem]:            http://HTTPS://YOUTU.BE/IKFQ2CSBQ4Q