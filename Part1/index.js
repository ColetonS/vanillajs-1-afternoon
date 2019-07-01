
const board = []

function play(clickedId) {
   const playerSpan = document.getElementById('player')
   const clickedElement = document.getElementById(clickedId)
   

   if (playerSpan.innerText === 'X') {
       playerSpan.innerText = 'O'
       clickedElement.innerText = 'X'
       board[clickedId] = 'X'
   } else {
       playerSpan.innerText = 'X'
       clickedElement.innerText = 'O'
       board[clickedId] = 'O'
   }
   let topLeft = board[0]
   let topCenter = board[1]
   let topRight = board[2]
   let middleLeft = board[3]
   let middleCenter = board[4]
   let middleRight = board[5]
   let bottomLeft = board[6]
   let bottomCenter = board[7]
   let bottomRight = board[8]

   let winner = false

   if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
       alert(`Player ${topLeft} wins!`)
    winner = true}
    

    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`Player ${middleLeft} wins!`)
    winner = true}

   if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`Player ${bottomLeft} wins!`)
    winner = true}

   if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`Player ${topLeft} wins!`)
    winner = true}

   if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`Player ${topCenter} wins!`)
    winner = true}

   if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`Player ${topRight} wins!`)
    winner = true}

   if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`Player ${topLeft} wins!`)
    winner = true }

   if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
    alert(`Player ${topRight} wins!`)
    winner = true}

   let boardFull = false
   for (let i = 0; i < 9; i++) {
    console.log(board[i])
    if (board[i] !== undefined) {
        boardFull = true
       } else if (board[i] === undefined) {
           boardFull = false
       }
   }
   console.log(boardFull)

   if (boardFull === true && winner === false) {
    alert(`Cat's Game`)
   }
   

  

   }
