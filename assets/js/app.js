// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する

let addBtn =document.getElementById ('addBtn');

// 2. 追加ボタンがクリックされた時の処理を書く
addBtn.addEventListener('click',function(){
  let inputColor =document.getElementById('inputColor');
  colorCode = inputColor.value;


  // 2.1 画面の入力欄、入力値を取得する
  // 2.2 新しくdivを作成する

  // let div =document.getElementById ('div');
  let newPanel =document.createElement('div');
  


  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する

  newPanel.style.backgroundColor = colorCode;
  newPanel.classList.add('panel');

  newPanel.addEventListener('click',function(){
    let inputColor =document.getElementById('inputColor');
    colorCode = inputColor.value;
    this.style.backgroundColor = colorCode;
  })

  let box =document.getElementById('box');
  box.insertBefore(newPanel,box.firstChild);
  
  // 2.4 新しく作成したdivにCSSのクラスを追加する
 

  // 2.5 div[id=box]を取得する
  // 2.6 作成したdivを追加する
  
})