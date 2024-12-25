const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Compile SCSS
function styles() {
    return gulp.src('./css/style.scss')
        .pipe(sass().on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        }))
        .pipe(postcss([
            autoprefixer({ overrideBrowserslist: ['last 2 versions'] })
        ]))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

// Start local server
function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // Watch for file changes with console logging
    gulp.watch('./css/style.scss', styles)
        .on('change', function(path) {
            console.log(`File ${path} was changed`);
        });
    
    gulp.watch('./**/*.html')
        .on('change', browserSync.reload);
    
    gulp.watch('./js/**/*.js')
        .on('change', browserSync.reload);
}

// Define tasks
exports.styles = styles;
exports.serve = serve;
exports.default = serve;