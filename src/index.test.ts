import test from 'ava'
import Client from './'


test('basics', t => {
  const client = new Client('http://fakeendpoint.com')

  t.true(!!client)
})