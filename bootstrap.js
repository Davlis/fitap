import Registry from "@davlis/registry"

import Api from "./services/api"
import createClientMock from "./__stubs__/client"

function bootstrap() {
  // stubs
  const clientMock = createClientMock()

  // mocks
  const ApiService = new Api({ client: clientMock, baseUrl: '' })

  // register
  Registry.set('ApiService', ApiService)
}

export default bootstrap
