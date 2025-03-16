console.log("Que-1 is working");

let letters = ["A", "B", "C", "D", "E", "F"];
let letterElements = $(".letter");

function rotateLetters() {
  let lastLetter = letters.pop();
  letters.unshift(lastLetter);

  letterElements.each(function (index) {
    $(this).text(letters[index]);
  });
}

let intervalId;

$(".start-btn").click(function () {
  intervalId = setInterval(rotateLetters, 1500);
});

$(".stop-btn").click(function () {
  clearInterval(intervalId);
});
