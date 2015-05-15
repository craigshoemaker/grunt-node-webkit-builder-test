var grunt = require('grunt');

grunt.loadNpmTasks('grunt-node-webkit-builder');

grunt.initConfig({
    nodewebkit: {
        options: {
            platforms: ['win'],
            version: '0.12.1',
            buildDir: './dist',
        },
        src: ['./package.json', './src/**']
    }
});

grunt.registerTask('default', ['nodewebkit']);