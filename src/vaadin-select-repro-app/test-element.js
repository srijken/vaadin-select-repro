import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-select/theme/material/vaadin-select'
import '@vaadin/vaadin-list-box/theme/material/vaadin-list-box'
/**
 * @customElement
 * @polymer
 */
class TestElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    <vaadin-select  label="[[localize('selectStatus')]]">
        <template>
            <vaadin-list-box>
                <template is="dom-repeat" items="[[types]]">
                    <vaadin-item value$="[[item]]">[[item]]</vaadin-item>
                </template>
            </vaadin-list-box>
        </template>
    </vaadin-select>
    `;
  }
  static get properties() {
    return {
      types: {
        type: Array,
        value: () => ["a", "b", "c"]
      }
    };
  }
}

window.customElements.define('test-element', TestElement);
