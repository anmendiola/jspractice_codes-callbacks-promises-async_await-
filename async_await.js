let stock = {
    fruits: ['Strawberry', 'Banana', 'Grape', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']

};

let is_shop_open = true;

function time(ms){
    return new Promise ( (resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log('Shop is closed.'));
        }
    });
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stock.fruits[0]} is the flavor selected.`);

        await time(0000);
        console.log('Start production');

        await time(2000);
        console.log('Cut the fruits');

        await time(1000);
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} are added.`);

        await time(1000);
        console.log('Start the machine.');

        await time(1000);
        console.log(`Ice cream is placed on ${stock.holder[0]}.`);

        await time(3000);
        console.log(`${stock.toppings[0]} is the topping selected.`);

        await time(2000);
        console.log('Serve the ice cream.');
    }
    catch(error){
        console.log('Customer left.', error);
    }

    finally{
        console.log('Day ended, shop is closing.');
    }
}


kitchen();