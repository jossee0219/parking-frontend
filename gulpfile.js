/******************************/
/*        VARIABLES           */
/******************************/
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var paths = {
  appSassInput: ['www/app/core/theme/app.scss'],
  appSassOutput: 'www/app/core/theme'
};


/******************************/
/*           TASK             */
/******************************/

/**
*LOCAL SERVER
*@desc This task is the responsible to run a local server in order to work locally
*/

gulp.task('webserver',function() {
    connect.server({
      root: 'www',
      livereload: true
    });
});

/**
*SASS TO CSS
*@desc This task is te responsible to compile Sass files to Css files
*/

gulp.task('sass',function(){
  return gulp.src(paths.appSassInput)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.appSassOutput));
});


/**
*LOCAL SERVER
*@desc This is the defaul task
*/

gulp.task('default', ['sass','webserver']);
