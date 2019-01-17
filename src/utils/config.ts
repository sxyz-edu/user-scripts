/**
 * Config window
 */

import './config.scss';

interface ConfigType {
  'text': string;
  'color': string;
  'number': number;
  'checkbox': boolean;
}

interface ConfigItem<K extends keyof ConfigType> {
  type: K;
  key: string;
  value: ConfigType[K];
}

interface ConfigElement<K extends keyof ConfigType> {
  config: ConfigItem<K>;
  input: HTMLInputElement;
}

declare type SaveEvent = Map<string, ConfigType[keyof ConfigType]>;

export default class ConfigWindow {
  _configs: ConfigElement<keyof ConfigType>[];

  constructor (configs: ConfigItem<any>[], onsave: (e: SaveEvent) => void) {

    let data: Map<string, ConfigType[keyof ConfigType]>;
    try {
      const res = localStorage.getItem('config');
      if (res) {
        data = new Map(JSON.parse(res));
      } else {
        data = new Map();
      }
    } catch (e) {
      data = new Map();
    }

    const emitsave = () => {
      const data = new Map();
      this._configs.forEach(({ config, input }) => {
        data.set(config.key, config.type === 'checkbox' ? input.checked : input.value);
      });
      onsave(data);
    }

    const container = document.createElement('div');
    container.classList.add('config-container');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    const close = document.createElement('div');
    close.classList.add('close');
    menu.appendChild(close);
    container.appendChild(menu);

    this._configs = configs.map((config) => {

      const div = document.createElement('div');
      div.classList.add('item');
      const defaultValue = data.has(config.key) && data.get(config.key) || config.value;

      const span = document.createElement('span');
      span.innerText = config.key;
      div.appendChild(span);

      const input = document.createElement('input');
      switch (config.type) {
      case 'text': {
        input.setAttribute('type', 'text');
        input.classList.add('am-form-field');
        // TODO...
        input.value = defaultValue;
        break;
      }
      case 'color': {
        input.setAttribute('type', 'color');
        input.value = defaultValue;
        break;
      }
      case 'number': {
        input.setAttribute('type', 'number');
        input.value = defaultValue;
        break;
      }
      case 'checkbox': {
        input.setAttribute('type', 'checkbox');
        input.checked = defaultValue;
        break;
      }
      }
      div.appendChild(input);
      container.appendChild(div);

      return { config, input };
    });

    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(container);
    });

    emitsave();

  }

}
