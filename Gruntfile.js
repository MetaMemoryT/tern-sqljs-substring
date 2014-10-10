module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    exec: {
      create_js: 'sh node_modules/coffee-utils/coffee2js sql.js/coffee/api.coffee && mv sql.js/coffee/api.js .',
      extract_doc: 'node node_modules/tern/bin/condense --disable-doc-comment --name "sqljs-substring" --plugin node_modules/tern-closure/closure.js --def helpers.json api.js > sqljs-substring.json'
    }
  });

  grunt.registerTask('default', [ 'exec' ]);

}