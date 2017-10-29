/////////////////////////////////////////////////
//Requiers
/////////////////////////////////////////////////

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    css_minify = require("gulp-clean-css");

/////////////////////////////////////////////////
//  Tasks
/////////////////////////////////////////////////

gulp.task('jscripts',function()
{
     gulp.src(["node_modules/core-js/**/*.js","!node_modules/core-js/**/*.min.js"])
     .pipe(rename({suffix:'.min'}))
     .pipe(uglify())
     .pipe(gulp.dest('node_modules/core-js'));

});

gulp.task('changesass',function()
{
      gulp.src("src/app/**/*.scss")
      .pipe(sass())
      .pipe(css_minify())
       .pipe(gulp.dest('src/app'));

       
}

);

/////////////////////////////////////////////////
//  Watch tasks
/////////////////////////////////////////////////

gulp.task('watch',function()
{
    gulp.watch('src/app/**/*.scss',['changesass']);
} 
);


/////////////////////////////////////////////////
//  Default tasks
/////////////////////////////////////////////////

gulp.task('default',['changesass','watch']);