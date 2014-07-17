// Main dependencies
var Hapi = require('hapi')
var config = require('./config.js')
var uuid = require('node-uuid')

// Setup logger
var bole = require('bole')
var pretty = require('bistre')()
var log = bole('server')

bole.output({
    level: 'info',
    stream: pretty
});

pretty.pipe(process.stdout)

// Init hapi
var server = new Hapi.Server(config.host, config.port, config.server)

// Web crawler rules
server.route({
    path: '/robots.txt',
    method: 'GET',
    handler: {
        file: './robots.txt'
    }
})

// Static files
server.route({
    path: '/static/{path*}',
    method: 'GET',
    handler: {
        directory: {
            path: './static',
            listing: false,
            index: false
        }
    }
});

// Compose our website
var packages = [
    require('./facets/pages') // Pages module, /home, /forum, etc...
]

server.pack.register(packages, function(err) {
    if (err) throw err

    // Start hapi server now
    server.start(function() {
        log.info('Hapi server started @ ' + server.info.uri)
    })
})
