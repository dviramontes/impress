module.exports = function( grunt ) {
    /** Grunt plugins. **/
    grunt.loadNpmTasks('grunt-contrib-copy');
	// TODO grunt.loadNpmTasks for each grunt plugin.
    
    /** Grunt tasks. **/
    grunt.registerTask( 'README', [ 'copy:README' ] );
    grunt.registerTask( "test", [ "TODO" ] );
    // TODO grunt.registerTask for each target.
    
    /** Grunt task options. **/
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' )
        ,
        copy: {
          README: {
            files: [
              { src: ['README.md'], dest: 'README.html' }
            ]
          }
        }
		// TODO task data for each task.
	} )
}