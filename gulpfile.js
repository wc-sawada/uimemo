//プラグイン
var gulp = require('gulp');
var sass = require('gulp-sass');

//タスク
gulp.task('gulp-test', () =>{
	console.log('gulpテスト');
});
gulp.task('default', function () {
	return gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});