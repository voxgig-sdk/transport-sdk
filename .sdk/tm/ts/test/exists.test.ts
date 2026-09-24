
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TransportSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TransportSDK.test()
    equal(testsdk instanceof TransportSDK, true,
      'TransportSDK.test() must return a client synchronously')
  })

})
