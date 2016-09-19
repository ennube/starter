import {http} from '@ennube/runtime';
import * as jws from 'jsonwebtoken';

const jw = jws;

export class IndexHTTPService {

    @http.GET('www', '/')
    index(request, response) {

    }

    @http.GET('www', '/robots.txt') // FUTURE MOCK
    robots(request, response) {

    }

}
