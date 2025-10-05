export class TabManager {
    constructor() {
        this.tabs = document.querySelectorAll('.tab');
        this.forms = document.querySelectorAll('.form-section');
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.switchTab(tab.getAttribute('data-tab'));
            });
        });
    }

    switchTab(targetTab) {
        this.tabs.forEach(t => t.classList.remove('active'));
        this.forms.forEach(f => f.classList.remove('active'));
        
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}Form`).classList.add('active');
    }
}