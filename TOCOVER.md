# Topics to Cover

This is a list of topics that we'll be covering in today's lecture. Feel free to write notes as needed.

---

# HTTP Review and CRUD


---

# What is Node.js?

Node is javascript that you can run on your computer -- which is huge, because now you don't need to learn other languages for your server-side code. They took JavaScript Engine V8 (parses JS files and converts it into computer-readable code). Written in C++.

We can use it to write our backend server, which communicates with the database and interfaces with the front-end.

## What is NPM?

AMAZING package manager.
### NPM init -y
Go ahead an init without having to answer stuff. In Package.json, make sure your main is your main file.
### NPM install
Use --save if you have below version 5. DO push you package.json; do NOT push your node modules!
### Node Modules
Make sure your node modules are there
### .gitignore
dd /node_modules to your gitIgnore (if not at same leve, have a filepath)
### package.json
So important--make sure main file is right, and dependencies. Do push this.
### package-lock.json
Comes with version 5/higher

## Yarn
Made by FB, tends to be faster and is very similar.
'yarn add package-name'
'yarn install' for entire package.json

With npm, may need to run sudo in from of npm install

---

# What is Express.js?
A Node.js Framework--adds more structure to Node.js so you can easily build a server 
# Setting up a basic server with Express.js
install express as a dependency

## Endpoints

## Top-Level Middleware

## req.body

## req.params
`
## Using a controller
