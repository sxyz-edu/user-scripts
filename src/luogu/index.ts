/**
 * entry point
 */

import './settings';

import autoLoad from './autoLoad';
import compare from './compare';
import mark from './mark';
import search from './search';

const bind = (e: any) => {
  document.addEventListener('DOMContentLoaded', <EventListener> e);
}

bind(autoLoad);
bind(compare);
bind(mark);
bind(search);
