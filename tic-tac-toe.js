// a turn:
// view the board
// have different classes for available/unavailable board spots?
// identify whose turn it is ---> whether to mark with x or o
// listen for event: click a square

// check if the event triggered three in a row ---> game ends, inform winner of win, inform loser of loss :(
// if all squares are checked and no three in a row ---> game ends in a draw

// if game not over, switch to other player
$(document).ready(function () {

  function TicTacToe() {
   this.current_player = 1
  }

  var game = new TicTacToe()

  TicTacToe.prototype.get_player_img = function (player) {
    if(player == 1) {
      return "cat"
    } else {
      return "dog"
    }
  }

  TicTacToe.prototype.play = function (checkbox) {
    // if square hasClass cat or dog, do nothing
    // else addClass cat or dog, depending on current player
    // var id = this.player.id
    // var img = this.player.img
    // $( "#" ).addClass( "img" );
    var image = $(checkbox).find('.image')
    console.log(image)
    if(image.hasClass("cat") || image.hasClass("dog")) {
      console.log("already played")
    } else {
      console.log(game.current_player )
      if (game.current_player === 1) {
        image.addClass("cat")
        image.attr("src", "cat.png")
        game.current_player = 2
      } else {
        image.addClass("dog")
        image.attr("src", "dog.jpg")
        game.current_player = 1
      }
    }
  }

  $(".checkbox").click(function() {
    game.play(this)
  })

  // TicTacToe.prototype.switch_players(player) = {
  //   if(player == 1) {
  //     return player = 2
  //   } else {
  //     return player = 1
  //   }
  // }

  TicTacToe.prototype.win = {

  }

  TicTacToe.prototype.draw = {

  }
})
