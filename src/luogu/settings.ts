import ConfigWindow from '../utils/config';
import ControlCSS from '../utils/ccss';

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
  'key': language.thm,
  'type': 'checkbox',
  'value': true
});
configs.push({
  'key': language.bgi,
  'type': 'text',
  'value': ''
});
configs.push({
  'key': language.opc,
  'range': [0, 1],
  'step': 0.01,
  'type': 'number',
  'value': 0.75
});

const ccss = new ControlCSS(new Map());

const configWindow = new ConfigWindow('luogu', configs, (data) => {
  if (data.get(language.thm)) {
    style.use();
  } else {
    style.unuse();
  }
  ccss.set('--lg-wallpaper', `url(${<string>data.get(language.bgi)})`);
  const opacity = <number>data.get(language.opc);
  ccss.set('--lg-opacity', opacity.toString());
});

// append setting button at last
export default () => {
  const bind = () => {
    const nav = <HTMLElement>document.querySelector('nav#app-sidenav');
    const as = nav.querySelectorAll('a');
    const last = as[as.length - 1];
    if (last) {
      const a = <HTMLElement>last.cloneNode(true);
      const icon = <HTMLElement>a.querySelector('span.icon i');
      const text = <HTMLElement>a.querySelector('span.text');
      icon.className = 'fa fa-cog';
      text.innerText = '设置';

      a.addEventListener('click', () => {
        configWindow.show();
      });
      a.setAttribute('href', '#');
      nav.append(a);
    } else {
      setTimeout(bind, 500);
    }
  }
  setTimeout(bind, 500);
}
