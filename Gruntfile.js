var path = require('path')

module.exports = function (grunt) {
    grunt.initConfig({
        prettify: {
            options: {
                config: '.prettifyrc'
            },
            all: {
                expand: true,
                cwd: 'dist',
                ext: '.html',
                src: ['*.html'],
                dest: 'dist'
            }
        },
        ftp_push: {
            deploy: {
                options: {
                    host: "www.wemakesites.ru",
                    port: 21,
                    username: "parket",
                    password: "parket-root",
                    dest: "/"
                },
                files: [
                    {
                        expand: true,
                        cwd: "dist",
                        src: [
                            "*.html",
                            "*.min.css",
                            "*.min.js",
                            "dummy/**"
                        ],
                        dest: 'pages'
                    },
                    {
                        expand: true,
                        src: "index.html"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-ftp-push');

    grunt.registerTask('deploy', ['prettify', 'ftp_push']);
}
