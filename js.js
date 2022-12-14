/** @format */

const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const youChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

//컴퓨터 선택 0부터 2사이의 값
const result = ['가위', '바위', '보'];

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});

//결과 판별

const game = (user, computer, gameResult) => {
  let message;

  if (user === computer) {
    message='비김'
  } else {
    switch (user + computer) {
      //가위보 바위가위 보바위 사용자 승
      // 가위바위 바위보 보가위 컴퓨터 승
      case '가위보':
      case '바위가위':
      case '보바위':
        message = '사용자 승리'
        break;
      case '가위바위':
      case '바위보':
      case '보가위':
        message = '컴퓨터 승리!';
        break;
    }
  }
  show(user, computer, message);
};

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  youChoice.innerText = user;
  winner.innerText = result;
};
