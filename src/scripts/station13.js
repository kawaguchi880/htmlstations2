function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。

  if (document.getElementById('text').style.backgroundColor !== 'red') {
    document.getElementById('text').style.backgroundColor = 'red';
  }
  else {
    document.getElementById('text').style.backgroundColor = '';
  }

}
