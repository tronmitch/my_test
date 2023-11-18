const randomWords = ["Javascript", "Functions", "Web Api", "Handlers", "Programming", "Computer", "Event bubbling"];

const selectedWord = "";
const shownWord = "_ _ _ _ _ _ _";

function startGame() {
    shownWord = "";
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    selectedWord = randomWords[randomIndex];
    
}


const wordEl = document.querySelector(".word-blanks");
wordEl.innerHTML = shownWord;
wordEl.textContent = shownWord;

const spanEl = document.createElement("span");
spanEl.textContent = "This is a span";
wordEl.appendChild(spanEl);
// line 18 to 20 are the same as line 22
wordEl.innerHTML = "<span>This is a span</span>";

wordEl.innerHTML += "<p>This is a paragraph</p>";

question1 = {
    question: "Who is Harry Potter best friend?",
    answers: ["Severus Snape", "Ron Weasley", "Draco Malfoy", "Lord Voldermort"]
}

const tempString = "<ul>";
for(var i=0; i< question1.answers.length; i++) {
    tempString += "<li>" + question1.answers[i] + "</li>";
}
tempString += "</ul>";
wordEl.innerHTML = tempString;

const ulEl = document.createElement("ul");
for(var i=0; i< question1.answers.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = question1.answers[i];
    liEl.setAttribute("class", "win-loss-container");
    ulEl.appendChild(liEl);
}
wordEl.appendChild(ul);