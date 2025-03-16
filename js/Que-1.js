console.log("Que-1 is working...");

$(document).ready(function () {
  $(".letter").click(function () {
    let letters = ["A", "B", "C", "D", "E", "F"];
    let index = $(this).index(".letter"); // Get index of clicked letter

    $(".letter").each(function (i) {
      let newIndex = (i - index + letters.length) % letters.length;
      $(this).text(letters[newIndex]);
    });
  });
});
