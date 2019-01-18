import html from './html';

/**
 * Dynamic control your css global variables
 */
export default class ControlCSS {
  map: Map<string, string>;

  style: HTMLStyleElement;

  constructor (map: Map<string, string>) {
    this.map = map;
    this.style = <HTMLStyleElement> html('style');
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(this.style);
    });
    this.flush();
  }

  flush () {
    const v = Array.from(this.map).map((a) => a.join(':'))
      .join(';');
    this.style.innerHTML = `:root{${v}}`;
  }

  set (type: string, value: string) {
    this.map.set(type, value);
    this.flush();
  }
}

