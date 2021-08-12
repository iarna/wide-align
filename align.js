import stringWidth from 'string-width'

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
  const trimmed = str.trimRight()
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
  const trimmed = str.trimLeft()
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
    const padLeftBy = parseInt((width - strWidth) / 2, 10)
    padLeft = createPadding(padLeftBy)
    padRight = createPadding(width - (strWidth + padLeftBy))
  }

  return padLeft + trimmed + padRight
}

export const center = alignCenter
export const left = alignLeft
export const right = alignRight
