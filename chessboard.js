// this function will create a chessboard
function createChessBoard(chessboard){
    // a typical chessboard has 8 rows and 8 columns
    // we will build those with nested loops
    for (var i=0; i < 8; i++){
        //loop to build the columns
        for (var j=0; j < 8; j++){
            // build the chess squares
            // create a new div
            var chessSquare = document.createElement("div");

            // assign a css class to each square
            chessSquare.className = "chessSquare";

            // check to see if this is an even or odd square
            // % is modulus (mod) - it divides the first number by the second number, but only returns the remainder; if the remainder is 0 when our row+column is divided by 2, then it was an even number
            if ((i+j) % 2 == 0){
                chessSquare.style.backgroundColor = "black";
            }

            // add the chess square to the chess board div
            chessboard.appendChild(chessSquare);
        }
    }
}