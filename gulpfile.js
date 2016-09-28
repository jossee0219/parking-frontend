/******************************/
/*        VARIABLES           */
/******************************/
var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var paths = {
  appSassInput: ['www/app/core/theme/app.scss'],
  appSassOutput: 'www/app/core/theme',
  appAllSass: 'www/**/**/*.scss',
  appHTMLInput: [['www/*.html','www/**/**/*.html'],
  appCssOutput: 'www/app/core/theme'
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

var sassOptions = {
  outputStyle: 'compressed',
  errLogToConsole: true
};

gulp.task('sass',function(){
  return gulp.src(paths.appSassInput)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest(paths.appSassOutput))
    .pipe(connect.reload());
});

/**
*HTML RELOAD
*@desc This task is the responsible to reload browser when one html has changed
/*to reaload browser.
*/

gulp.task('html',function(){
  return gulp.src(paths.appHTMLInput)
    .pipe(connect.reload());
});




/**
*WATCH METHOD
*@desc This task is the responsible to listen each change on some files in order
/*to reaload browser.
*/

gulp.task('watch',function(){
  /*watch Sass files */
  gulp.watch(paths.appAllSass,['sass']);
  /*watch Html files */
  gulp.watch(paths.appHTMLInput,['html']);
});





/**
*DEFAULT TASK
*@desc This is the defaul task
*/

gulp.task('default', ['sass','webserver','watch']);
