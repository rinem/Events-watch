# EventsWatch

MERN stack event manager app , created with React, Node & JWT authentication. Users can create account to add, view, update and delete events created by everyone using the app. 

## Heroku 
The app is deployed on heroku and can be checked here : https://events-watch.herokuapp.com

## Demo

UI screenshots : 
![2](/demo/demo3.jpg)
![3](/demo/demo2.jpg)
![4](/demo/demo1.jpg)

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
