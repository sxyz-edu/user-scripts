import ConfigWindow from '../utils/config';
import ControlCSS from '../utils/ccss';

import html from '../utils/html';
import style from './style.useable.scss';


const languages = {
  'zh_CN': {
    'bgi': '背景图片',
    'opc': '卡片透明度',
    'thm': '使用特色主题'
  }
}

const language = languages.zh_CN;

const configs = [];

configs.push({
  'key': language.bgi,
  'type': 'text',
  'value': 'https://gallery.swwind.me/2018-08/12.jpg'
});
configs.push({
  'key': language.thm,
  'type': 'checkbox',
  'value': true
});
configs.push({
  'key': language.opc,
  'type': 'number',
  'value': 0.75
});

const ccss = new ControlCSS(new Map());

const configWindow = new ConfigWindow(configs, (data) => {
  if (data.get(language.thm)) {
    style.use();
  } else {
    style.unuse();
  }
  ccss.set('--lg-wallpaper', `url(${<string> data.get(language.bgi)})`);
  const opacity = <number> data.get(language.opc);
  ccss.set('--lg-opacity', opacity.toString());
});

export default () => {
  const a = html('a.icon-btn.color-none');
  const i = html('i.fas.fa-cog');
  a.appendChild(i);
  a.addEventListener('click', () => {
    configWindow.show();
  });

  const call = () => {
    const nav = document.querySelector('.user-nav');
    if (nav) {
      const as = nav.querySelectorAll('a.icon-btn');
      nav.insertBefore(a, as[1].nextElementSibling);
    } else {
      setTimeout(call, 500);
    }
  }
  setTimeout(call, 500);
}
