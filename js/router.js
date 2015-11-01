import Backbone from 'backbone';
import $ from 'jquery';

import ContactsCollection from './ContactsCollection';

import contactTemplate from './views/contact';
import contactsTemplate from './views/contacts';
import AddContact from './views/addContact';

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
 
    let contact = this.contacts.get(contactId);

    contact = this.contacts.add({objectId: contactId});
    let router = this;
    contact.fetch().then(function(){
      router.$el.html( contactTemplate( contact.toJSON() ));
    })
  },

  showAddContact: function(){
    this.$el.html(AddContact);
    $('.submit').on('click', (event) => {
      let newContact ={
        Name: $('input[class="Name"]').val(),
        PhoneNumber: $('input[class="Phone"]').val(),
        Email: $('input[class="Email"]').val(),
        Location: $('input[class="Location"]').val()
      };
      this.contacts.create(newContact);
      this.navigate('');
      this.showContacts();
      return false;
    });
  },

  start: function(){
    Backbone.history.start();
  }

});

export default Router;