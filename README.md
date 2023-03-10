Install Django:
```
pip install Django
(or)
python -m pip install django

pip install djangorestframework
(or)
python -m pip install djangorestframework
```

Create Virtual Env:

    python -m venv .env

To Activate:
    
    .\.env\Scripts\activate

To Deactivate:
    
    deactivate


(Optional if you are using globaly):

    pip install django
    pip install djangorestframework

Create Project:

    django-admin startproject blog

To Run Django:

    cd blogs
    python manage.py runserver

Open URL:

`http://127.0.0.1:8000/ or localhost:8000`

To synchronize these migration files:
    
    python manage.py migrate

Creating a django project's app:

    python manage.py startapp posts

---
MODEL:

---
Create & write a class for Post

`djangoapi/blog/posts/models.py`

To MakeMigration:

    python manage.py makemigrations

Register posts in INSTALLED_APPS:

`djangoapi/blog/blog/settings.py`

Run:

    python manage.py makemigrations
    python manage.py migrate

Create API's:

`posts/api`

`posts/api/serializers.py`

`posts/api/views.py`

`posts/migrations`


posts

`posts/admin.py`

`posts/apps.py`

`posts/models.py`

`posts/tests.py`

`posts/views.py`

ModelSerializer Create PostSerializer class:

`posts/api/serializers.py`

Create PostListView class in view.py

`posts/api/views.py`

Give path in urls.py:

`posts/urls.py`

Register rest_framework in INSTALLED_APPS in settings.py rest_framework

To create Superuser / Admin user:

    python manage.py createsuperuser --email admin@example.com --username admin
    (pass: admin)

Register model in admin.py:

`posts/admin.py`

`admin.site.register(Post)`

admin login:

`http://127.0.0.1:8000/admin/`

=============================================
Refered Blog: 
[Dev.to Blog - Developing Restful APIs with Python, Django and Django Rest Framework](https://dev.to/joshuamdeguzman/definitive-guide-developing-restful-apis-using-python-django-and-drf-2h7e)

Github user API:

[RamkumarMrj Github API](https://api.github.com/users/RamkumarMrj)

---
# FLASK API
---

### Structure the Project:
We placed all the code in the app.py file but, as the project grows it???s not easy to maintain. So, let???s move all the logic into another file called `app_service.py`. Here is the `app_service.py` file in which we defined the tasks json and four functions for the business logic. The `__init__()` function is called automatically every time you create an object from this class. This is like a constructor if you are coming from a java background. The self parameter is a reference to the current instance of the class and you can use it to access the variables of the instance as we used in the methods below.

the app.py becomes leaner as we moved all the logic from this file to the service file above. First, we need to import AppService from the `app_service.py` file at line number 2 and initialize the class and create an object appService at line number 6. Once the object is created you can use it to access all the variables and methods as below.

---

Requirements:

    flask
    python-dotenv

To run:
    flask --app app run

    python3 -m venv myapp
    source myapp/bin/activate

install dependencies (Mac OS)
    
    python3 -m pip install -r requirements.txt

run the app
    
    flask run

in powershell:

    $env:FLASK_APP="app.py" 
    flask run

Debug true:

    $env:FLASK_DEBUG = 1
    flask run

In CMD:
    
    set FLASK_APP=app.py
    set FLASK_DEBUG=1
    flask run

---

# Home:
**Home Page**

URL: `http://127.0.0.1:5000/`

**Method GET**

GET `/api/tasks` - To view all tasks

URL: `http://127.0.0.1:5000/api/tasks`

**Method POST**

POST `/api/task` - to update data / task

URL: `http://127.0.0.1:5000/api/task`
```
Method: POST
Body:
{
 "task": {
        "id": 234324,
        "name": "task",
        "description": "This is task erwer"
    }
}
```
**Mthod PUT**

PUT `/api/task` - add new data / task

URL: `http://127.0.0.1:5000/api/task`
```
Method: PUT
Body:
{
 "task": {
        "id": 234324,
        "name": "task",
        "description": "This is task erwer"
    }
}
```

**Method: DELETE**

DELETE `/api/task/<int:id>` - to delete particular task

URL: `http://127.0.0.1:5000/api/task/1`


---
Refered Blog: 

[medium blog](https://medium.com/bb-tutorials-and-thoughts/how-to-write-rest-api-with-python-and-flask-71ab42d253c5)

[flask Docs](https://flask.palletsprojects.com/en/2.2.x/quickstart/)

[Github reference](https://github.com/bbachi/python-flask-restapi)

---
# Angular

```
ng new todo
cd todo/src/app

mkdir components
cd components

ng g c header
ng g c footer
ng g c body
```

Reference docs

[Bootstrap Docs](https://getbootstrap.com/docs/5.2/)

[MDBootstrap](https://mdbootstrap.com/docs/standard/)

for icons:

    npm i @fortawesome/angular-fontawesome
    ng add @fortawesome/angular-fontawesome@0.12.1

`? Choose Font Awesome version you would like to use: Font Awesome 6` 

`? Choose Font Awesome icon packages you would like to use: Free Solid Icons`



For testing:

Temporary Front-End solution so you can test if your API integration is working:
Click on window -> type run and hit enter -> in the command window copy:

    chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

Permanent solution:
In the backend code, the developer needs to add an annotation @Crossorigin right above the CRUD api call method.


Install flask-cors

pip install -U flask-cors
then after app initialization, initialize flask-cors with default arguments:

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
   return "Hello, cross-origin-world!"