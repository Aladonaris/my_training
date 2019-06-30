var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () { //Создали такс
    return gulp.src('app/sass/style.sass') //указали какой файл берем
        .pipe(sass()) //какую функциювызываем
        .pipe(gulp.dest('app/css')) //куда записываем файл
        .pipe(browserSync.reload({ stream: true }))
});
//чтоб выйти из watch нужно нажать ctrl+c 2 раза

gulp.task('browserSync', function () { //установили Browser-Sync
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.series('sass')); //следим за всеми файлами sass
    // в директории шаблона, в квадратных скобках массив тасков, которые будем выполнять
});

