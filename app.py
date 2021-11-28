from flask import Flask, render_template
import random

app = Flask(__name__)


@app.route("/")
def play_game():
    company_name = generate_company_name()
    return render_template("play_game.html", company_name=company_name)


def generate_company_name():
    company_name = ""
    with open('static/words/adjectives.txt', 'r') as f:
        words = f.read().splitlines()
        company_name = random.choice(words).capitalize() + " "

    with open('static/words/nouns.txt', 'r') as f:
        words = f.read().splitlines()
        company_name += random.choice(words).capitalize() + " "

    with open('static/words/verbs.txt', 'r') as f:
        words = f.read().splitlines()
        company_name += random.choice(words).capitalize()
    return company_name


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=False)
