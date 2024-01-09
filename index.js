const express = require("express");
const app = express();

let persons = [
  {
    id: 1,
    name: "Afshal",
    number: "982987231",
  },
  {
    id: 2,
    name: "Kagura",
    number: "98266666",
  },
  {
    id: 3,
    name: "Sterben",
    number: "98252453",
  },
  {
    id: 4,
    name: "Rudey",
    number: "9768587231",
  },
  {
    id: 5,
    name: "Temo",
    number: "9834242231",
  },
];
//l. a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});
//2. Implement the functionality for displaying the information for a single phonebook entry.
//    The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  res.json(person);
});
//3.Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request
// to the unique URL of that phonebook entry.
//Test that your functionality works with either Postman or the Visual Studio Code REST client.
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});
//4.Expand the backend so that new phonebook entries
//can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.
app.use(express.json());
app.post("/api/persons", (req, res) => {
  const person = req.body;
  console.log(person);
  res.json(person);
});

app.listen(3001, () => {
  console.log("Running successfully");
});
