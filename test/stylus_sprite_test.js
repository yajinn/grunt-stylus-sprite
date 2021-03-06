/*
* Copyright 2013 Sahibinden Bilgi Teknolojileri Pazarlama ve Ticaret A.Ş.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var grunt = require('grunt');

exports.stylus_sprite = {
  default_options: function(test) {
    var actual = grunt.file.read('tmp/test.css');
    var expected = grunt.file.read('test/expected/test.css');
    test.equal(actual, expected, 'should be equal.');

    test.done();
  },
};
