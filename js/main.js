import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';

import './ajax_setup';

import ContactsCollection from './ContactsCollection';

var appElement = $('.app');

var router = new Router(appElement);
router.start();

// window.router = router;

console.log('Welcome to the page! Feel free to add a contact');
