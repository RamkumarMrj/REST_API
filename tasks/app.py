from flask import Flask, request, render_template, url_for
from flask_cors import CORS
from app_service import AppService
import json

app = Flask(__name__)
appService = AppService();
CORS(app)


@app.route('/')
def home():
    title = "Home Page"
    # return "<h1>App Works!!!</h1>"
    return render_template('index.html', title=title)


@app.route('/api/tasks')
def tasks():
    return appService.get_tasks()

@app.route('/api/task', methods=['POST'])
def create_task():
    request_data = request.get_json()
    task = request_data['task']
    return appService.create_task(task)


@app.route('/api/task', methods=['PUT'])
def update_task():
    request_data = request.get_json()
    return appService.update_task(request_data['task'])


@app.route('/api/task/<int:id>', methods=['DELETE'])
def delete_task(id):
    return appService.delete_task(id)