class MySearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchInput").value;
  }

  render() {
    this.innerHTML = `
    <div class="row main-head">
     <div class="jumbotron col-lg-5 right-head">
      <h1 class="display-4">Find Your Recipe</h1>
      <p class="lead">
        Find Your Meal recipe across the world to learn and cook
        for yourself and your family
      </p>
      <hr class="my-4" />
      <p>Find Your Food with search bar</p>
      <div class="searchForm input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Browse your food"
          aria-describedby="button-addon2"
          id="searchInput"
        />
        <div class="input-group-append">
          <button
            class="searchButton btn btn-outline-dark bg-dark text-light"
            type="submit"
          >
            Browse
          </button>
        </div>
      </div>
    </div>
  </div>
`;

    this.querySelector("button").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", MySearchBar);
