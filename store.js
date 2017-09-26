
const bananasplit=50;
const spoon=3;

// Skapa en list för menyn
const menu=[]


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

sallad_obj= {
	name_s: "sallad",
	price_s: 60
}

// Lägg in vad som finns på menyn
menu[0]=bananasplit_obj
menu[1]=spoon_obj
menu[2]=sallad_obj

// Funktioner som printar
const describeBananasplit =() => {
	console.log(bananasplit_obj.name_b + " with price: " + bananasplit_obj.price_b +'sek')
}

const describeSpoon =() => {
	console.log(spoon_obj.name_s + " with price: " + spoon_obj.price_s + 'sek')
}

const describeMenu =() => {
	console.log("On the menu: ")
	for(i=0; i<menu.length; i++){
		console.log(menu[i])
	}
}


// Anrop
describeBananasplit()
describeSpoon()
describeMenu()






