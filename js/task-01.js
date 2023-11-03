const itemList = document.querySelectorAll('.item');
let itemCount = 0;
itemList.forEach(function(item){
    itemCount++;
});
console.log('Number of categories: ' + itemCount);

const categoriesList = document.querySelectorAll('#categories .item');
categoriesList.forEach(function(category){
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('ul li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);
})
