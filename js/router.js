import Backbone from 'backbone';

import ContactsCollection from './ContactsCollection';

import homeTemplate from './views/home';
import contactsTemplate from './views/contacts';


let Router = Backbone.Router.extend({

  routes: {
    ""      : "home",
    "contacts" : "showContacts",
    "contacts/:Mark" : "showContactMark",

  }, 

  initialize: function(appElement){
    this.$el = appElement;
    this.contacts = new ContactsCollection();
  },

  home: function(){
    console.log('show home page');
    this.$el.html(homeTemplate());
  },

  showContacts: function(){
    console.log('show contacts page');

   this.contacts.fetch().then(function(){

        this.$el.html(contactsTemplate(this.contacts.toJSON()));
   }.bind(this));
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