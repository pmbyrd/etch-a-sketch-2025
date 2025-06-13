console.log("hello world");

let num = 16;
const board = document.querySelector(".board");

function createBoard(num) {
  //NOTE I am creating a square so x and y can be the same value, having them be different added complication
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
  sq.className = "square";
  sq.style.border = "1px solid black";
  sq.style.backgroundColor = "teal";
  sq.style.width = `${percent}%`;
  sq.style.height = `${percent}%`;
  sq.style.boxSizing = "border-box";
  return sq;
}

createBoard(num);

function changeColor(e) {
  let color = "black"
  if (e.target.classList.contains("square")) {
    console.log("hoving over the square")
    e.target.style.backgroundColor = color
  }
}

board.addEventListener("mouseover", changeColor);
// TODO - write a function displa the board
