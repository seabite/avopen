// ゲームのスコアと状態を保持する変数を定義します。
let score = 0;
let gameRunning = true;
let avocados = []; // 落下するアボカドを管理するための配列です。

// キャンバスのセットアップを行います。
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
// 実際の要素の大きさにキャンバスの大きさを合わせます。
canvas.width = 390;
canvas.height = 844;

// ゲームのメインループの定義をします。
function gameLoop() {
  // ゲームが終了状態であれば、ループを止めます。
  if (!gameRunning) return;

  // キャンバスをクリアし、新しいフレームの描画を開始します。
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 落下するアボカドのロジックを実行します。
  // アボカドの位置更新や、キャッチしたかどうかの判定など
  // ...

  // アボカドやその他の要素をキャンバスに描画します。
  // ...

  // 次のフレームを要求します。
  requestAnimationFrame(gameLoop);
}

// ゲームループを開始します。
gameLoop();

// ユーザーの入力に応じてバスケットを制御するイベントハンドラを設定します。
canvas.addEventListener("mousemove", function (event) {
  // マウスの動きに応じてバスケットを動かします。
  // ...
});

canvas.addEventListener("touchmove", function (event) {
  // タッチ操作に応じてバスケットを動かします。
  // ...
});

// スタート画面を表示する関数
function showStartScreen() {
  document.getElementById("start-screen").style.display = "flex";
}

// スタートボタンを押したときの処理
document
  .getElementById("start-button")
  .addEventListener("click", startGameCountdown);

// ゲーム開始前のカウントダウンを開始する関数
function startGameCountdown() {
  let countdown = 3; // 3秒からカウントダウン
  document.getElementById("start-screen").innerHTML =
    '<div id="countdown">' + countdown + "</div>";

  // 1秒ごとにカウントダウンを更新するタイマー
  const countdownTimer = setInterval(function () {
    countdown--;
    document.getElementById("countdown").textContent = countdown;

    if (countdown <= 0) {
      clearInterval(countdownTimer);
      document.getElementById("start-screen").style.display = "none"; // スタート画面を非表示にする
      startGame(); // ゲームを開始する
    }
  }, 1000);
}

// ゲームを開始する関数
function startGame() {
  gameRunning = true;
  updateTimer(); // ゲームのタイマーを開始
  gameLoop(); // ゲームループを開始
}

// ... (既存の gameLoop, updateTimer 関数) ...

// 最初にスタート画面を表示
showStartScreen();

// アボカドを追加する関数を定義します。
function addAvocado() {
  // 新しいアボカドを作成して、avocados配列に追加します。
  // ...
}

// スコアを更新し、表示する関数を定義します。
function updateScore() {
  score += 1; // スコアを1増やします。
  document.getElementById("score").textContent = score; // スコアボードを更新します。
}

// ゲームタイマーを設定します。
let gameTime = 60; // ゲーム時間を60秒に設定します。
function updateTimer() {
  // タイマーが0より大きい場合はデクリメントします。
  if (gameTime > 0) {
    gameTime--;
    document.getElementById("timer").textContent = gameTime; // タイマーボードを更新します。
    setTimeout(updateTimer, 1000); // 1秒後に再度updateTimerを実行します。
  } else {
    // タイマーが0になったら、ゲームを終了状態にします。
    gameRunning = false;
    // ゲームオーバーのロジックをここに実装します。
  }
}

// タイマーを開始します。
updateTimer();
