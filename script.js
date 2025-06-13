console.log("hello world");

let num = 16;

function createBoard(num) {
  //NOTE I am creating a square so x and y can be the same value, having them be different added complication
  const board = document.querySelector(".board");
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const sq = createSquare(num);
      board.appendChild(sq);
    }
  }
  console.log("hello");
}

//NOTE the squares need to be created via javascript and styling added here since size needs to be dynamic hard coding it in is a bit beyond my abilities at the moment
function createSquare(num) {
  const sq = document.createElement("div");
  const percent = 100 / num;
  sq.style.border = "1px solid black";
  sq.style.backgroundColor = "teal";
  sq.style.width = `${percent}%`;
  sq.style.height = `${percent}%`;
  sq.style.boxSizing = "border-box";
  return sq;
}

createBoard(num);
function displayBoard(num) {
  //NOTE this function will be added to the button to implement the board on the page
}

// TODO - write a function display the board
