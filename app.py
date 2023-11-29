from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/path-to-your-python-endpoint', methods=['POST'])
def process_video_path():
    data = request.json
    video_path = data['videoPath']
    # ここで動画パスを処理するロジックを実装

    # 処理結果をJSONとして返す
    return jsonify(videoPath=video_path)

if __name__ == '__main__':
    app.run(debug=True)