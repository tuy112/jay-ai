from flask import Flask, render_template
from routes.chat_routes import chat_bp

app = Flask(__name__)
app.register_blueprint(chat_bp)

@app.route("/")
def index():
    return render_template("index.html")

# 앱 실행
if __name__ == "__main__":
    app.run(debug=True)