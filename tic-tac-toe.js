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
   this.board = $('board')
  }

  var game = new TicTacToe()

  // TicTacToe.prototype.first_player = function (player_img) {
  //   // player autoset as 1/cat
  //   //
  //   if (game.current_player === 1) {
  //     turn.addClass('cat')
  //     turn.attr("src", "cat.png")
  //   } else {
  //     turn.addClass('dog')
  //     turn.attr("src", "dog.jpg")
  //     game.current_player = 2
  //   }
  // }
  //
  // $(".player").click(function() {
  //   game.first_player(this)
  // })

  TicTacToe.prototype.play = function (checkbox) {
    // if square hasClass cat or dog, do nothing
    // else addClass cat or dog, depending on current player
    // var id = this.player.id
    // var img = this.player.img
    // $( "#" ).addClass( "img" );
    var image = $(checkbox).find('.image')

    if(image.hasClass('cat') || image.hasClass('dog')) {
      alert('choose an open square')
    } else {
      if (game.current_player === 1) {
        image.addClass('cat')
        image.attr('src', 'cat.png')
        game.current_player = 2
      } else {
        image.addClass('dog')
        image.attr('src', 'dog.jpg')
        game.current_player = 1
      }
    }
    game.win()

  }

  $('.checkbox').click(function() {
    game.play(this)
  })

  TicTacToe.prototype.win = function () {
    var cat_checkboxes = {
      '#1': ('image cat' === $('.checkbox').find( '#1' )[0].className),
      '#2': ('image cat' === $('.checkbox').find( '#2' )[0].className),
      '#3': ('image cat' === $('.checkbox').find( '#3' )[0].className),
      '#4': ('image cat' === $('.checkbox').find( '#4' )[0].className),
      '#5': ('image cat' === $('.checkbox').find( '#5' )[0].className),
      '#6': ('image cat' === $('.checkbox').find( '#6' )[0].className),
      '#7': ('image cat' === $('.checkbox').find( '#7' )[0].className),
      '#8': ('image cat' === $('.checkbox').find( '#8' )[0].className),
      '#9': ('image cat' === $('.checkbox').find( '#9' )[0].className)
    }
    // var images = $('.checkbox').find( '#1' )[0].className
    // console.log(cat_checkboxes['#1'])

      if(cat_checkboxes['#1'] && cat_checkboxes['#2'] && cat_checkboxes['#3'] ) {
        console.log('kitties rule, puppies drool!')
      }

    //   if(board.find('#1').hasClass(pattern) && board.find('#2').hasClass(pattern) && board.find('#3').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#1').hasClass(pattern) && board.find('#4').hasClass(pattern) && board.find('#7').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#1').hasClass(pattern) && board.find('#5').hasClass(pattern) && board.find('#9').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#4').hasClass(pattern) && board.find('#5').hasClass(pattern) && board.find('#6').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#7').hasClass(pattern) && board.find('#8').hasClass(pattern) && board.find('#9').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#2').hasClass(pattern) && board.find('#5').hasClass(pattern) && board.find('#8').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#3').hasClass(pattern) && board.find('#6').hasClass(pattern) && board.find('#9').hasClass(pattern)) {
    //     won = 1;
    //   } else if (board.find('#3').hasClass(pattern) && board.find('#5').hasClass(pattern) && board.find('#7').hasClass(pattern)) {
    //     won = 1;
    //   }
    //   return won;
    // }
  }



  TicTacToe.prototype.draw = {

  }
})
