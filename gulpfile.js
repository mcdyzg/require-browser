var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('watch', function() {

    browserSync.watch('./src/*').on('change',browserSync.reload)

    browserSync.init({
        server:{
            baseDir: "src"
        },
        open:'external'
    })
});