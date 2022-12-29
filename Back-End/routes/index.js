const user = require('./user');
const product = require('./product');
const factory = require('./factory');
const agency = require('./agency');
const delivery = require('./delivery');
const guarantee = require('./guarantee');


function route(app) {
    app.use('/user', user);
    app.use('/product', product);
    app.use('/factory', factory);
    app.use('/agency', agency);
    app.use('/delivery', delivery);
    app.use('/guarantee', guarantee);
}

module.exports = route;