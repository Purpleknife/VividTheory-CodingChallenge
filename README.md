# Vivid Theory - Coding Challenge 💻

This challenge's goal is to implement a responsive blog web application that has two main views. The first view is the blog search page, and the second is a view of a single blog.

## Requirements
- [X] Build a React Application to display the blog search page and single blog page
- [X] Build a Back End to serve the required blog data to the client
- [X] Connect to the provided database from your created server

## Features
- [X] Blog Search Page:
  - [X] The Blog Search Page is a page that allows users to paginate through all blogs, clicking on a blog on this page will route to a Single Blog Page for the selected blog.
  - [X] The Blog Search Page should implement pagination with a limit of 6 blogs shown at a time. This pagination should be done on the server. That is, the server will only ever return 6 blogs at a time.
  - [X] Blogs should be ordered by published_at date, such that the newest published blogs are the first blogs to show up.
  - [X] This page exists on the route "/"


- [X] Single Blog Page:
  - [X] The Single Blog Page is a page that displays the content of a specific blog.
  - [X] The content of the blog is a html string and should be injected into your pages
    JSX.
  - [X] These pages exist on the route "/<slug>", where slug is the current blogs slug.

## Setup
1. `git clone` this project.
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the `.env` file with your correct local information : username, password, database, port, sslmode.
4. Install dependencies: `npm i` in both `front-end` and `back-end` folders.
5. `cd back-end` then `npm start` to run the Server on port 8080.
6. `cd front-end` then:
  - Run `npm start` to run the app in `development mode`.
  - Run `npm run build`, `npm install -g serve` then `serve -s build` to run the app in `production mode`.

## Built with
- Database
  - PostgreSQL

- Back-end:
  - Express JS
  - TypeScript
  - Node JS
  - dotenv
  - pg

- Front-end
  - React JS
  - TypeScript
  - React-Router
  - SASS
  - axios
  - moment