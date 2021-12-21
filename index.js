let createMessage = document.getElementById("generator-Btn");
let messageBox = document.getElementById("message-box");

let message = {
  articles: ["The", "He", "She", "They"],
  subjectOne: ["kapper", "gardener", "barista", "shopper"],
  verbs: ["went", "jumped", "laughed", "talked"],
  connector: ["to", "from", "on", "so"],
  subjects: ["Leyla", "Sophie", "Max", "Rosa"],
};

let randomNum = Math.floor(Math.random() * 4);

createMessage.addEventListener("click", function () {
  if (messageBox.innerText !== "") {
    messageBox.innerText = "";
  } else if (messageBox.innerText == "") {
    messageBox.innerText =
      message.articles[randomNum] +
      " " +
      message.subjectOne[randomNum] +
      " " +
      message.verbs[randomNum] +
      " " +
      message.connector[randomNum] +
      " " +
      message.subjects[randomNum];
  }

});

document.getElementById("delete-Btn").addEventListener("click", function () {
  messageBox.innerText = "";
});
