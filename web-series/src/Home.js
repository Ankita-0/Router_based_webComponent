import { localize, LocalizeMixin } from '@lion/localize'
import { LitElement, html, css } from 'lit';

export class Home extends LocalizeMixin(LitElement) {

    static get localizeNamespaces(){
        return [
            {
                'lang-demo': locale => import(`../translations/${locale}.js`)
            },
            ...super.localizeNamespaces
        ];
    }

    static get styles() {
        return css`
        .title {
            color:azure;
            font-size:10vw;
            text-align: center;
            text-shadow: 3px 3px 5px rgb(0, 255, 200);
            text-decoration: underline;
        }
        .home_page {
            text-align: center;
            font-size:3vw;
            color: black;
            text-shadow: 1px 1px 2px blueviolet;
        }
        `;
    }

    render () {
        return html`
        <div class=title>
        Web series 
        </div>
        <p class=home_page><br>
            <b> ${localize.msg('lang-demo:HomeScreenMsgForm')} <b><br><br>
            <b> ${localize.msg('lang-demo:HomeScreenMsgOverview')} <b>
        </p>
        <div class = "switch_lang"><br>
        ${localize.msg('lang-demo:translateTo')} :: 
            <lion-button id="en" @click = ${()=>this._switchToEnglish()}> English </lion-button>
            <lion-button id="fr" @click = ${()=>this._switchToFrench()}> French </lion-button>
            <lion-button id="de" @click = ${()=>this._switchToGerman()}> German </lion-button>
        </div>
        `;  
    }

    _switchToEnglish(){
        localize.locale = 'en-GB';
    }

    _switchToGerman(){
        localize.locale = 'de-DE';
    }

    _switchToFrench(){
        localize.locale = 'fr-FR';
    }
}        
customElements.define('web-series-home', Home);
