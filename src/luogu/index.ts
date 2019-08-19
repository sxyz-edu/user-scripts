/**
 * entry point
 */
import '../utils/compare.scss';

import autoLoad from './autoLoad';
import compare from './compare';
import search from './search';

const bind = (e: any) => {
  document.addEventListener('DOMContentLoaded', e as EventListener);
};

// loading sequence
bind(autoLoad);
bind(compare);
bind(search);
