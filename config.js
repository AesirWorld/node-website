var path = require('path');

exports.port = 8585;
exports.host = "127.0.0.1";

exports.server = {
    views: {
        engines: {
            hbs: require('handlebars')
        },
        partialsPath: path.resolve(__dirname, 'hbs-partials'),
        helpersPath: path.resolve(__dirname, 'hbs-helpers')
    },
    security: {
        hsts: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            includeSubdomains: false
        },
        xframe: true
    },
    debug: {
        request: ['error']
    }
};

exports.mysql = {
    host: "127.0.0.1",
    port: 3306,
    user: "root", //Dont use root.
    pass: ""
};

exports.user = {
    profileFields: {
        fullname: [ 'Full Name', '%s' ],
        email: [ 'Email', '<a href="mailto:%s">%s</a>', function(u) { return u.protocol === 'mailto:' } ],
        github: [ 'GitHub', '<a rel="me" href="https://github.com/%s">%s</a>', hostmatch(/^github.com$/)],
        twitter: ['Twitter', '<a rel="me" href="https://twitter.com/%s">@%s</a>', hostmatch(/^twitter.com$/)],
        appdotnet: ['App.net', '<a rel="me" href="https://alpha.app.net/%s">%s</a>', hostmatch(/app.net$/)],
        homepage: ['Homepage', '<a rel="me" href="%s">%s</a>', hostmatch(/[^\.]+\.[^\.]+$/)],
        freenode: ['IRC Handle', '%s']
    },
mail: {
    mailTransportType: null,
    mailTransportSettings: null,
    emailFrom: '"Aesir World" <webmaster@npmjs.org>'
}
};

exports.session = {
    password: 'somethingrandom',
    cookie: 's',
    expiresIn: 14 * 24 * 60 * 60 * 1000 // 2 wks
};

function hostmatch(m) {
    return function(u) {
        return u.host && u.host.match(m)
    }
}
