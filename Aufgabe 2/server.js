import express, { json } from "express";
import cors from "cors";

const jokeApi = "https://witzapi.de/api";
const app = express();
const jokes = [];

app.listen(3000, () => {
  console.log("Server has started");
});

app.use(cors());
app.use(json());

app.get("/new-joke", async (req, res) => {
  const jokeRequest = await fetch(`${jokeApi}/joke`);
  const jokeData = await jokeRequest.json();
  const joke = { id: jokes.length + 1, joke: jokeData[0].text };

  jokes.push(joke);

  res.status(200).json(joke);
});

app.get("/jokes", (req, res) => {
  res.status(200).json(jokes);
});

app.post("/rate/:id", (req, res) => {
  const id = req.params.id;
  const rating = req.body.rating;
  const joke = jokes.find((joke) => joke.id == id);

  if (!joke) {
    res.status(404).json({ message: "Joke with this id not found." });
    return;
  }

  joke.rating = rating;

  res.status(200).json({ message: "Successfully updated rating" });
});
