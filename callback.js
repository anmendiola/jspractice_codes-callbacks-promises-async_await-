let stock = {
    fruits: ['Strawberry', 'Banana', 'Grape', 'Apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']

};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stock.fruits[fruit_name]} was selected.`);
        call_production();
        let fruit_name  = 'Guava';
    }, 2000);
   
};

let production = () => {
    setTimeout(() => {
        console.log('Production has started');

        setTimeout(() => {
            console.log("The fruit has been chopped.")

            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added.`);

                setTimeout(() => {
                    console.log('Machine was started.')

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stock.holder[0]} `);

                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} toppings was added.`)
                            
                            setTimeout(() => {
                                console.log('Serve ice cream.')
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

order(0, production);