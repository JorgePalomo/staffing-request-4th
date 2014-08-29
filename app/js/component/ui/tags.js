'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    // component definition
    function tags() {
        

        this.oninput = function(event) {
        event.stopPropagation();
        return this.$node.attr('data-role=tagsinput');
        };

    // initialize
       this.after('initialize', function() {
      this.on('input', this.oninput);
      });
    }

});