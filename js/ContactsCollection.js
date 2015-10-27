import Backbone from 'backbone';
import ContactModel from './ContactModel';

let ContactsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Contacts',
  model: ContactModel,

  parse: function(data) {
    return data.results;
  }

})

export default ContactsCollection;