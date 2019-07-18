import html from './html';

/**
 * Dynamic control your CSS global variables
 */
export default class ControlCSS {
  public map: Map<string, string>;

  public style: HTMLStyleElement;

  public constructor(map: Map<string, string>) {
    this.map = map;
    this.style = html('style') as HTMLStyleElement;
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(this.style);
    });
    this.flush();
  }

  // flush to make the settings take effect
  public flush() {
    const v = Array.from(this.map)
      .map((a) => a.join(':'))
      .join(';');
    this.style.innerHTML = `:root{${v}}`;
  }

  public set(type: string, value: string) {
    this.map.set(type, value);
    this.flush();
  }
}
