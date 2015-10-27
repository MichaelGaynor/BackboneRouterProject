import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';

import './ajax_setup';

import TodosCollection from './todosCollection';
// window.TodosCollection = TodosCollection;

var appElement = $('.app');

var router = new Router(appElement);
router.start();

window.router = router;

console.log('Howdy, ya World you');
