from flask import Blueprint, render_template, send_from_directory

site = Blueprint('site', __name__, template_folder='site_templates')

@site.route('/')
def home():
    return render_template('index.html')

@site.route('/static/<path:file_name>')
def serve_script(file_name):
    return send_from_directory('static',file_name)