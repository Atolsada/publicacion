const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');

const plugins = [
    cssnext()
]


//nombre, funcion
gulp.task('hacerAlgo',()=>{
    //de donde lo cojemos(recursos)
    gulp.src()
    //const require
    .pipe()
    //destino
    .pipe()
})

gulp.task('postcss', () => 
    gulp.src('src/style.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist'))
)



gulp.task('css-autoprefixer', () =>
    gulp.src('src/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
);

gulp.task('watch-css', () =>
    gulp.watch('src/*.css', ['css-autoprefixer', 'postcss'])
)

gulp.task('build', ['css-autoprefixer', 'postcss']);

gulp.task('default', ['css-autoprefixer', 'postcss', 'watch-css']);