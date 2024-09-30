# Example-CRUD-Vue-3-dotnet-8
- The example shows how to Building a Vue CRUD App with a .NET API and using MySQL as a database.
- The article of this repository https://blog.stackpuz.com/building-a-vue-crud-app-with-a-net-api
- To find more resources, please visit https://stackpuz.com

## Prerequisites
- Node.js
- .NET 8
- MySQL

## Installation
- Clone this repository `git clone https://github.com/stackpuz/Example-CRUD-Vue-3-dotnet-8 .`
- Change directory to Vue project. `cd view`
- Install the Vue dependencies. `npm install`
- Create a new database and run [/database.sql](/database.sql) script to create tables and import data.
- Edit the database configuration in [/api/appsettings.js](/api/appsettings.json) file.

## Run project

- Run Vue project. `npm run dev`
- Run .NET API project `dotnet run`
- Navigate to http://localhost:5173