console.log("Que-2 working...");

$(document).ready(function () {
  let colors = ["red", "green", "blue", "yellow", "rgb(252, 198, 178)", "plum"];
  let index = 0;
  let interval;

  function startColorChange() {
    interval = setInterval(function () {
      $(".up-box").css("background-color", colors[(index + 5) % colors.length]);
      $(".box-1").css("background-color", colors[(index + 4) % colors.length]);
      $(".box-2").css("background-color", colors[(index + 3) % colors.length]);
      $(".box-3").css("background-color", colors[(index + 2) % colors.length]);
      $(".box-4").css("background-color", colors[(index + 1) % colors.length]);
      $(".down-box").css("background-color", colors[index % colors.length]);
      index++;
    }, 500);
  }

  function stopColorChange() {
    clearInterval(interval);
  }

  $(".starat-btn").click(function () {
    startColorChange();
  });

  $(".stop-btn").click(function () {
    stopColorChange();
  });
});
