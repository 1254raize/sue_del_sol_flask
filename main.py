from flask import Flask, render_template, redirect, url_for, send_from_directory

app = Flask(__name__, static_url_path="", static_folder="frontend/build/")
app.secret_key = "SECRET_KEY"


@app.route("/")
def home():
    return app.send_static_file("index.html")


if __name__ == '__main__':
    app.run(debug=True)
