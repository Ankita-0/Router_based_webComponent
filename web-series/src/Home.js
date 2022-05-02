import { LitElement, html, css } from 'lit';

export class Home extends LitElement {

    static get styles() {
        return css`
        div {
            color:azure;
            font-size:10vw;
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
customElements.define('web-series-home', Home);
