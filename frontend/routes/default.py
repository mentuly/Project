from os import getenv

from flask import render_template
from flask_login import current_user, login_required
from .. import app




@app.get("/")
@login_required
def index():
    email = current_user.email

    nickname = email.split("@")[0]
    return render_template("index.html", nickname=nickname) 