console.log("hello world");

let num = 16;

function createBoard(num) {
  //NOTE I am creating a square so x and y can be the same value, having them be different added complication
  const board = document.querySelector(".board")
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div")
    board.appendChild(row)
    for (let j = 0; j < num; j++) {
      let column = document.createElement("div") 
      row.appendChild(column)
    }
  }
  console.log("hello")
}

createBoard(num)
function displayBoard(num) {
  //NOTE this function will be added to the button to implement the board on the page
}

// TODO - write a function display the board
