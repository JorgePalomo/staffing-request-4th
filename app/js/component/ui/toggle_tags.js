'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(toggletags);

    // component definition
    function toggletags() {
        this.after('initialize', function() {
           this.$node.toggle(function() {
           this.$node.tagsinput('add', 'Hola');
           }, function() {
           this.$node.tagsinput('add', 'Mundo');
           });
        });
    }

});