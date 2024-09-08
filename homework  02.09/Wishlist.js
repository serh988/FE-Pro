const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalCost = wishlist.reduce((accumulator, item) => {
    return accumulator + item.price;
}, 0);

console.log(totalCost); // Выведет: 227005
