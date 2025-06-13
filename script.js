console.log("hello world")

// TODO - write a function that creates a board
function createBoard(x) {
    //NOTE I am creating a square so x and y can be the same value, having them be different added complication
    let board = []
    for (let i = 0; i <= x; i++) {
        //NOTE - I need to push an array into the intial array for the second loop
        board.push([])
        for (let j = 0; j <= x; j++) {
            board[i].push(0)
        }
    }
    console.log(board)
    return board
}

createBoard(4, 4)
// TODO - write a function that displays the board
function displayBoard(num) {
    //NOTE this function will be added to the button to implement the board on the page
    const board = document.querySelector(".board")
    //TODO add css styles in seperate file sheet in order to have visual representation of the board on the page
}


// TODO - write a function display the board