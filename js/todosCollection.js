import Backbone from 'backbone';

let TodosCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Contacts',

  parse: function(data) {
    return data.results;
  }

})

export default TodosCollection;