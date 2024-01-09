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
app.use(express.json());
const logger = (req, res, next) => {
  next();
};
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

app.post("/api/persons", logger, (req, res) => {
  const person = req.body;
  const newObj = {
    id: Math.random() * 20,
    name: "",
    number: "",
  };
  if (newObj !== person) {
    res.json(persons.concat(person, newObj));
  } else if (newObj.name === "") {
    res.json('Error:"name must have value"');
  } else {
    res.json('Error:"name must be unique"');
  }
});

app.listen(3001, () => {
  console.log("Running successfully");
});
