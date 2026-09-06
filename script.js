const quizData = [
  {
    question: "1年は何日ですか?(うるう年を除く)",
    choices: ["364日", "365日", "366日", "360日"],
    answer: 1
  },
  {
    question: "日本の首都はどこですか?",
    choices: ["大阪", "京都", "東京", "横浜"],
    answer: 2
  },
  {
    question: "水が氷になる温度は何度ですか?(セ氏)",
    choices: ["0度", "10度", "-10度", "100度"],
    answer: 0
  },
  {
    question: "1週間は何日ですか?",
    choices: ["5日", "6日", "7日", "8日"],
    answer: 2
  },
  {
    question: "信号機の色で「止まれ」を表す色はどれですか?",
    choices: ["青", "黄", "緑", "赤"],
    answer: 3
  },
  {
    question: "富士山がまたがる都道府県の正しい組み合わせはどれですか?",
    choices: ["東京都と神奈川県", "山梨県と静岡県", "長野県と新潟県", "群馬県と栃木県"],
    answer: 1
  },
  {
    question: "1年のうち、昼と夜の長さがほぼ同じになる日を何といいますか?",
    choices: ["夏至", "冬至", "春分の日", "立夏"],
    answer: 2
  },
  {
    question: "日本国憲法で定められた国民の三大義務に含まれないものはどれですか?",
    choices: ["勤労の義務", "納税の義務", "教育を受けさせる義務", "選挙に行く義務"],
    answer: 3
  },
  {
    question: "日本の100円硬貨に描かれている植物は何ですか?",
    choices: ["桜", "梅", "菊", "稲"],
    answer: 0
  },
  {
    question: "世界で最も面積が大きい大陸はどこですか?",
    choices: ["アフリカ大陸", "北アメリカ大陸", "ユーラシア大陸", "南極大陸"],
    answer: 2
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const scoreCommentEl = document.getElementById("score-comment");
const retryBtn = document.getElementById("retry-btn");

function loadQuestion() {
  const current = quizData[currentIndex];
  progressEl.textContent = `第 ${currentIndex + 1} 問 / ${quizData.length} 問`;
  questionEl.textContent = current.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.hidden = true;
  choicesEl.innerHTML = "";

  current.choices.forEach((choiceText, index) => {
    const btn = document.createElement("button");
    btn.textContent = choiceText;
    btn.className = "choice-btn";
    btn.addEventListener("click", () => selectAnswer(index));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const current = quizData[currentIndex];
  const buttons = choicesEl.querySelectorAll(".choice-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === current.answer) {
    score++;
    buttons[selectedIndex].classList.add("correct");
    feedbackEl.textContent = "正解です!";
    feedbackEl.classList.add("correct");
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[current.answer].classList.add("correct");
    feedbackEl.textContent = "不正解...";
    feedbackEl.classList.add("incorrect");
  }

  nextBtn.hidden = false;
}

function showNext() {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.hidden = true;
  resultBox.hidden = false;
  scoreEl.textContent = `${quizData.length}問中 ${score}問正解`;

  const rate = score / quizData.length;
  let comment;
  if (rate === 1) {
    comment = "パーフェクト!文句なしの常識王です!";
  } else if (rate >= 0.8) {
    comment = "素晴らしい!かなりの常識力の持ち主ですね!";
  } else if (rate >= 0.5) {
    comment = "なかなか良い成績です!この調子で頑張りましょう!";
  } else if (rate > 0) {
    comment = "惜しい!復習すればもっと伸びるはずです。再挑戦してみましょう!";
  } else {
    comment = "今回は残念でしたが、ここからが伸びしろです!また挑戦してみましょう!";
  }
  scoreCommentEl.textContent = comment;
}

function resetQuiz() {
  currentIndex = 0;
  score = 0;
  quizBox.hidden = false;
  resultBox.hidden = true;
  loadQuestion();
}

nextBtn.addEventListener("click", showNext);
retryBtn.addEventListener("click", resetQuiz);

loadQuestion();
