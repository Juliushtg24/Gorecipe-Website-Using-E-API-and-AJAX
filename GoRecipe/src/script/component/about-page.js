class MyAboutPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      .about-main {
        font-family: "Epilogue", sans-serif;
        padding-bottom: 20px;
        background-color: #7d1935;
      }
      
      .about-main > .about-container > .about-card {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }
      </style>
      <article class="about-main p-5 mt-3 text-light">
      <h2 class="text-center about-title">About</h2>
      <h5 class="text-center mb-3">How to use our web in an effective way</h5>
      <div class="about-container row d-flex justify-content-around">
        <div
          class="card about-card m-1 text-center bg-dark"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">Step 1: Find</h5>
            <p class="card-text">
              this website provide countless recipes from around the world to
              learn cook
            </p>
          </div>
        </div>
        <div
          class="card about-card m-1 text-center bg-dark"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">Step 2: Learn</h5>
            <p class="card-text">
              Learn the recipes by preparing the ingridients and read the
              cooking instruction from various source and video instruction
            </p>
          </div>
        </div>
        <div
          class="card m-1 about-card text-center bg-dark"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">Step 3: Cook</h5>
            <p class="card-text">
              After understanding the recipes you are ready to cook for your
              family or friends
            </p>
          </div>
        </div>
      </div>
    </article>
      `;
  }
}

customElements.define("about-page", MyAboutPage);
