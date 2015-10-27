import Backbone from 'backbone';

import TodosCollection from './todosCollection';

import homeTemplate from './views/home';
import todosTemplate from './views/todos';


let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "todos" : "showTodos",
    "todos/:id" : "showIndividualTodo",
    "about" : "showAbout"
  }, 

  initialize: function(appElement){
    this.$el = appElement;
    this.todos = new TodosCollection();
  },

  home: function(){
    console.log('show home page');
    this.$el.html(homeTemplate());
  },

  showTodos: function(){
    console.log('show todo page');

   this.todos.fetch().then(function(){

        this.$el.html(todosTemplate(this.todos.toJSON()));
   }.bind(this));
  },

  showIndividualTodo: function(){
    console.log('Individual')
  },

  showAbout: function(){
    console.log('show about page');
    this.$el.html('I already said it was coming soon');
  },

  start: function(){
    Backbone.history.start();
  }

});

export default Router;