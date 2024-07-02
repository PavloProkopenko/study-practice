const date = new Date()

console.log(date) // Выводит сроку времени

// milliseconds

const date2 = new Date(1719562452000)
console.log(date2)

// native

const date3 = new Date('2024 Jun 29')
console.log(date3)

// string to object
const date4 = new Date('2024-06-28T08:27:52.999Z')
console.log(date4)
console.log(date.toUTCString())
console.log(date.toDateString())
console.log(date.toISOString())

// formatting date

console.log(date.getFullYear())
console.log(date.getMonth()) // 0 .. 11
console.log(date.getDate()) // <- current date 1..31
console.log(date.getDay()) // <- current day from Sunday 0..6
console.log(date.getHours()) // <- 0 .. 24
console.log(date.getMinutes()) // <- 0 .. 59
console.log(date.getSeconds()) // <- 0 .. 59
console.log(date.getTime()) // <- unixTime
console.log(Date.now()) // <- unixTime

function addLeadingZero(d) {
    return (d < 10) ? '0' + d : d;
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getUserTime(t = new Date()) {
    let Year = t.getFullYear()
    let Month = addLeadingZero(t.getMonth() + 1)
    let Day = addLeadingZero(t.getDate())
    let WeekDay = days[t.getDay()]
    let Hour = addLeadingZero(t.getHours())
    let Minute = addLeadingZero(t.getMinutes())

    return `${Year}/${Month}/${Day} ${Hour}:${Minute} (${WeekDay})`
}

console.log(getUserTime())