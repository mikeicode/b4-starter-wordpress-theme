// Grunt JS File

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
			dist: {
				src: [
					'js/libs/*.js', // All JS in the libs folder
					'js/main.js'
					
				],
				dest: 'js/build/production.js',
			}
		},
		
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js',
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/output.css': 'css/main.scss'
				}
			} 
		},
		
		  
	  postcss: {
		options: {
		  map: true,
		  processors: [
			require('autoprefixer')({browsers: ['last 2 versions']})
		  ]
		},
		dist: {
		  src: 'css/output.css'
		}
	  },


		
		watch: {
    		css: {
   			 	files: ['css/sass/**/*.scss'], 
    			//tasks: ['sass','autoprefixer'], 
				
				tasks: ['sass','postcss'],
				
    			options: {
        			spawn: false,
    			}
			},
			
			scripts: {
        		files: ['js/libs/*.js','js/main.js'],
        		tasks: ['concat', 'uglify'],
        		options: {
            		spawn: false,
        		}
    		}, 
		
		}
		

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat'); // put js into one file
	grunt.loadNpmTasks('grunt-contrib-uglify'); // minify that one js file
	grunt.loadNpmTasks('grunt-contrib-watch'); // watch for changes
	grunt.loadNpmTasks('grunt-contrib-sass'); // sass (SCSS)
	
	grunt.loadNpmTasks('grunt-postcss'); //post CSS to replace autoprefixer
	
	
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss']);
	

};
