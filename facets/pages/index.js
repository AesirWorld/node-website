// Imports
var path = require('path')

// Export the package to hapi
exports.register = function Pages(facet, options, next) {
    // Configure our template engine
    facet.views({
        engines: {
            hbs: require('handlebars')
        },
        path: 'hbs-views',
    })

    // Home page route
    facet.route({
        path: '/',
        method: 'GET',
        handler: function(request, reply) {
            reply.view('index');
        }
    })

    //Not found page
    facet.route({
        path: '/{p*}',
        method: '*',
        handler: function(request, reply) {
            reply.view('not_found').code(404);
        }
    })

    next()
}

// Package "manifest"
exports.register.attributes = {
    pkg: require('./package.json')
}
