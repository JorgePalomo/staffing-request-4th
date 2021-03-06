'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
        function tags() {

        this.defaultAttrs({
            toggleIndicator: false,
            tagSelector: '.tag'
        });

        this.toggleColor = function(event) {

            $(event.target).toggleClass('label-info');
            $(event.target).toggleClass('label-danger');
           

            return false;
        };

        this.after('initialize', function() { 
            

             var input=this.$node.children('input'); 
             
             input.tagsinput();
            
             var toggleIndicator = this.attr.toggleIndicator;

            if (toggleIndicator === true) {
                var tagsInput = this.$node.children('.bootstrap-tagsinput');

                this.on(tagsInput, 'click', {
                    tagSelector: this.toggleColor
                });
            }
        });
    }

});