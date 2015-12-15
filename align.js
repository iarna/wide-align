'use strict'
var stringWidth = require('string-width')

exports.center = alignCenter
exports.left = alignLeft
exports.right = alignRight

// lodash's way of generating pad characters.

function createPadding (width) {
  var result = ''
  var string = ' '
  var n = width
  do {
    if (n % 2) {
      result += string;
    }
    n = Math.floor(n / 2);
    string += ' ';
  } while (n);

  if (width !== result.length) result += ' '

  return result;
}

function alignLeft (str, width) {
  str = str.trim()
  var padding = ''
  var strWidth = stringWidth(str)

  if (strWidth < width) {
    padding = createPadding(width - strWidth)
  }

  return str + padding
}

function alignRight (str, width) {
  str = str.trim()
  var padding = ''
  var strWidth = stringWidth(str)

  if (strWidth < width) {
    padding = createPadding(width - strWidth)
  }

  return padding + str
}

function alignCenter (str, width) {
  str = str.trim()
  var padLeft = ''
  var padRight = ''
  var strWidth = stringWidth(str)

  if (strWidth < width) {
    var padLeftBy = parseInt((width - strWidth) / 2, 10) 
    padLeft = createPadding(padLeftBy)
    padRight = createPadding(width - (strWidth + padLeftBy))
  }

  return padLeft + str + padRight
}
