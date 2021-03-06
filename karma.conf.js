// Karma configuration
// Generated on Mon Sep 08 2014 10:37:43 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor




    // list of files / patterns to load in the browser
    files: [
        'lib/angular.min.js',
        'lib/angular-mocks.js',


        // Script files
        'src/uiThumbnailEntity.js',
        'src/module.js',
        'src/uiProductPreviewDirective.js',
        'src/uiProductPreviewThumbnailDirective.js',

        'src/tpl/*.html',
        // Test files.
        'tests/*Spec.js',


    ],

    ngHtml2JsPreprocessor: {
        stripPrefix: 'src/'
//            prependPrefix: 'served/'
    },

      preprocessors: {
          // Generate js files from HTML templates.
          'src/tpl/*.html': ['ng-html2js'],
          'src/*.js': ['coverage']
      },

    // list of files to exclude
    exclude: [
    ],

    plugins: [
        'karma-jasmine',
        'karma-ng-html2js-preprocessor',
        'karma-phantomjs-launcher',
        'karma-coverage'
    ],



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'dots'],

    coverageReporter: {
      // specify a common output directory
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
