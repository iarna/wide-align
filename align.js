'use strict'
const stringWidth = require('string-width')

// lodash's way of generating pad characters.

function createPadding (width) {
  let result = ''
  let string = ' '
  let n = width
  do {
    if (n % 2) {
      result += string
    }
    n = Math.floor(n / 2)
    string += string
  } while (n)

  return result
}

/**
 * @param {string} str
 * @param {number} width
 */
function alignLeft (str, width) {
  const trimmed = str.trimEnd()
  if (trimmed.length === 0 && str.length >= width) return str
  let padding = ''
  const strWidth = stringWidth(trimmed)

  if (strWidth < width) {
    padding = createPadding(width - strWidth)
  }

  return trimmed + padding
}

/**
 * @param {string} str
 * @param {number} width
 */
function alignRight (str, width) {
  const trimmed = str.trimStart()
  if (trimmed.length === 0 && str.length >= width) return str
  let padding = ''
  const strWidth = stringWidth(trimmed)

  if (strWidth < width) {
    padding = createPadding(width - strWidth)
  }

  return padding + trimmed
}

/**
 * @param {string} str
 * @param {number} width
 */
function alignCenter (str, width) {
  const trimmed = str.trim()
  if (trimmed.length === 0 && str.length >= width) return str
  let padLeft = ''
  let padRight = ''
  const strWidth = stringWidth(trimmed)

  if (strWidth < width) {
    const padLeftBy = Math.floor((width - strWidth) / 2)
    padLeft = createPadding(padLeftBy)
    padRight = createPadding(width - (strWidth + padLeftBy))
  }

  return padLeft + trimmed + padRight
}

exports.center = alignCenter
exports.left = alignLeft
exports.right = alignRight
