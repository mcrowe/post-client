import axios from 'axios'


export default class Client {

  constructor(private endpoint: string) {
  }

  async send(action: string, params: object) {
    const res = await axios.post(this.endpoint + '/action', { action, params })
    return res.data
  }

}