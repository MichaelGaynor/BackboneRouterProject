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

console.log('Howdy, ya World you');
