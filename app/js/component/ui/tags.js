'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
    function tags() {


        this.defaultAttrs({
        toggleIndicator: true,
        tagSelector: '.tag',
        });
      
        this.handleClick=function(event) {
         //event.stopPropagation();
         event.preventDefault();
         console.log('Click Event**');
         $(this).toggleClass( 'label-info');
         $(this).toggleClass( 'label-danger');
        };

        this.after('initialize', function() {

        this.$node.tagsinput();

        var toggleIndicator = this.attr.toggleIndicator;

          if(toggleIndicator === true) {  

            this.on('click', {
             'tagSelector': this.handleClick
           });   	     

          }

          else {  	 
        	 	
          }
            
        });
    }
});