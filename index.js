const getNewVolcabs = (paragraph, vocabList = []) => {
    // remove new line keys
    paragraph = paragraph.replaceAll('\n', ' ')

    // purify data and add new word to data array
    paragraph.split(' ').map(item => {
        if(!vocabList.includes(item) && item !== '') {
            vocabList.push(item.replace('.', ''))
        }
    })

    return vocabList.sort()
}

// getNewVolcabs('hello world', ['world'])