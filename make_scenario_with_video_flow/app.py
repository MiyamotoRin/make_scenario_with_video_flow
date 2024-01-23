from flask import Flask, request, jsonify
from flask_cors import CORS
from scene_detect import search_video

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})

@app.route('/', methods=['POST'])
def process_video_path():
    data = request.json
    scene_description= data['sceneDescription']
    print(scene_description)
    # ここで動画パスを処理するロジックを実装
    base_video_id = search_video.get_video_index([scene_description], 'scene_detect/index.usearch')
    base_video_path = search_video.get_video_path(base_video_id, 'scene_detect/file_paths.db')
    
    # 処理結果をJSONとして返す
    return jsonify(sceneDescription=base_video_path)

if __name__ == '__main__':
    app.run(debug=True)