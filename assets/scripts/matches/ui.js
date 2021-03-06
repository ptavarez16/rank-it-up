'use strict'

require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')

const listChallengersTemplate = require('../templates/challenger-dropdown.handlebars')
const listOpposersTemplate = require('../templates/opposer-dropdown.handlebars')
const listWinnersTemplate = require('../templates/winner-dropdown.handlebars')
const listLosersTemplate = require('../templates/loser-dropdown.handlebars')

const createMatchSuccess = function (data) {
  $('#newMatch').modal('hide')
  $('.new-match-form').get(0).reset()
  $.toast({
    text: 'Match Created', // Text that is to be shown in the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // top-center or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const createMatchFailure = function () {
  $('.new-match-form').get(0).reset()
  $.toast({
    text: 'Please make sure to fill out both fields and try again.', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // top-center or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const listPlayersSuccess = function (data) {
  $('.new-match-form').get(0).reset()
  if (data.players.length === 0) {
    $('#newMatch').modal('hide')
    $.toast({
      text: 'Please create a player first.', // Text that is to be shown in the toast
      icon: 'error', // Type of toast icon
      showHideTransition: 'slide', // fade, slide or plain
      allowToastClose: true, // Boolean value true or false
      hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
      stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
      position: 'top-center', // top-center or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

      textAlign: 'left', // Text alignment i.e. left, right or center
      loader: true, // Whether to show loader or not. True by default
      loaderBg: '#FF0077', // Background color of the toast loader
      beforeShow: function () {}, // will be triggered before the toast is shown
      afterShown: function () {}, // will be triggered after the toat has been shown
      beforeHide: function () {}, // will be triggered before the toast gets hidden
      afterHidden: function () {} // will be triggered after the toast has been hidden
    })
  } else {
    const listChallengers = listChallengersTemplate({ players: data.players })
    $('#newMatchChallenger').html(listChallengers)

    const listOpposers = listOpposersTemplate({ players: data.players })
    $('#newMatchOpposer').html(listOpposers)

    const listWinners = listWinnersTemplate({ players: data.players })
    $('#newMatchWinner').html(listWinners)

    const listLosers = listLosersTemplate({ players: data.players })
    $('#newMatchLoser').html(listLosers)
  }
}

const listPlayersFailure = function () {
  $.toast({
    text: 'We are unable to fetch your players at this time. Please try again later.', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'top-center', // top-center or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

module.exports = {
  createMatchSuccess,
  createMatchFailure,
  listPlayersSuccess,
  listPlayersFailure
}
