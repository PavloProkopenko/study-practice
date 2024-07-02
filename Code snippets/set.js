// Set testing

const goods = new Set(['Laptop', 'Keyboard', 'Mouse'])
const added = new Set(['Bag', 'Keyboard'])

const basket = new Set([...goods, ...added])

console.log(basket)

// Intersection

const intersection = new Set(
    [...goods].filter((item) => added.has(item)) 
)

console.log(intersection)

// Difference

const difference = new Set(
    [...goods].filter((item) => !added.has(item)) 
)

console.log(difference)

/**
 * JS Set MDN
 * .size() - shows size of set
 * .clear() - delete all items from set
 * .delete(value) - delete value by key
 * .entries
 * .forEach(f) - reading set
 * .has(value)
 * .keys() - gets all keys of set
 * .values() - gets all values of set
 * .add(value) - adding item to set
 */
