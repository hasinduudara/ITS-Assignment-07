console.log("Knight Rider works!");

$(document).ready(function () {
  let boxes = $(".box");
  let currentIndex = 0;
  let direction = 1;
  let interval;

  function startKnightRider() {
    interval = setInterval(function () {
      boxes.css("background-color", "white");
      boxes.eq(currentIndex).css("background-color", "red");
      if (
        currentIndex - direction >= 0 &&
        currentIndex - direction < boxes.length
      ) {
        boxes.eq(currentIndex - direction).css("background-color", "#fd4242");
      }
      if (
        currentIndex - 2 * direction >= 0 &&
        currentIndex - 2 * direction < boxes.length
      ) {
        boxes
          .eq(currentIndex - 2 * direction)
          .css("background-color", "#ff9191");
      }
      if (
        currentIndex - 3 * direction >= 0 &&
        currentIndex - 3 * direction < boxes.length
      ) {
        boxes
          .eq(currentIndex - 3 * direction)
          .css("background-color", "#ffc0c0");
      }
      currentIndex += direction;
      if (currentIndex >= boxes.length || currentIndex < 0) {
        direction *= -1;
        currentIndex += direction;
      }
    }, 100);
  }

  function stopKnightRider() {
    clearInterval(interval);
    //   boxes.css("background-color", "white");
  }

  $(".start-btn").click(function () {
    startKnightRider();
    $(".bg-sound")[0].play();
  });

  $(".stop-btn").click(function () {
    stopKnightRider();
    $(".bg-sound")[0].pause();
    $(".bg-sound")[0].currentTime = 0;
  });
});
