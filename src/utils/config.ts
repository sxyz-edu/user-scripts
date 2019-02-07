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

  constructor(onlineJudge: string, configs: ConfigItem<any>[], onsave: (e: SaveEvent) => void) {
    this.onsave = onsave;

    // load data
    let data: Map<string, ConfigType[keyof ConfigType]> = new Map();
    try {
      const res = localStorage.getItem('config');
      if (res) {
        data = new Map(JSON.parse(res));
      }
    } catch (e) {
      data = new Map();
    }

    // create the config window
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
      const defaultValue = data.has(config.key) ? data.get(config.key) : config.value;

      const span = html(`span ${config.key}`);
      div.appendChild(span);

      const input = <HTMLInputElement>html('input');
      switch (config.type) {
        case 'text': {
          input.type = 'text';
          switch (onlineJudge) { // different input-box styles for different online judges
            case 'luogu': {
              input.classList.add('am-form-field');
              break;
            }
            default: {
              throw new Error('Unknown Online Judge');
            }
          }
          input.value = defaultValue;
          break;
        }
        case 'color': {
          input.type = 'color';
          switch (onlineJudge) { // different input-box styles for different online judges
            case 'luogu': {
              input.classList.add('am-form-field');
              break;
            }
            default: {
              throw new Error('Unknown Online Judge');
            }
          }
          input.value = defaultValue;
          break;
        }
        case 'number': {
          input.type = 'number';
          switch (onlineJudge) { // different input-box styles for different online judges
            case 'luogu': {
              input.classList.add('am-form-field');
              break;
            }
            default: {
              throw new Error('Unknown Online Judge');
            }
          }
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
    const confirmButton = html('div.button 确定');
    const cancelButton = html('div.button 取消');
    // different button styles for different online judges
    switch (onlineJudge) {
      case 'luogu': {
        confirmButton.classList.add('am-btn', 'am-btn-danger', 'am-btn-sm');
        cancelButton.classList.add('am-btn', 'am-btn-primary', 'am-btn-sm');
        break;
      }
      default: {
        throw new Error('Unknown Online Judge');
      }
    }
    // click events
    confirmButton.addEventListener('click', () => {
      this.emitsave(false);
      this.hide();
    });
    cancelButton.addEventListener('click', () => {
      this.hide();
    });
    // insert the buttons
    buttonset.appendChild(cancelButton);
    buttonset.appendChild(confirmButton);
    this.container.appendChild(buttonset);

    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(this.container);
    });

    this.emitsave(true);

  }

  // save settings
  emitsave(primary: boolean): void {
    const data = new Map();
    this.configs.forEach(({ config, input }) => {
      data.set(
        config.key,
        config.type === 'checkbox' ? input.checked : input.value
      );
    });
    localStorage.setItem('config', JSON.stringify(Array.from(data)));
    data.set('primary', primary);
    this.onsave(data);
  }

  // show the config window
  show(): void {
    this.container.classList.add('open');
  }

  // hide the config window
  hide(): void {
    this.container.classList.remove('open');
  }

}

/* eslint multiline-ternary: off */
