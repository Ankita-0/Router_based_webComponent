import { LitElement, html, css } from 'lit';

export class Home extends LitElement {

    static get styles() {
        return css`
        div {
            color:azure;
            font-size:10vw;
            text-align: center;
            text-shadow: 3px 3px 5px rgb(0, 255, 200);
        }
        .home_page {
            text-align: center;
            font-size:3vw;
            color: blueviolet;
            text-shadow: 1px 1px 2px black;
        }
        `;
    }

    render () {
        return html`
        <div>
        Web series
        </div>
        <p class=home_page>
            <b> Click on form and add the details of your favourite web series <b><br>
            <b> Click on Overview to view details of all the added webseries <b>
        </p>
        `;  
    }
}        
customElements.define('web-series-home', Home);
