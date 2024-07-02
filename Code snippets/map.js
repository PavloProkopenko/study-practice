// In JS map is like hash-map (fast response object)

const electronics = new Map();
electronics.set('Laptop', 1500)
electronics.set('Keyboard', 100)

console.log(electronics)

// for cycle with map

for(const [key, value] of electronics) {
    console.log(`${key}: ${value}`)
}

/**
 * JS new Map MDN
 * .size()
 * .clear()
 * .delete(key)
 * .entries
 * .forEach
 * .has
 * .keys
 * .values
 * .set(key, value)
 * .get(key)
 * 
 */