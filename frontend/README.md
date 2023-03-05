# frontend_TP Maxime Perrin
#### ESILV A4 - Web Applications Practical Work


To run the code, run the following commands  
```npm install```  
```npm run dev```

If you want to log in as an administrator, you have to either use an admin account on your database, or create one with the website and give the admin role afterwards.

---
#### Here are some important infos :

* All API calls are located in the `api.js` file (except for the one in CreateFilm.vue)
* All *user stories* asked in the subject are present
  * If you try to view data without being logged in, you will be redirected to the login page
  * If you are logged in as a user, you can view a list of films, and details of one film if you click on it
  * As an admin, you can also create a new film, or edit/delete an existing one
  * And you can log out from the _Home_ page
* I used the local storage to keep some data available everywhere in the app, but those are not critical data (only jwt token and username).