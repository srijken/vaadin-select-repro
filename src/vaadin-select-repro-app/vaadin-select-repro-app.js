import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './test-element';

/**
 * @customElement
 * @polymer
 */
class VaadinSelectReproApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <template is="dom-if" if="[[_test]]" restamp>
        <test-element></test-element>
      </template>
    `;
  }
  static get properties() {
    return {
      _test: {
        type: Boolean,
        value: true
      }
    };
  }
}

window.customElements.define('vaadin-select-repro-app', VaadinSelectReproApp);
