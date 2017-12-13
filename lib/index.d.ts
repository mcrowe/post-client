export default class Client {
    private endpoint;
    constructor(endpoint: string);
    send(action: string, params: object): Promise<any>;
}
