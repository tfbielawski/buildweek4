const items = [
    { item_name: 'Carrots', item_category: 'Vegetables', item_price: 4, item_description: 'Organic orange carrots' },
    { item_name: 'Cabbages', item_category: 'Vegetables', item_price: 6, item_description: 'Fresh Cabbage, red and white' },
    { item_name: 'Ginger', item_category: 'Vegetables', item_price: 2, item_description: 'Fresh organic ginger root' },
    { item_name: 'Kale', item_category: 'Vegetables', item_price: 7, item_description: 'Organic black Kale' },
    { item_name: 'Beef', item_category: 'Animal Products', item_price: 8, item_description: 'Grass fed beef, 80/20' },
    { item_name: 'Goat Meat', item_category: 'Animal Products', item_price: 10, item_description: 'Grass fed goat meat' },
    { item_name: 'Pork', item_category: 'Animal Products', item_price: 6, item_description: 'Grass fed' },
    { item_name: 'Exotic Chicken', item_category: 'Animal Products', item_price: 4, item_description: 'Organic orange carrots' },
    { item_name: 'Agwedde Beans', item_category: 'Beans', item_price: 4, item_description: 'Organic Agwedde' },
    { item_name: 'Kidney Beans', item_category: 'Beans', item_price: 3, item_description: 'Locally sourced' },
    { item_name: 'Green Gram', item_category: 'Beans', item_price: 3, item_description: 'organic, locally sourced' },
    { item_name: 'Black Beans (Dolichos)', item_category: 'Beans', item_price: 2, item_description: 'Organic, sold by the pound' },
    { item_name: 'Soya Beans', item_category: 'Beans', item_price: 3, item_description: 'Organic, locally sourced' },
    { item_name: 'Kayiso Rice', item_category: 'Rice', item_price: 1, item_description: 'Whole grain, fresh' },
    { item_name: 'Mbeya Rice', item_category: 'Rice', item_price: 6, item_description: 'Organic and rare' },
    { item_name: 'Kahama Rice', item_category: 'Rice', item_price: 5, item_description: 'Organic, locally sourced' },
    { item_name: 'Morogoro Rice', item_category: 'Rice', item_price: 3, item_description: 'Fresh, organic' },
    { item_name: 'Avocado', item_category: 'Fruits', item_price: 4, item_description: 'Organic, ripe' },
    { item_name: 'Bananas', item_category: 'Fruits', item_price: 4, item_description: 'Organic, ripe, and for cooking' },
    { item_name: 'Mangoes', item_category: 'Fruits', item_price: 4, item_description: 'Organic, local, fresh' },
]

exports.items = items

exports.seed = async function (knex) {
    await knex('items').insert(items)
}
