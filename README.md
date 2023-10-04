# Green World

The work done in this section was to create an application compliant with the WCAG AA level, in order to achieve it the tool used for the validation is a Chrome Extension called Axe. With this extension one can identify the errors the developer makes in the development of the app that go against the best practices of the WCAG.

The project here was done in NextJS, this to also show a little of how an SSR page works.
The design of the app was done in Figma, the designs made can be viewed in this project in the folder designs on the root level

## Objective

The main objective of this app is to show the user a catalog of plants so that he can learn more about the different categories there are and in the end choose the best option so that the user can plant it and start learning the whole experience of caring and gardening a plant. 


The project is still WIP, however you can view the latest changes in this url https://wcag-seo-poc.vercel.app/ , so far the WCAG AA level has been accomplished with the Axe tool validation, however there is still a second part that will focus on the SEO aspect, there will also be a backend connection to display even more data than what I currently have, this will be done using Firebase to accelerate the development.


Anyone can feel free to clone the repo and run it locally so that you can see the code and have an idea of how to achieve the WCAG standards. Any recommendation or suggestion is very much welcomed

## Stack and Libraries

For the stack used in this project currently is with NextJS, Material UI and libraries for the image carousel and screen size detection, the page is 100% responsive so there should be no issues in running the app regardless of the device used. The project also has eslint configured so that there is a set of rules to follow in the code development, like limit of characters per line, quotes use, spacing, etc.

The deployment of the app was done with Vercel which is the most friendly way to make deployments with NextJS projects and it already has CI/CD included, that means every time we push a change in the GitHub repo the project will be redeployed with the latest commit.



To learn more of the WCAG level AA you can visit this page to check the conditions needed to meet this level https://www.wuhcag.com/wcag-checklist/

## Getting Started

Use Node version 18, the project was created using Node 18.16.1

Then, install the dependencies:

```bash
npm install
# or
yarn
```
and run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
