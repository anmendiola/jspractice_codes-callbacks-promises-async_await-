let stock = {
    fruits: ['Strawberry', 'Banana', 'Grape', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']

};

let is_shop_open = true;

let order = (work, time) => {


    return new Promise( (resolve, reject) => {
        if(is_shop_open){

            setTimeout(() => {
                resolve(work());
            }, time);
           
        }

        else{
            reject(console.log('Our shop is closed.'));
        }

    } );
};

order(() => console.log(`${stock.fruits[0]} has been selected`), 2000)

.then(() => {
    return order(() => console.log('Production has started.'), 0000);
})

.then(() => {
    return order(() => console.log('The fruit has been chopped'), 2000);
})

.then(() => {
    return order(() => console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added.`), 1000);
})

.then(() => {
    return order(() => console.log('The machine was started.'), 1000);
})

.then( () => {
    return order(() => console.log(`The ice cream was placed on ${stock.holder[0]}`), 2000);
})

.then(() => {
    return order(() => console.log(`${stock.toppings[0]} was added.`), 3000);
})

.then(() => {
    return order(() => console.log('Serve ice cream.'), 1000);
})


.catch(() => {
    console.log('Customer left.');
})

.finally(() => {
    console.log('Day ended. Closing shop.')
});