const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))

function createClientMock(options = {}) {
  const timeout = options.timeout || 1

  const mock = async (url, options) => {
    console.log(`Client :: Performing request to ${url} with options = ${JSON.stringify(options)}`)

    await sleep(timeout)

    return { data : { hello: 'world'} }
  }

  mock.post = async (url, body) => {
    console.log(`Client :: Performing POST request to ${url} with body = ${JSON.stringify(body)}`)

    await sleep(timeout)

    return { data : { hello: 'world'} }
  }

  return mock
}

export default createClientMock