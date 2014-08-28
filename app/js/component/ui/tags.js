'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    // component definition
    function tags() {
        this.after('initialize', function() {
            $('input').tagsinput({
  			tagClass: 'big'
			});
        });
    }

});