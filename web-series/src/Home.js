import '@lion/tabs/define';
import { LitElement, html, css } from 'lit';

export class Home extends LitElement {

    static get styles() {
        return css`
        div {
            background-color:blueviolet;
            color:azure;
            height:30px;
        }
        `;
    }

    render () {
        return html`
        <div>
        Web series
        </div>
        `;  
    }
}        
customElements.define('web-series-home', Webseries);
