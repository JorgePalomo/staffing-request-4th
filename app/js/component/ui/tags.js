'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
    function tags() {


        this.defaultAttrs({

        toggleIndicator: true,
        tagSelector: '.bootstrap-tagsinput',

        });
     
        this.handleClick=function(event) {
        
         $(event.target).children('.tag').toggleClass( 'label-info');
         $(event.target).children('.tag').toggleClass( 'label-danger');

        };

        this.after('initialize', function() {

          this.$node.children('#requiredSkills').tagsinput();

          var toggleIndicator = this.attr.toggleIndicator;      
       
          if(toggleIndicator === true) {  
            
            this.on('click', {
            'tagSelector' : this.handleClick
            });    

          }

          else {  	 
        	 	
          }
            
        });
    }
});