import Backbone from 'backbone';

let ContactModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/Contacts',
  idAttribute: 'objectId'
});

export default ContactModel;