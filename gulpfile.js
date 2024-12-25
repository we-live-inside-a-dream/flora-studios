const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
    styles: {
        src: 'public/css/**/*.scss',
        dest: 'public/css'
    },
    html: {
        src: 'public/pages/**/*.html'
    }
};

// Compile SCSS into CSS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Watch files and reload browser on changes
function watch() {
    browserSync.init({
        server: {
            baseDir: './public',
            index: '/pages/index.html'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Define complex tasks
const build = gulp.series(styles);
const dev = gulp.series(build, watch);

// Export tasks
exports.styles = styles;
exports.watch = watch;
exports.build = build;
exports.default = dev;