Peter Christian Magalong Side Project 

reference : https://tailwindcss.com/docs/guides/vite

Server 
- cd server
- npm init -y
- npm i bcrypt cors express jsonwebtoken mongoose multer nodemon path

create **.env** file inside server folder:
paste this and fill all null data.
- PORT=3000
- MONGODB_URI=""
- JWT_SECRET=""

### run seeder 
node --env-file=.env userSeed.js
