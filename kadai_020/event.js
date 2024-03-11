// btnというidを持つHTML要素を取得し、定数に代入する
const textBtn = document.getElementById('btn');

const text = document.getElementById('text')

// HTML要素がクリックされたときにイベント処理を実行する
textBtn.addEventListener('click', () => {
    // 「ボタンをクリックしました」というテキストを表示する
    text.textContent = 'ボタンをクリックしました';
});



