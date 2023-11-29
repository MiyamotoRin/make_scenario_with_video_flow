document.getElementById('submitVideoPath').addEventListener('click', function() {
    var videoPath = document.getElementById('videoPathInput').value;
  
    // ここでAJAXリクエストを使用してPythonプログラムにデータを送信
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/path-to-your-python-endpoint", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // レスポンスとして動画のパスを受け取る
        var response = JSON.parse(xhr.responseText);
        document.getElementById('videoPathResult').innerText = response.videoPath;
      }
    };
  
    // JSONとしてデータを送信
    xhr.send(JSON.stringify({videoPath: videoPath}));
  });
  