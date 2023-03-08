# The project
## Cloud Computing course - ESILV A4 CCC2

#### *Maxime PERRIN and Jeremy PEILLERON*
---

This GitHub repository is used by two students for their final project in their school.  
It uses Docker to deploy a simple web application (front, back and database included).

To use this project, you have more thorough instructions in the ReadMe file, in the frontend folder.  
But to sum it up, you can log in as an admin (**admin/admin** by default) to be able to edit/add/delete films.  
You can also register as a regular user to only have access to the movies displayed.

# How to install
1. Install Docker and Docker-compose packages if not already done.
2. Clone this repository on your local machine
```git
git clone https://github.com/Aabzyx/Cloud-Computing_Projet-Final
``` 
3. Start the whole project on the background
```git
docker-compose up -d
```