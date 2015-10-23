//REQUIRED//

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

//TASK//

gulp.task('scripts',function(){
	gulp.src('app/js/**/*.js')
	.pipe(reload({stream:true}))
});

//CSS TASK

gulp.task('styles', function(){

	gulp.src('app/css/**/*.css')
	.pipe(reload({stream:true}))
});

//HTML TASK

gulp.task('html',function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}))
});



//BROWSER SYNC TASK 

gulp.task('browser-sync',function(){
	browserSync({
		server:{
			baseDir: "./app/"
		}
	});
});



//WATCHTASK

gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/css/**/*.css', ['styles']);
	gulp.watch('app/**/*.html', ['html']);
});

//DEFAULT TASK

gulp.task('default', ['scripts', 'styles', 'html', 'browser-sync', 'watch',]);


