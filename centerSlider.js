/*!
 * jQuery plugin to create a centered slideshow
 *
 * Version: 1.0 (14-OCT-2015)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($) {
"use strict";

    $.fn.centerSlider = function(options) {
        return this.each(function() {
            options = options || {};
    
    		var $container = $(this);
    
    		// merge settings and options
            $.extend($.fn.centerSlider.defaults, options);
    
            
    
    };
    
    $.fn.centerSlider.defaults = {
        after:         null,
        before:        null,
        delay:         0,
        fit:           0,
        next:          null,
        prev:          null,
        speed:         1000,
        timeout:       4000
    };

})(jQuery);