'use strict';

define(['flight/lib/component'], function(defineComponent) {

    // export component constructor
    return defineComponent(tags);

    

    // component definition
    function tags() {


        this.defaultAttrs({
        toggleIndicator: true,
        requiredSkillsSelector: '#requiredSkills',
        });
      
        this.handleClick=function(event) {
         //event.stopPropagation();
         event.preventDefault();
         console.log('Click Event**');
         $('.tag').toggleClass( 'label-info');
         $('.tag').toggleClass( 'label-danger');
        };

        this.after('initialize', function() {

        this.$node.tagsinput();

        var toggleIndicator = this.attr.toggleIndicator;

          if(toggleIndicator === true) {  

            this.on('click', {
             'requiredSkillsSelector': this.handleClick
           });   	     

          }

          else {  	 
        	 	
          }
            
        });
    }
});