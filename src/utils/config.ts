/**
 * Config window
 */

import './config.scss';
import html from './html';

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
  range?: Array<number>;
  step?: number;
}

interface ConfigElement<K extends keyof ConfigType> {
  config: ConfigItem<K>;
  input: HTMLInputElement;
}

declare type SaveEvent = Map<string, ConfigType[keyof ConfigType]>;

export default class ConfigWindow {
  configs: ConfigElement<keyof ConfigType>[];

  container: HTMLElement;

  onsave: (e: SaveEvent) => void;

  constructor (configs: ConfigItem<any>[], onsave: (e: SaveEvent) => void) {
    this.onsave = onsave;

    let data: Map<string, ConfigType[keyof ConfigType]> = new Map();
    try {
      const res = localStorage.getItem('config');
      if (res) {
        data = new Map(JSON.parse(res));
      }
    } catch (e) {
      data = new Map();
    }

    this.container = html('div.config-container');

    const menu = html('div.menu');
    const title = html('span 个性化');
    menu.appendChild(title);
    const close = html('div.close');
    close.addEventListener('click', () => {
      this.hide();
    });
    menu.appendChild(close);
    this.container.appendChild(menu);

    const content = html('div.content');

    this.configs = configs.map((config) => {

      const div = html('div.item');
      const defaultValue = data.has(config.key)
        ? data.get(config.key)
        : config.value;

      const span = html(`span ${config.key}`);
      div.appendChild(span);

      const input = <HTMLInputElement> html('input');
      switch (config.type) {
      case 'text': {
        input.type = 'text';
        input.classList.add('am-form-field');
        input.value = defaultValue;
        break;
      }
      case 'color': {
        input.type = 'color';
        input.classList.add('am-form-field');
        input.value = defaultValue;
        break;
      }
      case 'number': {
        input.type = 'number';
        input.classList.add('am-form-field');
        input.value = defaultValue;
        if (config.range) {
          input.min = String(config.range[0]);
          input.max = String(config.range[1]);
        }
        if (config.step) {
          input.step = String(config.step);
        }
        break;
      }
      case 'checkbox': {
        input.type = 'checkbox';
        input.checked = defaultValue;
        break;
      }
      default: {
        throw new Error('Unexpected Config Type');
      }
      }
      div.appendChild(input);
      content.appendChild(div);

      return { config, input };
    });

    this.container.appendChild(content);

    const buttonset = html('div.buttonset');
    const confirmButton = html('div.button.confirm 确定');
    confirmButton.addEventListener('click', () => {
      this.emitsave(false);
      this.hide();
    });
    const cancelButton = html('div.button.cancel 取消');
    cancelButton.addEventListener('click', () => {
      this.hide();
    });
    buttonset.appendChild(cancelButton);
    buttonset.appendChild(confirmButton);
    this.container.appendChild(buttonset);

    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(this.container);
    });

    this.emitsave(true);

  }

  emitsave (primary: boolean): void {
    const data = new Map();
    this.configs.forEach(({ config, input }) => {
      data.set(
        config.key,
        config.type === 'checkbox'
          ? input.checked
          : input.value
      );
    });
    localStorage.setItem('config', JSON.stringify(Array.from(data)));
    data.set('primary', primary);
    this.onsave(data);
  }

  show (): void {
    this.container.classList.add('open');
  }

  hide (): void {
    this.container.classList.remove('open');
  }

}
