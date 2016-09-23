// app.js
import {http} from '@ennube/runtime';

let web = new http.Gateway('web');

declare function page(locales): string;

export class IndexHTTPService {

    @web.GET('/')
    @web.GET('/{route+}')
    index(req: http.Request, res: http.Response) {
        res.send(page({
              route: req.params.route
        }));
    }

}
