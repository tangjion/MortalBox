'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    minifyHTML  = require('gulp-minify-html'),
    concat = require('gulp-concat');

//编译scss并添加版本号
gulp.task('sass', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(sourcemaps.write('.',{includeContent:false,sourceRoot: './src'}))
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe( gulp.dest('rev/css'));
});

//压缩CSS
gulp.task('minify-css',function () {
    gulp.src('./build/*.scss')
        .pipe(rename({suffix:".min"}))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('build'));
})


gulp.task('clear',function () {
    del(['./dist','./rev']);
})

//压缩合并js
// gulp.task('compress',function () {
//     gulp.src('./build/*.js')
//         .pipe(rename({suffix:".min"}))
//         .pipe(uglify())
//         .pipe(gulp.dest('./build'))
// })

gulp.task('default',function () {
    gulp.start('clear','sass','rev');
})

//压缩HTML并添加版本号
gulp.task('html', function () {
    return gulp.src(['rev/**/*.json', 'src/**/*.html'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                'css': 'css',
            }
        }))
        // .pipe( minifyHTML({
        //     empty:true,
        //     spare:true
        // }))
        .pipe(gulp.dest('dist'));
});

/**
 * 页面task
 */


//es6-pormise js compress
gulp.task('es6-promise', function () {
    gulp.src('./src/polyfill-es6-promise/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/polyfill-es6-promise/js'))
        // .pipe(uglify())
        // .pipe(gulp.dest('dist/polyfill-es6-promise/js'))
})


/**
 * watch task
 */

gulp.task('sass:watch', function () {
   gulp.watch('./src/**/*.scss', ['sass']);
});