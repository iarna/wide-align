import { test } from 'tap'
import { center, left, right } from '../align.js'

test('align', function (t) {
  t.is(center('abc', 10), '   abc    ', 'center narrow')
  t.is(center('古古古', 10), '  古古古  ', 'center wide')
  t.is(left('abc', 10), 'abc       ', 'left narrow')
  t.is(left('古古古', 10), '古古古    ', 'left wide')
  t.is(right('abc', 10), '       abc', 'right narrow')
  t.is(right('古古古', 10), '    古古古', 'right wide')

  t.is(center('abc', 2), 'abc', 'center narrow overflow')
  t.is(center('古古古', 4), '古古古', 'center wide overflow')
  t.is(left('abc', 2), 'abc', 'left narrow overflow')
  t.is(left('古古古', 4), '古古古', 'left wide overflow')
  t.is(right('abc', 2), 'abc', 'right narrow overflow')
  t.is(right('古古古', 4), '古古古', 'right wide overflow')

  t.is(left('', 5), '     ', 'left align nothing')
  t.is(center('', 5), '     ', 'center align nothing')
  t.is(right('', 5), '     ', 'right align nothing')

  t.is(left('   ', 5), '     ', 'left align whitespace')
  t.is(center('   ', 5), '     ', 'center align whitespace')
  t.is(right('   ', 5), '     ', 'right align whitespace')

  t.is(left('   ', 2), '   ', 'left align whitespace overflow')
  t.is(center('   ', 2), '   ', 'center align whitespace overflow')
  t.is(right('   ', 2), '   ', 'right align whitespace overflow')

  t.is(left('  x  ', 10), '  x       ', 'left align whitespace mix')
  t.is(center('  x  ', 10), '    x     ', 'center align whitespace mix')
  t.is(right('  x  ', 10), '       x  ', 'right align whitespace mix')

  t.end()
})
