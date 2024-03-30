const data = []

// place your paragraph
let paragraph = `
make repeated use of a mathematical or 

computational procedure, applying it each time to the result of the previous application; perform iteration.
`

// remove new line keys
paragraph = paragraph.replaceAll('\n', ' ')

// purify data and add new word to data array
paragraph.split(' ').map(item => {
    if(!data.includes(item) && item !== '') {
        data.push(item.replace('.', ''))
    }
})

console.log(data)