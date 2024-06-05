// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO
const reducemomnths = someAcademitesWithAges.reduce((total, academite) => total + academite.age, 0)

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName = someAcademitesWithAges.sort((a, b) => a.name.localeCompare(b.name))
// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = someAcademitesWithAges.sort((a, b) => b.age - a.age)
// TODO


// EOF
