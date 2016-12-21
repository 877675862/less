var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var rev = require('gulp-rev');
var autoprefixer = require('gulp-autoprefixer');
//
gulp.task('css',function(){
  gulp.src('scss/entry.less')
    .pipe(less())
    .pipe(gulp.dest('style/css'))
    .pipe(connect.reload());
});

gulp.task('server',function(){
  connect.server({
    name:'github',
    port:8080,
    livereload:true
  })
});

gulp.task('html',function(){
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});
gulp.task('js',function(){
  gulp.src('style/js/*.js')
    .pipe(connect.reload());
});

gulp.task('watcher',function(){
  gulp.watch('scss/*.less',['css']);
  gulp.watch('style/js/*.js',['js']);
  gulp.watch('./**/*.html',['html']);
});

gulp.task('start',['server','watcher']);
