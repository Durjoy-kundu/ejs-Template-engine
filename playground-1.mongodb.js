/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  [
    {
      "name": "React Mastery",
      "price": 2500,
      "Instructor": "Alice Johnson"
    },
    {
      "name": "Node.js Fundamentals",
      "price": 1800,
      "Instructor": "Bob Smith"
    },
    {
      "name": "Full-Stack Development",
      "price": 3000,
      "Instructor": "Charlie Brown"
    },
    {
      "name": "Database Design",
      "price": 2200,
      "Instructor": "David Lee"
    },
    {
      "name": "CSS for Beginners",
      "price": 1300,
      "Instructor": "Emma Wilson"
    }
  ]
  
]);


// Print a message to the ou${salesOnApril4th} sales occurred in 2014.tput window.
console.log(`done inserting data on database`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.

