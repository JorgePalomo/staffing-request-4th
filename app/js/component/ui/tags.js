'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
    function tags() {


         this.defaultAttrs({
         toggleIndicator: true,       
         });

         this.changeTagColor = function(event) {
            event.preventDefault();
            $('div.bootstrap-tagsinput.tag').toggleClass( 'label-info');
            $('div.bootstrap-tagsinput.tag').toggleClass( 'label-danger');           
          };


            this.after('initialize', function() {

             this.$node.tagsinput();

             var toggleIndicator = this.attr.toggleIndicator;
              if(toggleIndicator===true){        		
              this.on('click', this.changeTagColor);             
              }
              else{  	 
        	 	
        	  }
            
             });
    }

});