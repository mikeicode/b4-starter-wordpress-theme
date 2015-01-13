// Grunt JS File

module.exports = function(grunt) {

    // 1. All configuration goes here 
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
				dest: 'js/build/production.min.js',
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
		
		autoprefixer: {
		  options: {
				browsers: ['last 2 versions']
		  },
				single_file: {
			options: {
			  // Target-specific options go here.
			},
			src: 'css/output.css',
			dest: 'css/output.css'
		  },
		},
	
		
		watch: {
    		css: {
   			 	files: ['css/sass/**/*.scss'], 
    			tasks: ['sass','autoprefixer'], 
    			options: {
        			spawn: false,
    			}
			},
			
			scripts: {
        		files: ['js/libs/*.js'],
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
	grunt.loadNpmTasks('grunt-contrib-imagemin'); // optimize images
	grunt.loadNpmTasks('grunt-contrib-watch'); // watch for changes
	grunt.loadNpmTasks('grunt-contrib-sass'); // sass (SCSS)
	grunt.loadNpmTasks('grunt-autoprefixer'); //autoprefixer
	
	
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer']);
	

};
