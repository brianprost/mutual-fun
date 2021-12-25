from flask import Flask, send_from_directory
import random

app = Flask(__name__)


@app.route("/")
def play_game():
    return send_from_directory("client/public", "index.html")


@app.route("/<path:path>")
def home(path):
    return send_from_directory("client/public", path)


@app.route("/generate-company-name")
def generate_company_name():
    company_name = ""
    with open('words/adjectives.txt', 'r') as f:
        words = f.read().splitlines()
        company_name = random.choice(words).capitalize() + " "

    with open('words/nouns.txt', 'r') as f:
        words = f.read().splitlines()
        company_name += random.choice(words).capitalize() + " "

    with open('words/nouns.txt', 'r') as f:
        words = f.read().splitlines()
        company_name += random.choice(words).capitalize()
    return company_name


if __name__ == '__main__':
    app.run(debug=False)
