// 52.52 <- we can write with many options
const numberFormat = new Intl.NumberFormat('en-GB');
let out = numberFormat.format(5252522.52)
console.log(out)

out = new Intl.NumberFormat('en-US', {
    style: "percent"
}).format(0.55)
console.log(out)

// currency output
const currency = 1234.44

out = new Intl.NumberFormat('us-GB', {
    style: "currency",
    currency: "UAH"
}).format(currency)

console.log(out)

// 

out = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit:"kilometer-per-hour"
}).format(100)

console.log(out)

out = new Intl.NumberFormat("ru-RU", {
    style: "unit",
    unit:"liter",
    unitDisplay: "long"
}).format(3)

console.log(out)

// Date format 
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat('ua-UA').format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Australia/Sydney',
  }).format(date),
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"


// List format 

const vehicles = ['Motorcycle', 'Bus', 'Car'];

const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat('de', {
  style: 'short',
  type: 'disjunction',
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat('en', { style: 'narrow', type: 'unit' });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"


// Relative time

const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });

console.log(rtf1.format(3, 'quarter'));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, 'day'));
// Expected output: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat('de', { numeric: 'auto' });

console.log(rtf2.format(1, 'week'));
// Expected output: "pasado mañana"