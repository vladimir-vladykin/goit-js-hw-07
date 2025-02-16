const categoriesList = document.querySelector("#categories");
const listElementes = categoriesList.children;
const itemsCount = listElementes.length;

console.log(`Number of categories: ${itemsCount}`);

Array.from(listElementes).forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);

  const categoryItems = element.querySelector("ul").children;
  console.log(`Elements: ${categoryItems.length}`);
});
