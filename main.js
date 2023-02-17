// Your job is to write a function that will create an object that represents a queen. Once that object is created, you will use the .push() method to add the object to the queens array.
// The function will need to be given both the unique numerical identifier you want assigned to the queen, and the queen's name.
// This means that the function must have two parameters defined. The first parameter will capture the number value, and the second parameter will capture the string value.

//PAYING TRIBUTE
const tributeChest = []

const payTribute = (tributeId, tributedescription, queenId) => {
    const tributeObject = {
        id: tributeId ,
        description: tributedescription,
        queenId: queenId

    }
    tributeChest.push(tributeObject)
    // Add the tribute object to the tribute chest
}

//ANOINT THE QUEEN
const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(0, "Autumn" );
createQueen(1, "Queen Elizabeth");
createQueen(2, "Alecia Keys");
console.log(queens)

//ITERATING THE QUEENS
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
}

payTribute(0, "Llama", 1);
payTribute(1, "Camel", 2);
payTribute(2, "Cheese", 0);
payTribute(3, "The moon", 0 );
payTribute(6, "1000 live goldfish", 2);
payTribute(4, "Dragon egg",1 );
payTribute(5, "Chick Fil-A", 0);
// iterate the queen objects to show tribute for each one
for (const queenObject of queens) {
    for (const tributeObject of tributeChest) {
    if (tributeObject.queenId === queenObject.id) {
        console.log(`${queenObject.name} has tribute ${tributeObject.description}`)

    }
    }
    }