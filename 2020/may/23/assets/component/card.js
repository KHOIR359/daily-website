class Card extends HTMLElement {

    connectedCallback() {
        this.img = this.getAttribute("img") || '';
        this.title = this.getAttribute("title") || '';
        this.desc = this.getAttribute("desc") || '';
        this.footer = this.getAttribute("footer") || '';

        this.innerHTML = `
            <div class="card">
                <div class="card-image"><img src="assets/img/${this.img}" alt="oir-card img"></div>
                <div class="card-body">
                    <a href="${this.title}" class="card-title">
                        ${this.title}
                    </a>
                    <p class="card-desc">${this.desc}</p>
                </div>
                <div class="card-footer">${this.footer}</div>
            </div>
                        `;
    }
}

customElements.define("oir-card", Card);