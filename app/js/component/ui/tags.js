'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
    function tags() {


         this.defaultAttrs({
         toggleIndicator: true,       
         });

      
            this.handleClick=function(event) {
            //event.stopPropagation();
            event.preventDefault();
            console.log('Click Event**');
            $('form-group.bootstrap-tagsinput.tag').toggleClass( 'label-info');
            $('form-group.bootstrap-tagsinput.tag').toggleClass( 'label-danger');
            };

            this.after('initialize', function() {

             this.$node.tagsinput();

             var toggleIndicator = this.attr.toggleIndicator;
              if(toggleIndicator===true){     

               this.on('click', this.handleClick);   	                                    
               }
              else {  	 
        	 	
        	     }
            
             });
    }

});