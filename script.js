var config = {
  position: 'start',
  draggable: true
}


var board1 = ChessBoard('board1', config);

var board2 = Chessboard('board2', 'start')

var board3 = Chessboard('board3', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})

$('#startBtn').on('click', board2.start)
$('#clearBtn').on('click', board2.clear)