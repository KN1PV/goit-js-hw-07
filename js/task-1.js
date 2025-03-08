const categoriesList = document.getElementById('categories');

const categoriesItem = document.querySelectorAll('li.item');

console.log(`Number of categories ${categoriesItem.length}`);

categoriesItem.forEach(element => {
    const categoryName = element.querySelector('h2');

    const categoryItem = element.querySelectorAll('li');

    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryItem.length}`);
});
