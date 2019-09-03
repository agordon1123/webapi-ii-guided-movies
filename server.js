const express = require('express');

const server = express();

let actors = [
    {
        id: 1,
        name: "Elijah Wood",
        movies: [1, 2]
    },
    {
        id: 2,
        name: "Chris Evans",
        movies: [4]
    }
]

let movies = [
    {
        name: "The Fellowship of the Ring",
        released: true,
        rating: 5,
        id: 1
    },
    {
        name: "The Two Towers",
        released: true,
        rating: 4,
        id: 2
    },
    {
        name: "The Children of Hurin",
        released: false,
        rating: null,
        id: 3
    },
    {
        name: "Avengers Endgame",
        released: true,
        rating: 3,
        id: 4
    }
];

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...' });
});

server.get('/api/movies', (req, res) => {
    res.status(200).json(movies);
});

server.get('/api/actors', (req, res) => {
    res.status(200).json(actors);
});

module.exports = server;
