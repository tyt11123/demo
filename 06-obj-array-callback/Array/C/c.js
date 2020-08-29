var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

let a1 = players.filter( elem => elem.club.indexOf("FC Barcelona") === -1 );
a1.forEach( elem => console.log( elem.name ));

let a2 = players.map( elem => elem.club );
console.log(a2);