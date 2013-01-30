$.domReady(function(){  
  var Backbone = require('backbone')
  , _ = require('underscore');

  // **ListView class**: Our main app view.
  var ListView = Backbone.View.extend({    
    el: $('body'), // attaches `this.el` to an existing element.
    // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       
       this.render(); // not all views are self-rendering. This one is.
    },
    // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
    render: function(){
      var ul = $("<ul>"), li;	
      for(var i = 0; i < 5; i++) {
      	li = $("<li>hello world " + i + "</li>");
        ul.append(li);
        li.bind('click', function(e) { 
          $(this).remove();
        });
      }
      $(this.el).append(ul);
    }
  });

  // **listView instance**: Instantiate main app view.
  var listView = new ListView();      
});
