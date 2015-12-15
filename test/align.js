'use strict'
var test = require('tap').test
var align = require('..')

test('align', function (t) {
  t.is(align.center('abc', 10), '   abc    ', 'center narrow')
  t.is(align.center('古古古', 10), '  古古古  ', 'center wide')
  t.is(align.left('abc', 10), 'abc       ', 'left narrow')
  t.is(align.left('古古古', 10), '古古古    ', 'left wide')
  t.is(align.right('abc', 10), '       abc', 'right narrow')
  t.is(align.right('古古古', 10), '    古古古', 'right wide')

  t.is(align.center('abc', 2), 'abc', 'center narrow overflow')
  t.is(align.center('古古古', 4), '古古古', 'center wide overflow')
  t.is(align.left('abc', 2), 'abc', 'left narrow overflow')
  t.is(align.left('古古古', 4), '古古古', 'left wide overflow')
  t.is(align.right('abc', 2), 'abc', 'right narrow overflow')
  t.is(align.right('古古古', 4), '古古古', 'right wide overflow')

  t.end()
})
