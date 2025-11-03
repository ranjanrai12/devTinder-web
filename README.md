#### Created a vite + React application

#### Remove unused code and create Hello world

#### Install tailwind css

#### install Dasiy UI

#### Add Navbar component to App.jsx

#### create a Navbar.jsx separate component file

#### Install react router dom

#### Create BrowserRouter > Routes > Route => Then handle RouterChildren parent is Body component path

#### Create Outlet in the Body component

#### Create a footer

#### Create a Login page

#### Install axios

#### CORS - install cors in backend => add middleware to with configurations: origin, credential: true

#### Whenever you are making API call so pass axios with => {withCredentials: true}

#### install react-redux + @redux/toolkit

#### configureStore => Add it in Providers => createSlice => add reducer to store

#### Add redux devtools in chrome

#### Looks if data is coming properly in the store

#### Navbar should update as user logs in

#### Refactor the code except app.jsx move other component to components folder

#### You should not be access other routes without login

#### If token is not present then redirect to login page

#### Logout

#### Get the feed and add the feed in store

#### Build the user card on the feed

#### Edit Profile feature

#### Show toast message on save of profile

#### See all my connections

#### Create request received page

#### Feature - Accept/Request Connection request

#### Send/ignore the user card from feed

#### sign-up new User

# Deployment

- Sign-up on Aws

- Launch instance -> Connect -> SSH Client

- `chmod 400 <secret>.pem`
- ssh -i "DevTinder-App.pem" ubuntu@ec2-63-177-97-113.eu-central-1.compute.amazonaws.com
- Now after that Install the node version make sure to install the same version which use to run the project locally else it can break.
  - https://nodejs.org/en/download
  - use the curl command and run into the terminal
  - type exit and so it close the terminal, after that again enter the ssh command to go inside the terminal.
  - Install the node same as there in your local machine.
- clone the UI and backend code in your ec2 machine.

#### FrontEnd Deployment in AWS Ec2

- Go inside the frontEnd repo.
- npm install -> Dependency installed
- npm run build
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- copy code from dist(build files) to /var/www/html
  - `sudo scp -r dist/* /var/www/html`
- Enable port :80 of your instance
  - Click on instance Id
  - Click on the security Tab
  - Then Go inside the Security groups
  - Click on checkbox of inbound rules and then edit It.
  - Then Add Rules with port 80 along with 0.0.0.0/0 to make available on public.

#### Backend Deployment

- allowed ec2 instance public IP on mongoDB server.
  - Add Public IPv4 address of ec2 inside the mongoDB network access -> IP access list
  - define the port inside the inbound rules.
- npm install pm2 -g
- pm2 start npm --name "devTinder-backend" -- start
- pm2 logs
- pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>, pm2 restart <name>

- Now Frontend is running on http://63.177.97.113 and backend is running on http://63.177.97.113:3000

  - http://63.177.97.113 This IP will be access with host name i.e http://devTinder.com
  - Now in real time most of the application port of backend is mapped with `/api` so our path of backend will be `http://devTinder.com/api`
  - For this we need to edit nginx config file
  - config nginx - `sudo nano /etc/nginx/sites-available/default`
    Edit in configurations

  ```bash
  # Server name at initial was _ change it as like below with IP if we have host then update with hostname instead if IP
  server_name 63.177.97.113;

  location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
  ```

  - restart nginx - `sudo systemctl restart nginx`

  - update base URL in frontEnd
    ```js
    export const API_BASE_URL = "http://localhost:3000";
    TO;
    export const API_BASE_URL = "/api";
    ```

Questions
How my UI application is by default taking nginx port that is 80

# Notes

proxy is used to forward frontend API requests to a backend server while keeping the frontend and backend same-origin from the browser's perspective.

- Avoid cross-origin (CORS) issues.

- Allow cookies (HttpOnly, SameSite) to work in local development.

- Keep API paths consistent between local development and production.

```js
 server: {
    proxy: {
      // remote setup
      "/api": {
        target: "http://63.177.97.113",
      },

      // local setup
      // '/api': {
      //   target:'http://localhost:3000',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // }
    },
  },
```


TEST_KEY_ID = rzp_test_RaNUjquTYRCnzF
TEST_KEY_SECRET = olsfi8RbutmRGmOnFzFifYr5