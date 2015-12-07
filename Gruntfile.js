var fs = require('fs');
var path = require('path');
var options = JSON.parse(fs.readFileSync('credentials.json', 'utf-8'));

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
                options: options,
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
