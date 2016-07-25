/* jshint esnext: true, asi: true */
const _ = require('lodash');
const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
   var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');

const distPath = './dist/';
var minify = false;
var templateCache = require('gulp-angular-templatecache')

gulp.task('js', function () {
    var src = [
        './src/js/lib/_motion.js',
        './src/js/lib/_ink.js'
    ];
    var js = gulp.src(src)
        .pipe(concat('ionic.material.js'))
        .pipe(gulp.dest(distPath));

    if (minify) {
        js.pipe(uglify())
            .pipe(rename('ionic.material.min.js'))
            .pipe(gulp.dest(distPath))
    }
    return js;
});

gulp.task('serve', function(){
    return connect.server();
});


gulp.task('webpack', function(){
    var webpackConfig = require('./webpack.config.js');
    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
        sourcemaps: false
    });

    var minifiedConfig = _.cloneDeep(webpackConfig);
    if(!minifiedConfig.plugins || _.isEmpty(minifiedConfig.plugins)){
        minifiedConfig.plugins = [];
    }
    minifiedConfig.plugins.push(uglifyPlugin);
    minifiedConfig.output.filename = 'ionic.material.min.js';

    return gulp.src('src/ionic-material.js')
      .pipe(gulpWebpack(webpackConfig))
      .pipe(gulp.dest(distPath))
      .pipe(rename('ionic.material.js'))
      .pipe(gulp.src('src/ionic-material.js')) // dunno if this is needed, just getting unminified src again
      .pipe(gulpWebpack(minifiedConfig))
      .pipe(gulp.dest(distPath))
      .pipe(rename('ionic.material.min.js'));
});

gulp.task('styles', function () {
    var src = './src/scss/index.scss';

    var scss = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('ionic.material.css'));


    if (minify) {
        scss.pipe(gulp.dest(distPath)).pipe(rename({
            suffix: '.min'
        }))
            .pipe(minifycss())
            .pipe(rename('ionic.material.min.css'))
            .pipe(sourcemaps.write()).pipe(gulp.dest(distPath));
    } else {
        scss.pipe(sourcemaps.write()).pipe(gulp.dest(distPath));
    }

    return scss;
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['./*.js', '!./src/js/'], ['webpack']);
    gulp.watch('./*.scss', ['styles']);
});

gulp.task('build', function () {
    minify = true;
    return gulp.start(['webpack', 'styles']);
})

gulp.task('templatecache', function() {

 
  gulp.src('./www/templates/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('./www/public/templates.js'))
    
  // the result is a file with all templates inside 
  // registered on module "templates" with the 
  // path being transformed into "partials/**/*.html" 
  // and saved to "public/templates.js" 
})


gulp.task('concat', function() {
  return gulp.src('./www//js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./www/dist/'));
});

gulp.task('compress', function() {
  return gulp.src('./www/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./www/min/'));
});

  gulp.task('ng_annotate', function (done) {
    gulp.src('./www/js/*.js')
      .pipe(ngAnnotate({single_quotes: true}))
      .pipe(gulp.dest('./www/dist/dist_js/app'))
      .on('end', done);
  });

  
gulp.task('default', ['webpack', 'styles', 'watch' , 'templatecache','ng_annotate'], function () {
});
