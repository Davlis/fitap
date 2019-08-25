class ApiService {
  constructor(options = {}) {
    this.client = options.client
    this.baseUrl = options.baseUrl
  }

  async get(url, options) {
    let result
    try {
      result = await this.client(`${this.baseUrl}${url}`, options)
    } catch (error) {
      console.log(`Error occured while performing GET ${this.baseUrl}${url}`)
      throw error
    }

    return result.data
  }

  async post(url, body) {
    let result
    try {
      result = await this.client.post(`${this.baseUrl}${url}`, body);
    } catch (error) {
      console.log(`Error occured while performing POST ${this.baseUrl}${url} with body = ${body}`)
      throw error
    }

    return result.data
  }
}

export default ApiService