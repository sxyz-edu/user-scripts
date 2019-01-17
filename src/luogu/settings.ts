import ConfigWindow from '../utils/config';

const configs = [];

configs.push({
  'key': 'Background Image URL'
  , 'type': 'text'
  , 'value': 'https://gallery.swwind.me/2018-12/15.jpg'
});
configs.push({
  'key': 'Use Custom Theme'
  , 'type': 'checkbox'
  , 'value': true
});

new ConfigWindow(configs, (e) => {
  console.log(e);
});
