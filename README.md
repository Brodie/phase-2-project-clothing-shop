# Cool Clothing Shop

My phase-2-project

## Description

Simple e-commerce site for displaying and purchasing items. Built in form for submitting new items which are then added to the corresponding category and displayed as items to be purchased

## Location / Installation

This project has been deployed! You can find the frontend and back end here:

Front-end: https://phase-2-project-shop.netlify.app/

Back-end: https://phase-2-project-backend.onrender.com/

Or if you want to install locally:

Github Front-end: https://github.com/Brodie/phase-2-project-clothing-shop

Github Back-end: https://github.com/Brodie/phase-2-project-backend

After forking, and cloning the SSH, navigate to the folder you wish to clone into and run:

```bash
git clone SSH_File
```

Pasting the copied URL in place of SSH_File.

If cloning both front and back ends, both can be within the same parent folder, but don't clone one into the other!

<br>

## Usage

After cloning the front-end repo, navigate into the folder and run:

```bash
npm install
```

to install the necessary dependancies, then run:

```bash
npm start
```

to launch the Project on your localhost

## Information

Im currently using the free version of render.com backend service, so the initial fetches may take 30-90 seconds while the backend registers a request and loads up. I usually like to open the render.com URL and refresh the page there.

I've also ran into issues where the website URLs my images link to has ran into issues preventing images from loading properly. Ideally in a real world scenario this would be avoided by having all the images being mine/the customers' thus image URLs would not be needed. This would also allow for consistent image size making styling the website a little easier.

If you plan on making fetches to the cloned backend, you will have to update all the fetch request URLs as they all currently fetch to the deployed backend. I may update the address to be tied to a variable so that only one line needs to be changed throughout.

## Roadmap

-Would want to add a mens and womens section with all the same current categories.

-Add a login button with password verification so only admins can add new items

-Add file upload for images

-Add way to update stock of current items

-Add actual clothing and method to accept payments

## Special thanks to:

-https://www.cdnfonts.com/ : for the custom fonts used

-https://unsplash.com/ : for the free images used for mock items

-https://www.netlify.com/ and https://render.com/ : for hosting my front/back end

-As always, huge thanks to Flatiron instructors for their continued support and guidance. Without their help I never would have found the courage to try something as daunting as building a career in a new field
