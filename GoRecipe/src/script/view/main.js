import $ from "jquery";
import "../component/nav-bar.js";
import "../component/meal-list.js";
import "../component/about-page.js";
import "../component/search-bar.js";
import "../component/my-contact.js";
import DataSource from "../data/datasource.js";

const main = () => {
  const searchInput = document.querySelector("search-bar");
  const mealListElement = document.querySelector("meal-list");
  const navBarCollapse = document.querySelector("nav-bar");
  const warningElement = document.querySelector("#warningText");

  $(warningElement).hide();

  const onButtonSearchSubmit = async () => {
    try {
      const result = await DataSource.searchMeal(searchInput.value);
      $(warningElement).hide();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderData = async () => {
    const result = await DataSource.searchMeal("");
    renderResult(result);
  };

  const renderResult = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResult = (message) => {
    $(warningElement).text(message);
    $(warningElement).show();
  };

  searchInput.clickEvent = onButtonSearchSubmit;
  renderData();
};

export default main;
