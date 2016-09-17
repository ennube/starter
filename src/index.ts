import {http} from '@ennube/runtime';

export class IndexHTTPService {

    @http.GET('www', '/')
    index(request, response) {

    }

    @http.GET('www', '/robots.txt') // FUTURE MOCK
    robots(request, response) {

    }

}
