// Grunt JS File

module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
			dist: {
				src: [
					'js/libs/*.js' // All JS in the libs folder
					
				],
				dest: 'js/build/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		
		compass: {                 
			dist: {                 
		  		options: {             
					sassDir: 'stylesheets/sass',
					cssDir: 'stylesheets/css',
					outputStyle: 'compressed'
		 		 	}
			}
		},
		


		
		watch: {
    		css: {
   			 	files: ['stylesheets/sass/partials/*.scss'],
    			tasks: ['compass'],
    			options: {
        			spawn: false,
    					}
				}
			},
			
			scripts: {
        		files: ['css/libs/*.js'],
        		tasks: ['concat', 'uglify'],
        		options: {
            		spawn: false,
        				}
				},
    		 
		
		
		

    });

    // Tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat'); // put js into one file
	grunt.loadNpmTasks('grunt-contrib-uglify'); // minify that one js file
	grunt.loadNpmTasks('grunt-contrib-imagemin'); // optimize images
	grunt.loadNpmTasks('grunt-contrib-compass'); // compass sass
	
	grunt.loadNpmTasks('grunt-contrib-watch'); // watch for changes
	
	
	
	
    // Tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'compass']);
	

};
