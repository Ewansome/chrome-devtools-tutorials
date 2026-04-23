interface item {
    price: number;
}

function calculateTotal(items: item[]) {
    let total = 0;
    for (let item of items) {
        if (item.price > 100) {
            total += item.price * 0.9; // 10% discount
        } else {
            total += item.price;
        }
    }
    return total;
}