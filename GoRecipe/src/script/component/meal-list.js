import "./meal-item.js";

class MyMealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this.setAttribute("class", "row");
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      const buttonClickedVideo = () => {
        mealItemElement
          .querySelector("#buttonDetailVideo")
          .setAttribute("href", `${meal.strYoutube}`);
      };
      const buttonClickedSource = () => {
        mealItemElement
          .querySelector("#buttonDetailSource")
          .setAttribute("href", `${meal.strSource}`);
      };
      mealItemElement.clickDetailVideo = buttonClickedVideo;
      mealItemElement.clickDetailSource = buttonClickedSource;
      this.appendChild(mealItemElement);
    });
  }
}
customElements.define("meal-list", MyMealList);
