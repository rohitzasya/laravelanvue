## Technology Employed

**Laravel**: A backend framework that manages database interactions and server-side logic.
The frontend framework **Vue.js** is used to create interactive and responsive user interfaces.
- **Axios**: For exchanging data via HTTP queries to the backend API.
The application uses **Toastify** to display notifications.
- **Vue Router**: Used to manage client-side routing among various components and views.
- **Vite**: A development build tool that replaces Vue.js modules quickly and efficiently.
A utility-first CSS framework for application frontend style is called **BootStrap*.

Backend Validation
I use the Laravel Validator for backend validation.

Requirements
Make sure the following are installed:

Node.js
Composer
PHP
Laravel
Setup
Clone the repository:


dowanload zip file and extract that zip file

Navigate into the project directory:

cd your-project
Create an .env file: Copy all the configuration from .env.example and paste it into the new .env file.

Create a database with the name specified in the .env file under the DB_DATABASE variable. Make sure to set the correct DB_USERNAME and DB_PASSWORD for the database connection.

Generate the application key:

php artisan key:generate
Run the migrations to set up the database schema:

php artisan migrate
Seed the database with sample data (for example, to insert data into the users table):


php artisan db:seed

Copy the seeded user's email from the database. The password will be the one specified in the seeder.

After this, generate the JWT secret key by running:

php artisan jwt:secret
Steps to Install Dependencies:
Install backend dependencies: First, install Composer:


composer install
Then, serve the backend using:

php artisan serve
Install frontend dependencies: Use either Yarn or NPM. For NPM:

npm install
To compile and serve the frontend, run:
npm run dev

After completing these steps, you can access the project at:
http://127.0.0.1:8000
