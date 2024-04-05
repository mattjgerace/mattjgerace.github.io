import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
    <p>Powered by Lit and Hugo!</p>
    `;
  }
}