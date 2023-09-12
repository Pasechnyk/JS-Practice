// Task 1 

window.open('Testing.html', '', "width = 450, height = 450");

setTimeout(() => {
    resizeBy(500, 500);
  }, 2000);
  setTimeout(() => {
    moveTo(200, 200);
  }, 4000);
  setTimeout(() => {
    close();
  }, 6000);

