// ==UserScript==
// @name         krunker nametags
// @author       AnonHexo
// @match        *://krunker.io/*
// @run-at       document-start
// @grant        none
// @version      2.3.5
// @require      http://code.jquery.com/jquery-3.2.1.slim.min.js
// @require      http://code.jquery.com/jquery-latest.js
// @noframes
// ==/UserScript==
/* eslint-disable dot-notation */
  (function() {
    let initialize = function(data) {
        let regex = /if\(!\w+\['(\w+)']\)continue/;
        let result = regex.exec(data);
        if (result) {
            const inView = result[1];
            const push = Array.prototype.push;
            Array.prototype.push = function(...args) {
                push.apply(this, args);
                if (args[0] instanceof Object && args[0].isPlayer) {
                    Object.defineProperty(args[0], inView, {value: true, configurable: false});
                }
            }
        }
    }

    const decode = window.TextDecoder.prototype.decode;
    window.TextDecoder.prototype.decode = function(...args) {
        let data = decode.apply(this, args);
        if (data.length > 1050000) { //1050000 ideal val
            console.log(data);
            initialize(data);
        }
        return data;
    }
})();
