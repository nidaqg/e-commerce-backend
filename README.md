# E-Commerce Backend Application

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)
![badge](https://img.shields.io/badge/license-MIT-orange)

An e-commerce backend application built using express.js , Sequelize and a MySQL database.

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Description

This Application allows the user to retrieve, update, delete or create data for products, their tags and their categories. The database consists of 3 tables that are joined where needed through Sequelize in the routes files. The tables themselves are created and modeled through the models present in the models folders and again make use of Sequelize syntax. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing Guidelines](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation
 
 This application makes use of Node.js, MySql npm, Express.js and Sequelize. After downloading the app folders, install the npm packages by running 'npm i' in the command line. Make sure your MySql workbench is connected, then create the ecommerce_db database by opening and running the schema.sql file and seed it through the command line. Once the database has been initialized and seeded, run 'npm start' in the command line to start the app. For testing functionality, use Insomnia Core.


## Usage 

To start, the user can input their MySQL username, password, etc into a .env file and then create and seed the database. The user is now ready to start the app by running 'npm start' in the command line. This will sync the Sequelize models to the MySql database and the server will be started.

As this app ony covers the backend of the application, to view functionality of the various routes, Insomnia Core can be made use of.

Opening the GET routes in Insomnia Core for categories, products or tags will display the data for each of these routes in formatted JSON. In the same way, making POST, PUT or DELETE requests for categories, products or tags will allow the user to create a new dataset, update a dataset or delete it. 

A demo of the app can be viewed here: 
[Part1](https://drive.google.com/file/d/1dU7uAPc93S36OZZ0z1LOT1iSamBNYMIn/view)
[Part2] (https://drive.google.com/file/d/1jsHGbkLbZ2rFSJrrtnTcwuQBVnDAysP_/view)

## Contributing
 ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)

 Link to Contributor's Covenant:[Contributors Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) 

 
## License
![badge](https://img.shields.io/badge/license-MIT-orange)
   
Copyright (c) [2021] [Nida Ghuman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

## Questions

The repo for this project can be found here: https://github.com/nidaqg/e-commerce-backend

video walkthrough links: 
[Part1](https://drive.google.com/file/d/1dU7uAPc93S36OZZ0z1LOT1iSamBNYMIn/view)
[Part2] (https://drive.google.com/file/d/1jsHGbkLbZ2rFSJrrtnTcwuQBVnDAysP_/view)

For any questions or to report issues, email me at: nidaqg@gmail.com
