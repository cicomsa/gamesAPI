# gamesAPI

Project in progress...

## Project description

This project was made as an assignment, through which to showcase my knowledge and understanding in TypeScript and TypeORM.

**The goal of the app is:**

* To have built a back-end side of a board game.
* Users can add and edit the content of the game: board, color and their name.

## How to:

Install the dependencies:

* Inside the project directory run `yarn `

Run  the app:

* Have set a ‘DATABASE_URL' environment variable
* Start the TypeScript compiler: tsc -w
* Connect to Postgres with TypeORM: yarn start

## 'Play' the game:

* To add an user:

  ```http post :<PORT>/games name=<NAME> - ``` 
  The user will be assigned with a random color and will have the default starting board added to the table.
  
* To edit user's content:

  ```http put :<PORT>/games/:id (name-optional) (color-optional) (board-optional)```
  Note: Single characters changes only for the board. Ex: board="x" 
