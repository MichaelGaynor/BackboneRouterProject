import Backbone from 'backbone';
import $ from 'jquery';

import ContactsCollection from './ContactsCollection';

import contactTemplate from './views/contact';
import contactsTemplate from './views/contacts';
import AddContact from './views/AddContact';

import ContactModel from './ContactModel';

let Router = Backbone.Router.extend({

  routes: {
    ""                   : "showContacts",
    "contacts/:objectId" : "showContact",
    "AddContact"         : "showAddContact"

  }, 

  initialize: function(appElement){
    this.$el = appElement;
    this.contacts = new ContactsCollection();

    let router = this;

    this.$el.on('click', '.contactListItem', function(event) {
      let $li = $(event.currentTarget);
      var contactId = $li.data('contact-id');
      console.log('show contactID', contactId);
      router.navigate(`contacts/${contactId}`);
      router.showContact(contactId);
    });

    this.$el.on('click', '.Contacts', function(event){
      let $li = $(event.currentTarget);
      router.navigate('');
      router.showContacts();
    });

    this.$el.on('click', '.addContact', function(event){
      let $h3 = $(event.currentTarget);
      router.navigate('AddContact');
      router.showAddContact();
    });
  },


  showContacts: function(){

   this.contacts.fetch().then(function(){

        this.$el.html(contactsTemplate(this.contacts.toJSON()));
   }.bind(this));
  },

  showContact: function(contactId){
   // this.contacts.fetch().then(function(){

   //      this.$el.html(contactTemplate(this.contacts.toJSON()));
   // }.bind(this));


    let contact = this.contacts.get(contactId);

    contact = this.contacts.add({objectId: contactId});
    let router = this;
    contact.fetch().then(function(){
      router.$el.html( contactTemplate( contact.toJSON() ));
    })
  },

  showAddContact: function(){
    this.$el.html(AddContact);
  },

  start: function(){
    Backbone.history.start();
  }

});

export default Router;