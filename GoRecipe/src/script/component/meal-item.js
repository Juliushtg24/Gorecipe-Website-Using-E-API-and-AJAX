class MyMealItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  set clickDetailVideo(event) {
    this._clickDetailVideo = event;
  }

  set clickDetailSource(event) {
    this._clickDetailSource = event;
  }

  render() {
    this.innerHTML = `
    <div class="col-lg-4 col-md-5 col-sm-12" style="margin-top: 20px; margin-left: 30px;">
     <div class="card" style="width: 18rem">
      <img
        src="${this._meal.strMealThumb}"
        width="60"
        height="200"
        class="card-img-top"
        alt="meal-item"
      />
      <div class="card-body">
        <h5 class="card-title">${this._meal.strMeal}</h5>
        <h6 class="card-title">${this._meal.strCategory}</h6>
        <p class="card-text">
          ${this._meal.strArea}
        </p>
        <div class="d-flex flex-row-reverse justify-content-between">
        <a target="_blank" class="btn btn-dark p-2 detailButton" id="buttonDetailVideo">Watch</a>
        <a target="_blank" class="btn btn-success p-2 detailButton" id="buttonDetailSource">Source</a>
        </div>
      </div>
     </div>
   </div>
    `;
    this.setAttribute("class", "col");
    this.querySelector("#buttonDetailVideo").addEventListener(
      "click",
      this._clickDetailVideo
    );

    this.querySelector("#buttonDetailSource").addEventListener(
      "click",
      this._clickDetailSource
    );
  }
}

customElements.define("meal-item", MyMealItem);
