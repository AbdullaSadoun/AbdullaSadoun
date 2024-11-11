# PortfolioWebApp
Portfolio Website


look at this repo: https://github.com/SadounAbdulla/Django-Portfolio-website 
for inspiration


https://github.com/ashish-makes/django-tailwind-blog

# use the following links/info to create:
- LinkedIn: www.linkedin.com/in/abdullasadoun
- Email: Abdulla.Sadoun@dal.ca
- LEETCODE!!!! https://leetcode.com/AbdullaSa/
- https://github.com/AbdullaSadoun

- Location: Halifax, NS (B3H1Y3) 
- Phone: 902-266-9696 

## To run (new)
1 - docker-compose run web python manage.py migrate
2 - docker-compose up 

## To run (old)
1 - ensure django is in installed pip install django

2 - ensure you are in the right directory: cd PORTFOLIOWEBAPP

3 - python manage.py makemigrations

4 - python manage.py migrate     

5 - python manage.py runserver  

open port 8000

# Before Hosting the website checklist: 
## Create base.html 
## Add full experience page 
## Add Relational Database
## Prepare dockerfile
## Django Project Preparation
    -Project Structure: Ensure your Django project is well-structured with appropriate apps, templates, and static files organized.
    -Static Files: Make sure your static files (CSS, JavaScript, images) are collected and properly configured using STATIC_URL and STATIC_ROOT.
    -Secret Key & Settings: Double-check that your SECRET_KEY, DEBUG, and other sensitive settings are not hardcoded in your settings.py. Use environment variables for these.
    -Database Configuration: Ensure you're using the correct database settings (SQLite for development, but consider PostgreSQL or MySQL for production).
    -Allowed Hosts: Update ALLOWED_HOSTS in settings.py to include your domain name or the IP address of the hosting server.
    -Media Files: If you're handling user-uploaded files, configure MEDIA_URL and MEDIA_ROOT.
    -URLs & Views: Check that all URLs are correctly mapped and each view renders properly.
    -Testing: Thoroughly test your website locally, including forms, pages, and dynamic content.

### Security Enhancements: Use security best practices:
    Enable HTTPS.
    -Set SECURE_HSTS_SECONDS, SECURE_SSL_REDIRECT, and other security-related settings for production.
    Use X-Frame-Options, Content-Security-Policy, and X-Content-Type-Options headers.

### Deployment Preparation:
    Prepare for Static Files: Run python manage.py collectstatic to gather all static files into the static root folder.
    Requirements File: Ensure you have a requirements.txt file generated with pip freeze > requirements.txt.
    Database Migrations: Run python manage.py makemigrations and python manage.py migrate to ensure the database schema is up-to-date.
    Superuser Account: Create a superuser account with python manage.py createsuperuser for admin access.

### Server & Hosting
    Domain Name: Have a domain name ready, and ensure it's properly linked to your server.
    SSL Certificate: Get an SSL certificate (e.g., from Let's Encrypt) to secure your site.
    Deployment Tools: Decide whether you're using Gunicorn, uWSGI, or another WSGI server to serve your Django app.
    Web Server: Install and configure a web server like Nginx or Apache as a reverse proxy for your Django app.
    Environment Variables: Set up environment variables for sensitive settings such as SECRET_KEY, database credentials, etc.
    Virtual Environment: Ensure your Django project runs in a virtual environment on the server.
    Git Version Control: Use Git to manage your project’s version control, and set up deployment pipelines if necessary.

### Final Testing
    Cross-Browser Testing: Test your portfolio on different browsers (Chrome, Safari, Firefox, etc.).
    Mobile-Friendly: Ensure the site is responsive and works well on mobile devices.
    404 and 500 Pages: Set up custom error pages for 404 (Not Found) and 500 (Server Error) issues.

# Django Tailwind Blog - A Developer Portfolio & Blog

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Introduction
**"Django Tailwind Blog"** is a developer blog and portfolio website built using **Django** and **Tailwind CSS**. It includes several pages such as Home, About, Contact, Blog, Projects, Categories, and custom 404 pages. The project features a clean and modern design that is fully responsive and optimized for performance. It includes a powerful admin interface for managing the content, and is easy to customize and deploy to a production environment.

![django-tailwind-blog-for-developers](https://user-images.githubusercontent.com/106135144/227858936-d4cbcb44-9ff4-4729-b0f0-6ede931b99e0.png)

## Table of Content
  * [Introduction](#introduction)
  * [Installation](#installation)
  * [Technologies Used](#technologies-used)
  * [Features](#features)
  * [Pages](#pages)
  * [Website Screenshots](#website-screenshots)
  * [Admin Screenshots](#admin-screenshots)
  * [Deployment](#deployment)
  * [Conclusion](#conclusion)
  
## Installation
1. Clone the repository:
```
git clone https://github.com/ashish-makes/django-tailwind-blog.git
```
2. Navigate to the project directory:
```
cd `django-tailwind-blog`
```
3. Create and activate a new virtual environment:
```
python -m venv env
source env/bin/activate
```
4. Install the project dependencies:
```
pip install -r requirements.txt
```
5. Install the `django-tailwind` module:
```
pip install django-tailwind
```
6. Add `tailwind` to your `INSTALLED_APPS` list in `settings.py`:
```python
INSTALLED_APPS = [
    # ...
    'tailwind',
    # ...
]
```
7. Run the Tailwind CSS configuration command:
```python
python manage.py tailwind init
```
8. Create the database tables:
```python
python manage.py migrate
```
9. Run the development server:
```python
python manage.py runserver
```

## Technologies used
1. HTML
2. CSS
3. JavaScript
4. Python

### Primary Modules used
1. Django==4.1.4
2. django-tailwind==3.4.0
3. whitenoise==6.3.0
4. psycopg2==2.9.5
5. django-tinymce==3.5.0

## Features
1. Responsive design using Tailwind CSS
2. Admin dashboard for managing blog posts and portfolio items
3. Contact form for sending messages to the site owner

## Pages
- `Home`: The landing page of the website, which displays a brief introduction and links to other pages.
- `About`: A page that provides information about the site owner, their background, and skills.
- `Contact`: A page that contains a contact form for visitors to send messages to the site owner.
- `Blog`: A page that displays a list of blog posts in reverse chronological order, with links to individual post pages.
- `Blog Post`: A page that displays the content of a single blog post, including the title, author, date, and content.
- `Projects`: A page that displays a list of portfolio projects, with links to individual project pages.
- `Project`: A page that displays the details of a single portfolio project, including the title, description, date, and any relevant images or links.
- `Categories`: A page that displays a list of blog post categories, with links to filtered lists of posts for each category.
- `Custom 404 Pages`: Custom error pages that display when a user navigates to a non-existent page or encounters an error.

## Website Screenshots
![127 0 0 1_8000_about](https://user-images.githubusercontent.com/106135144/218676693-b433a723-0569-4a5a-91e2-d2330659233d.png)

![127 0 0 1_8000_contact](https://user-images.githubusercontent.com/106135144/218676709-3924f790-32db-46f3-a1b5-bf1907506751.png)

![127 0 0 1_8000_blog](https://user-images.githubusercontent.com/106135144/218676733-bc2313e9-9721-4f4b-9fd8-ab7cfa939221.png)

![127 0 0 1_8000_projects](https://user-images.githubusercontent.com/106135144/218676756-3770e70e-149b-48ae-af50-44d1ee43aed6.png)

![127 0 0 1_8000_projectsk](https://user-images.githubusercontent.com/106135144/218676780-62e72dd7-d2e4-4ef9-9b2b-aea25abf625d.png)

## Admin Screenshots
![127 0 0 1_8000_admin_](https://user-images.githubusercontent.com/106135144/218730427-1aad64b4-65ff-44e4-babf-840d200919fa.png)

![127 0 0 1_8000_admin_home_blog_](https://user-images.githubusercontent.com/106135144/218730473-d914186d-eabf-4ff9-bc45-dd98c024cfb5.png)

![127 0 0 1_8000_admin_home_blog_7_change_](https://user-images.githubusercontent.com/106135144/218730503-f4027aeb-7579-4fc6-8fa4-5331201931e8.png)

## Deployment
To deploy this project to a web server, you can follow these general steps:

1. Set up a web server that can run Python applications. This could be a VPS, a PaaS like Heroku, or a cloud-based server like AWS.
2. Clone the repository to your server:
```
git clone https://github.com/ashish-makes/django-tailwind-blog.git
```
3. Install the project dependencies on your server using `pip`:
```
pip install -r requirements.txt
```
4. Set up a database for the project, if necessary. You can use a database like PostgreSQL, MySQL, or SQLite, depending on your needs.
5. Configure the settings.py file with your server's settings:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydatabase',
        'USER': 'mydatabaseuser',
        'PASSWORD': 'mypassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

STATIC_ROOT = '/var/www/static/'
MEDIA_ROOT = '/var/www/media/'

ALLOWED_HOSTS = ['example.com', 'www.example.com']
```
The DATABASES setting specifies the database connection details. In this example, we're using PostgreSQL with a database named `mydatabase`, a user named `mydatabaseuser`, and a password of `mypassword`. The `STATIC_ROOT` and `MEDIA_ROOT` settings specify the file paths where static files and media files will be stored. The `ALLOWED_HOSTS` setting is a list of domain names that the application is allowed to serve.
6. Run the python manage.py collectstatic command to collect all the static files into the STATIC_ROOT directory:
```python
python manage.py collectstatic
```
7. Start the Django development server, or set up a production server using a WSGI server like uWSGI or Gunicorn.
```python
python manage.py runserver
```
8. Access the website using your server's IP address or domain name, and the port number of the server if necessary. For example, if you're running the development server on port 8000, you can access the website at `http://your-server-ip:8000/`.



#
# My Personal Portfilio Website (Django)

Personal portfolio website made with Django framework in the backend, and with CSS, JS, and Bootstrap for the frontend. It is a dynamic site so that you can control the content of the site through the admin area

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode


## Demo

(https://user-images.githubusercontent.com/104616403/210330707-c8607c2b-6929-435f-bb58-d3176454b4fa.gif)


## Screenshots

![image](https://user-images.githubusercontent.com/104616403/210331817-c266db91-fcfa-40e2-99ad-8c857c55051d.png)

![image](https://user-images.githubusercontent.com/104616403/210332043-779ddac8-b1a7-4414-b5bd-ebe67d4200df.png)
![image](https://user-images.githubusercontent.com/104616403/210332104-4a4556c7-5583-43bc-b39a-bc62b6b5e367.png)

![image](https://user-images.githubusercontent.com/104616403/210332171-190afc75-9174-4ffa-b9d2-3541b5fd0ebb.png)

![image](https://user-images.githubusercontent.com/104616403/210332226-cbfbe6e5-732d-4442-9aae-218b6e6292b0.png)

![image](https://user-images.githubusercontent.com/104616403/210332284-9d69c838-ab8e-4e71-ac6b-2f0ed514561a.png)



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://ca.linkedin.com/in/abdullasadoun)


## 🛠 Skills
Javascript, HTML, CSS, python, Django, Bootstrap...


# Hi, I'm Abdulla Sadoun! 👋


## 🚀 About Me
I'm a full stack developer...


## Feedback

If you have any feedback, please reach out to us at SadounAbdulla1234@out.com


## Tech Stack

**Client:** Html, css, Bootstrap

**Server:** python, Django


## Run Locally

Clone the project

```bash
  git clone https://github.com/SadounAbdulla/Django-portfilio-website.git
```

Go to the project directory

```bash
  cd Django-portfilio-websitet
```

MAKE  Migration

```bash
  python manage.py makemigrations
```

MAKE  Migration

```bash
  python manage.py migrate     
```
Start the server

```bash
  python manage.py runserver     
```


## Authors

- [@Abdulla Sadoun](https://github.com/SadounAbdulla)

