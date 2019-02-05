---
title: "How to Create and Launch a Website from Start to Finish"
description: "A beginners guide to publishing websites using themes from Start Bootstrap and GitHub Pages"

date: 2019-02-05

src: /guides/how-to-create-a-website-with-github-pages

categories:
  - beginner

layout: guide
type: guide

meta-title: "Create and Launch a Website from Start to Finish"
meta-description: "A beginners guide to publishing a website using themes from Start Bootstrap and hosting by GitHub Pages"
---

### Before we begin
**Technical Requirements:** In this guide you will be editing the content of a website theme! You will need to have some working knowledge of HTML to do so.

**Optional Requirements:** If you want to edit your theme's style (colors, fonts, etc.), you will need to have some working knowledge of CSS - this isn't required if you are happy with the default design of the theme you choose.

### Introduction

GitHub Pages is a great way to get a simple, static website published online - especially when you use a predesigned theme from Start Bootstrap! There are plenty of benefits to having your code on GitHub, but for the purposes of this guide, the major bonus is that you can host a static website for free! So let’s get started!

### Step 1: Create a GitHub account

First things first, since you are setting up a website using GitHub Pages, you will need a GitHub account if you don’t already have one. To do this, just go to <a class="font-weight-bold" target="_blank" rel="nofollow" href="https://github.com">https://github.com</a> and register for an account - it’s free!

### Step 2: Download GitHub Desktop

Many folks use their terminal to push and pull files to and from GitHub, but since this is a beginner level guide we’re going to be using GitHub’s super handy desktop client instead of the terminal. GitHub Desktop is also free to download, and it’s available at <a class="font-weight-bold" target="_blank" rel="nofollow" href="https://desktop.github.com/">https://desktop.github.com/</a>. After downloading and installing, open up GitHub Desktop and login using your GitHub account credentials.

### Step 3: Choose a theme

Now that we have a GitHub account and the desktop client installed, it’s time to choose a theme! You can browse the predesigned Bootstrap themes at <a class="font-weight-bold" target="_blank" href="https://startbootstrap.com/themes">https://startbootstrap.com/themes</a> to get started. Once you’ve chosen a theme meets your needs, we will then need to make a copy of the theme by ‘forking’ the repository.

### Step 4: Fork your theme

From the theme overview page of the theme you’ve chosen, click on the ‘View on GitHub’ button that is just below the download and live preview buttons on the right hand sidebar - you can see an example below on the resume theme overview page.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/view-on-github.jpg">

Once you’re on GitHub, you will need to click on the ‘Fork’ button at the very top of the screen, which will create a copy of the repository under your account - shown below.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/fork.jpg">

At this point, you can change the name of the repository - for example - if you forked ‘startbootstrap-resume’ you could change this to ‘my-resume’ if you choose. You can do this under your repository settings.

After your repository is forked, you will then need to clone it to your local machine.

### Step 5: Clone your theme

Cloning a theme is easy on GitHub. Once you have forked your chosen theme, go to the repository and click on the green ‘Clone or Download’ button and choose ‘Open in Desktop’ - shown below.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/clone.jpg">

This will open your GitHub Desktop application and prompt you to clone the repository files to a folder on your PC. Once the files are on your local machine, you will be able to edit them.

### Step 6: Modify your theme

Once you have the theme running locally, it’s time to edit. At this point, just open the theme’s HTML file(s) in your favorite code editor and modify the content. For beginners, all you need to do is edit the content within the HTML files. If you want to do anything like change the colors of the theme though, you will need to have some knowledge of CSS. Once you’re finished editing, it’s time to publish!

### Step 7: Commit and push the modified files

Now open the GitHub Desktop application. Since you edited some files locally, the program will detect the files that have changed. It’s time to push these changes to GitHub. Simply enter a commit message in the box provided (in the lower left hand part of the application), and a description if you want to, and then click on ‘Commit to master’ - shown below.

<img class="img-fluid rounded shadow d-block mx-auto" style="max-width: 300px;" src="/assets/img/guides/create-website/commit-message.jpg">

This doesn’t push the changes to GitHub yet! To do that you will need to click on ‘Push origin’ at the top of the screen - shown below.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/push-origin.jpg">

Now, if you go to your repository on GitHub, you will see that the changes have been made! Go to your repository on GitHub’s website and verify that the changes were made to the repository. On your fork of the repository, you should see the commit message with a timestamp on the files that have changed.

### Step 8: Merge the modified files into the gh-pages branch

Your changes have been committed and pushed to the master branch of your repository, but when using GitHub pages, the files in the gh-pages branch are the ones that are hosted. That means we need to merge the modified files from the master branch into gh-pages branch!

Merging your master branch into gh-pages takes a few steps. First you will need to go to your repo and click on the ‘New pull request’ button - make sure your master branch is selected!

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/pull-request.jpg">

After this, since we forked the theme from somewhere else, you will want to make sure the base repository is your own repository, not the one from Start Bootstrap. To do this, change the base repository in the dropdown provided to username/repository-name.

Once you’ve set the base repository to your own account, you will have the option to set the base branch for this pull request. Using the dropdown, make sure the base repository is set to gh-pages. This will compare the master branch to the gh-pages branch.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/compare-changes.jpg">

At this point, you should see the commit message and a summary of the files that will be merged. Click on ‘Create pull request’ - seen below.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/open-pull-request.jpg">

Finally, you will need to click on 'Merge pull request' and then 'Confirm merge' to finalize the merge.

<img class="img-fluid rounded shadow" src="/assets/img/guides/create-website/merge.jpg">

If everything has gone as planned, the gh-pages branch will now be identical to the master branch, and GitHub Pages will be serving your files to a website located at username.github.io/repository-name. Keep in mind that it will probably take a few minutes for the changes to go live as the server catches up. Give it some time, and check to make sure your website is live after a few minutes!

### Additional details

If you want to update your website, just use this same guide and repeat steps 6-8. You'll be making changes locally, pushing the changes to the master branch on your GitHub repository, and then merging the master branch into the gh-pages branch again!

If you want to use a custom domain for your website, you can also set that up with GitHub pages. You will need to purchase a domain from a domain name provider, and then point the domain to GitHub’s name servers. GitHub has some handy documentation on how to do this on their custom domain setup page!

That’s it! You now have a website online with free hosting thanks to GitHub pages! Thanks for checking out this Start Bootstrap beginner tutorial! Make sure to subscribe to our mailing list and <a class="font-weight-bold" target="_blank" href="https://twitter.com/sbootstrap">follow Start Bootstrap on Twitter</a> for new guides, updated themes, and more Bootstrap related content!
