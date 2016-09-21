export {dispatcher} from '@ennube/runtime';
import {http} from '@ennube/runtime';

let web = new http.Gateway('web');

export class IndexHTTPService {

    @web.GET('/')
    index(request, response) {

    }

    @web.GET('/robots.txt') // FUTURE MOCK
    robots(request, response) {

    }

}
