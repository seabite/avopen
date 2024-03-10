const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let score = 0;
let timeLeft = 60;
let gameRunning = true;

// スコアとタイマーのDOMを取得
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

// アボカドの画像を読み込む
const avocadoImg = new Image();
avocadoImg.src = "avocado.png"; // アボカド画像のパスを指定

// ゲーム開始の初期化処理
function init() {
  // TODO: タイマーを設定
  // TODO: アボカドを落とす処理
  // TODO: イベントリスナーを追加
}

// スコアを更新する関数
function updateScore() {
  score += 1;
  scoreDisplay.textContent = score;
}

// タイマーを更新する関数
function updateTimer() {
  // 毎秒タイマーをデクリメント
  if (timeLeft > 0) {
    setTimeout(() => {
      timeLeft -= 1;
      timerDisplay.textContent = timeLeft;
      updateTimer();
    }, 1000);
  } else {
    // ゲーム終了
    gameRunning = false;
    // TODO: ゲームオーバー処理
  }
}

// ゲームのメインループ
function gameLoop() {
  if (gameRunning) {
    // TODO: ゲームのロジックを実行
    requestAnimationFrame(gameLoop);
  }
}

init(); // ゲームの初期化
