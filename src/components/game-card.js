class GameCard extends HTMLElement {
  static get observedAttributes() { return ['name', 'genre', 'note']; }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  set details(obj) { this._details = obj; this.render(); }
  get details() { return this._details; }

  render() {
    const name  = this.getAttribute('name')  ?? 'Jeu';
    const genre = this.getAttribute('genre') ?? '—';
    const note  = this.getAttribute('note')  ?? '?';
    let html = `<h3>${name}</h3><p>${genre} · note ${note}/10</p>`;
    if (this._details?.studio) html += `<small>Studio : ${this._details.studio}</small>`;
    this.innerHTML = html;
  }
}
customElements.define('game-card', GameCard);