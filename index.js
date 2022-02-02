let createMessage = document.getElementById("generator-Btn");
let messageBox = document.getElementById("message-box");

let message = {
  subject: ["You", "Someone", "They", "She", "He"],
  futureVerb: ["will", "are going to", "is going to", "shall", "will be"],
  verbTwo: ["receive", "anounce", "get", "win", "lose"],
  subjectTwo: [
    "a gift",
    "many blessings",
    "a kiss",
    "a lot of money",
    "nothing",
  ],
  connector: ["from", "to", "by", "for", "near"],
  subjectThree: [
    "a loved one.",
    "a family member.",
    "a friend.",
    "your closest person.",
    "a stranger.",
  ],
};

function select() {
  // Getting the value
  const selSign = document.getElementById("signs");
  const sign = selSign.options[selSign.selectedIndex].text;

  console.log(sign);
}

let randomNum = Math.floor(Math.random() * 4);

createMessage.addEventListener("click", function () {
  if (messageBox.innerText !== "") {
    messageBox.innerText = "";
  } else if (messageBox.innerText == "") {
    messageBox.innerText =
      message.subject[randomNum] +
      " " +
      message.futureVerb[randomNum] +
      " " +
      message.verbTwo[randomNum] +
      " " +
      message.subjectTwo[randomNum] +
      " " +
      message.connector[randomNum] +
      " " +
      message.subjectThree[randomNum];
  }
});

document.getElementById("delete-Btn").addEventListener("click", function () {
  messageBox.innerText = "";
});
