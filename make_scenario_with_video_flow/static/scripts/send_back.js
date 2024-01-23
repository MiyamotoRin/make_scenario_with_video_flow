document.getElementById('submitSceneDescription').addEventListener('click', function(event) {
    event.preventDefault();
    var sceneDescription = document.getElementById('sceneDescriptionInput').value;
  
    // ここでAJAXリクエストを使用してPythonプログラムにデータを送信
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // レスポンスとして動画のパスを受け取る
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            var videoContainer = document.getElementById('sceneDescriptionResult');

            // 既存の動画をクリアする
            videoContainer.innerHTML = '';

            // 新しいvideoタグを生成
            var video = document.createElement('video');
            video.src = response.sceneDescription;  // 動画のパスを設定
            video.controls = true;
            video.autoplay = false;
            video.width = 640;  // 動画のサイズを設定
            video.height = 480;

            // videoタグをコンテナに追加
            videoContainer.appendChild(video);
        }
    };
  
    // JSONとしてデータを送信
    xhr.send(JSON.stringify({sceneDescription: sceneDescription}));
});
  