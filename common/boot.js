/**
 * @license
 * Copyright 2014 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Load the correct language pack and code bundle.
 * @author blocklygames@neil.fraser.name (Neil Fraser)
 */
'use strict';


(function() {
  // Application path.
  var appName = 'index';

  var lang = 'en';
  window['BlocklyGamesLang'] = lang;
  window['BlocklyGamesLanguages'] = [lang];

  // Load the chosen language pack.
  var script = document.createElement('script');
  script.src = 'lang/' + lang + '.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);
  // Load the code bundle for the chosen game.
  var script = document.createElement('script');
  script.src = appName + '/generated/compressed.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();
