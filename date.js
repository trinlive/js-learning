const date = new Date(2020, 7, 1)

const result = date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

console.log(result);