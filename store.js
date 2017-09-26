const bananasplit=50;
const spoon=3;

// Funktion
const greet = () => {
	const tot=2*bananasplit+ 5* spoon
	console.log('Välkommen! '+tot + 'kr')
}

// Anropa funktionen
greet()

// Objekt
bananasplit_obj= {
	name_b: "banan",
	price_b: 15
}

spoon_obj= {
	name_s: "spoon",
	price_s: 5
}

// Funktion som printar
const describeBananasplit =() => {
	console.log(bananasplit_obj.name_b + " with price: " + bananasplit_obj.price_b +'sek')
}

const describeSpoon =() => {
	console.log(spoon_obj.name_s + " with price: " + spoon_obj.price_s + 'sek')
}

// Anropa
describeBananasplit()
describeSpoon()