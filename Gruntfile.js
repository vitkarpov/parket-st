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
            project: {
                options: {
                    host: "www.wemakesites.ru",
                    port: 21,
                    username: "parket",
                    password: "parket-root",
                    dest: "/pages"
                },
                files: [{
                    expand: true,
                    cwd: ".",
                    src: [
                        "*.html",
                        "*.min.css",
                        "*.min.js",
                        "dummy/**"
                    ]
                }]
            },
            progress: {
                files: ['index.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-ftp-push');

    grunt.registerTask('deploy', ['prettify', 'ftp_push']);
}
