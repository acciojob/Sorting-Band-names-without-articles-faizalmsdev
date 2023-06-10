let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Queen'];

function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  // Remove articles from band names
  const cleanedNames = bandNames.map(name => {
    // Split the name into individual words
    const words = name.split(' ');

    // Filter out the articles
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

    // Join the remaining words back together
    const cleanedName = filteredWords.join(' ');

    return cleanedName;
  });

  // Sort the band names in lexicographic order
  const sortedNames = cleanedNames.sort((a, b) => a.localeCompare(b));

  // Display the sorted names in the HTML page
  const ulElement = document.getElementById('band');
  sortedNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

// Call the function with the band names array
sortBandNames(bandNames);
