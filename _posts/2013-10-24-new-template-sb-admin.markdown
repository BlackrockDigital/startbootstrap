---
layout:			post
title:			"New Template - SB Admin"
date:			2013-10-24
category:		News
description:	"It’s here! SB Admin has officially launched..."
tags:			update

meta-title:		"New Template - SB Admin"
meta-description:	"It’s here! SB Admin has officially launched..."

author:			"David Miller"
author-slug:	david-miller
author-desc:	"David Miller is the creator of Start Bootstrap. He is a front end web designer and developer working out of sunny Orlando, Florida."
author-url:		http://davidmiller.io
author-twitter:	davidmillerskt
author-github:	davidtmiller

redirect_from:
  - /articles/2013/10/24/new-template-sb-admin/
---

It’s here! ‘SB Admin’ has officially launched as of yesterday, and the initial response has been wonderful. To all of you who requested an admin theme, thank you for your feedback, and we hope that 'SB Admin’ doesn’t disappoint! If you’ve already checked out the new theme, thank you so much. If not, head over to <http://startbootstrap.com/sb-admin> to see it for yourself.

Now if you’re interested, I’ll break down a few things about the new admin theme.

## Charts
There are two types of charts that we’re using for this theme. The first is Flot, and the second is morris.js. Flot has a lot of capability, and if you plan on using the template we recommend that you visit the full documentation, because there is a lot to go over. Our other option, morris.js, is a bit more simplistic in terms of documentation.

We’re using a plugin for Flot that redraws each chart on window resize. This allows for a fully responsive chart. Unfortunately, morris.js requires a browser refresh to redraw the chart if you resize the browser window. It shouldn’t be a big deal, but it might be when switching from landscape to portrait and vice versa on a tablet or phone. The guys over at morris.js have addressed the issue, and it should be in their next update.

Long story short, if you want a fully responsive chart with a lot of capability but some lengthy documentation, go with Flot. If you want a mostly responsive chart with fewer options and quick and easy documentation, go with morris.js.

## Tables
The style of the tables are pure Bootstrap, so there’s nothing new there. The nifty sort function at the top however is something we wanted to cover. We’re making use of Tablesorter 2.0 for this handy feature, and we hope you like it. Their documentation is pretty easy to understand, so you shouldn’t run into too many problems with it. Our arrows don’t change directions on resorting, so that might be something you can add on your own. If you figure out a quick way to do it you could always add it via a pull request on GitHub.

## CDN’s
We made use of CDN’s wherever possible with this template. Usually we like to include everything in the package, but we did this to cut down on the download size. The .zip file is only 387 KB so I’m pretty happy with that. If you want the standalone plugins then you can always go track them down and add them to your own directory. You should have no problem finding the links within the template pages.

The various jQuery plugins that we’ve used are only included on the individual pages that the plugin is being used on. So if you want to add a chart on a blank page for instance, make sure you’re linking to the proper files.

## Bootswatch Integration
This template works really well with two Bootswatch themes in particular. We were messing around with it, and found that replacing the bootstrap.css file with the Cosmo theme by Bootswatch makes for a decent metro style admin theme. If you’re into something a bit darker, try out the Slate theme by Bootswatch. These two themes in particular worked really well with 'SB Admin’ and we recommend using those if you don’t want to create your own custom skin.

That about wraps things up! As always, thank you so much for your support, and keep the suggestions coming! Email us at feedback@startbootstrap.com if you have any ideas for templates you would like to see in the future.

As of now, we are looking at creating some more one pager sites with some parallax effects as well as some other generic full site templates. There are also a few pages in our full templates that we will be taking out and creating some standalone pages from. We might get into some code snippets too…we’ll just have to see!
