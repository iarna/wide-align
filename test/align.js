'use strict'
const {test} = require('tap')
const align = require('../align.js')

test('align', function (t) {
  t.equal(align.center('abc', 10), '   abc    ', 'center narrow')
  t.equal(align.center('古古古', 10), '  古古古  ', 'center wide')
  t.equal(align.left('abc', 10), 'abc       ', 'left narrow')
  t.equal(align.left('古古古', 10), '古古古    ', 'left wide')
  t.equal(align.right('abc', 10), '       abc', 'right narrow')
  t.equal(align.right('古古古', 10), '    古古古', 'right wide')

  t.equal(align.center('abc', 2), 'abc', 'center narrow overflow')
  t.equal(align.center('古古古', 4), '古古古', 'center wide overflow')
  t.equal(align.left('abc', 2), 'abc', 'left narrow overflow')
  t.equal(align.left('古古古', 4), '古古古', 'left wide overflow')
  t.equal(align.right('abc', 2), 'abc', 'right narrow overflow')
  t.equal(align.right('古古古', 4), '古古古', 'right wide overflow')

  t.equal(align.left('', 5), '     ', 'left align nothing')
  t.equal(align.center('', 5), '     ', 'center align nothing')
  t.equal(align.right('', 5), '     ', 'right align nothing')

  t.equal(align.left('   ', 5), '     ', 'left align whitespace')
  t.equal(align.center('   ', 5), '     ', 'center align whitespace')
  t.equal(align.right('   ', 5), '     ', 'right align whitespace')

  t.equal(align.left('   ', 2), '   ', 'left align whitespace overflow')
  t.equal(align.center('   ', 2), '   ', 'center align whitespace overflow')
  t.equal(align.right('   ', 2), '   ', 'right align whitespace overflow')

  t.equal(align.left('  x  ', 10), '  x       ', 'left align whitespace mix')
  t.equal(align.center('  x  ', 10), '    x     ', 'center align whitespace mix')
  t.equal(align.right('  x  ', 10), '       x  ', 'right align whitespace mix')

  t.end()
})
