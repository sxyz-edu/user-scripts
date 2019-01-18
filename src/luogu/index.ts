/**
 * entry point
 */
import autoLoad from './autoLoad';
import compare from './compare';
import mark from './mark';
import search from './search';
import settings from './settings';

const bind = (e: any) => {
  document.addEventListener('DOMContentLoaded', <EventListener> e);
}

bind(settings);
bind(autoLoad);
bind(compare);
bind(mark);
bind(search);
