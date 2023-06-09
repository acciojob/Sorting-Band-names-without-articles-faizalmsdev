//your code here

// Define the array of band names
let bandNames = [
  'The Rolling Stones',
  'AC/DC',
  'Led Zeppelin',
  'Pink Floyd',
  'The Beatles',
];

// Function to remove articles from the band name
function removeArticles(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names in lexicographic order
bandNames.sort(function (a, b) {
  const bandA = removeArticles(a);
  const bandB = removeArticles(b);
  if (bandA < bandB) {
    return -1;
  }
  if (bandA > bandB) {
    return 1;
  }
  return 0;
});

// Get the <ul> element by its ID
const ulElement = document.getElementById('bands');

// Iterate over the sorted band names and create <li> elements
bandNames.forEach(function (bandName) {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});
