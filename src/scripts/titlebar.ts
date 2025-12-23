import { html, $ } from './util.ts';
import { getCurrentWindow } from '@tauri-apps/api/window';

// HTML
function template() { 
    return html`
        <div id="titlebar">
            <div class="draggable" data-tauri-drag-region>
                <span id="app-title">Torrin</span>
            </div>
            <div id="window-controls">
                <button id="minimize">-</button>
                <button id="maximize">□</button>
                <button id="close">✕</button>
            </div>
        </div>
    `
}

// CSS
function styles() {
    return html`
        <style>
            #titlebar {
                height: var(--titlebar-height);
                display: flex;
                background-color: pink;
            }

            #titlebar .draggable {
                flex: 1;
                display: flex;
                align-items: center;
            }

            #titlebar #window-controls {
                padding: 4px;
                display: flex;
                gap: 4px;
                margin-right: 2px;
            }

            #titlebar #window-controls button {
                aspect-ratio: 1 / 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            /* #titlebar #window-controls #minimize,
            #titlebar #window-controls #maximize {
                font-size: 16px;
            } */

            /* 👇🏻 Need it so that maximize innerText is at same height as others */
            /* #titlebar #window-controls #maximize {
                padding-bottom: 4px; 
            } */
        </style>
    `
}

// JS
export class TitleBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        // Attach HTML and CSS (non-scoped)
        this.innerHTML = template() + styles()
        // Set up event listeners
        this.setup_event_listeners()
    }

    setup_event_listeners() {
        const appWindow = getCurrentWindow();

        // Window Controls min/max/close
        $('#minimize')!.addEventListener('click', () => {
            appWindow.minimize()
        })
        $('#maximize')!.addEventListener('click', () => {
            appWindow.toggleMaximize()
        })
        $('#close')!.addEventListener('click', () => {
            appWindow.close()
        })
    }
}

// Export
customElements.define('title-bar', TitleBar);