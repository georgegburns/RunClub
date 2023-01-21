import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1> Settings</h1>
            <div class="settings-container" onload="checkMode()">
                <p class="settings-label">Dark Mode:<i class="toggle fa-solid fa-toggle-on" id="onToggle" onClick="toggleOn()"></i></p>
                
            </div>
            <br>
            <p>
                <a href="/" data-link>Back to Dashboard...</a>.
            </p>
        `;        
    }
}