document.getElementById('submitSceneDescription').addEventListener('click', function(event) {
    event.preventDefault();
    var sceneDescription = document.getElementById('sceneDescriptionInput').value;
    console.log(sceneDescription)
  
    // ここでAJAXリクエストを使用してPythonプログラムにデータを送信
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5000/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        // レスポンスとして動画のパスを受け取る
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        document.getElementById('sceneDescriptionResult').innerText = response.sceneDescription;
        }
    };
  
    // JSONとしてデータを送信
    xhr.send(JSON.stringify({sceneDescription: sceneDescription}));
});
  