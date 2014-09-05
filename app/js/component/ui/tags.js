'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
    function tags() {


    	 this.defaultAttrs({
         toggleIndicator: true,
         tagSelector: '.bootstrap-tagsinput .tag'
         });

        
          this.changeTagColor = function(event) {
            event.preventDefault();            
            $('tagSelector').toggleClass( 'label-info');
            $('tagSelector').toggleClass( 'label-danger');           
        };


        this.after('initialize', function() {

          	
          	this.$node.tagsinput();

          	var toggleIndicator = this.attr.toggleIndicator;

        	if(toggleIndicator===true){
        		
        	 this.on('click', {
             'tagSelector': this.changeTagColor,
            
             });
             
        	}
        	else{
        	 
        	 	
        	}
            
        });
    }

});