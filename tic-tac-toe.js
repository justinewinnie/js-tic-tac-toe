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
   this.turns = 0
  }

  var game = new TicTacToe()

  TicTacToe.prototype.square_free = function (checkbox) {
    var image = $(checkbox).find('.image')
    if (image.hasClass('cat') || image.hasClass('dog')) {
      return true
    }
  }

  TicTacToe.prototype.switch_player = function () {
    if (game.current_player === 1) {
      game.current_player = 2
    } else {
      game.current_player = 1
    }
  }

  TicTacToe.prototype.play = function (checkbox) {
    var image = $(checkbox).find('.image')
    if (game.square_free) {
      if (game.current_player === 1) {
        image.addClass('cat')
        image.attr('src', 'cat.png')
      } else {
        image.addClass('dog')
        image.attr('src', 'dog.jpg')
      }
      game.turns += 1
      console.log(game.turns)
      game.win()
      game.draw()
      game.switch_player()
    } else {
      alert("Please choose a free square.")
    }
  }

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

    if( cat_checkboxes['#1'] && cat_checkboxes['#2'] && cat_checkboxes['#3'] ) {
      alert('kitties rule, puppies drool!')
      game.reset()

    } else if ( cat_checkboxes['#1'] && cat_checkboxes['#4'] && cat_checkboxes['#7'] ) {
      alert('kitties rule, puppies drool!')
    } else if ( cat_checkboxes['#1'] && cat_checkboxes['#5'] && cat_checkboxes['#9'] ) {
      alert('kitties rule, puppies drool!')
    } else if ( cat_checkboxes['#4'] && cat_checkboxes['#5'] && cat_checkboxes['#6'] ) {
      alert('kitties rule, puppies drool!')
    } else if ( cat_checkboxes['#7'] && cat_checkboxes['#8'] && cat_checkboxes['#9'] ) {
      alert('kitties rule, puppies drool!')
    } else if ( cat_checkboxes['#2'] && cat_checkboxes['#5'] && cat_checkboxes['#8'] ) {
      alert('kitties rule, puppies drool!')
    } else if ( cat_checkboxes['#3'] && cat_checkboxes['#6'] && cat_checkboxes['#9'] ) {
      alert('kitties rule, puppies drool!')
    } else if ( cat_checkboxes['#3'] && cat_checkboxes['#5'] && cat_checkboxes['#7'] ) {
      alert('kitties rule, puppies drool!')
    }

    var dog_checkboxes = {
      '#1': ('image dog' === $('.checkbox').find( '#1' )[0].className),
      '#2': ('image dog' === $('.checkbox').find( '#2' )[0].className),
      '#3': ('image dog' === $('.checkbox').find( '#3' )[0].className),
      '#4': ('image dog' === $('.checkbox').find( '#4' )[0].className),
      '#5': ('image dog' === $('.checkbox').find( '#5' )[0].className),
      '#6': ('image dog' === $('.checkbox').find( '#6' )[0].className),
      '#7': ('image dog' === $('.checkbox').find( '#7' )[0].className),
      '#8': ('image dog' === $('.checkbox').find( '#8' )[0].className),
      '#9': ('image dog' === $('.checkbox').find( '#9' )[0].className)
    }

    if( dog_checkboxes['#1'] && dog_checkboxes['#2'] && dog_checkboxes['#3'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#1'] && dog_checkboxes['#4'] && dog_checkboxes['#7'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#1'] && dog_checkboxes['#5'] && dog_checkboxes['#9'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#4'] && dog_checkboxes['#5'] && dog_checkboxes['#6'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#7'] && dog_checkboxes['#8'] && dog_checkboxes['#9'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#2'] && dog_checkboxes['#5'] && dog_checkboxes['#8'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#3'] && dog_checkboxes['#6'] && dog_checkboxes['#9'] ) {
      alert('WOOF WOOF WOOF!')
    } else if ( dog_checkboxes['#3'] && dog_checkboxes['#5'] && dog_checkboxes['#7'] ) {
      alert('WOOF WOOF WOOF!')
    }
  }

  // TicTacToe.prototype.reset = function () {
  //   var cat = $('checkbox').find('#1')
  //   cat.removeClass('image cat')
  //     console.log("reset")
  // }

  TicTacToe.prototype.draw = function () {
    if ((game.turns === 9) && !game.win()) {
      alert("It's a draw.")
    }
  }

  $('#choose_cat').click(function() {
    game.current_player = 1
  })

  $('#choose_dog').click(function() {
    game.current_player = 2
  })

  $('.checkbox').click(function() {
    game.play(this)
  })

})
