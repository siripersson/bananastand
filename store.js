
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
	name: "banan",
	price: 15
}

spoon_obj= {
	name: "spoon",
	price: 5
}

sallad_obj= {
	name: "sallad",
	price: 60
}

// Lägg in vad som finns på menyn
menu[0]=bananasplit_obj
menu[1]=spoon_obj
menu[2]=sallad_obj

// Funktioner som printar
const describeBananasplit =() => {
	console.log(bananasplit_obj.name + " with price: " + bananasplit_obj.price +'sek')
}

const describeSpoon =() => {
	console.log(spoon_obj.name + " with price: " + spoon_obj.price + 'sek')
}

const describeItem =(item) => {
	console.log(item.name+ " with price: " + item.price + 'sek')
}

const describeMenu =() => {
	console.log("On the menu: ")
	for(i=0; i<menu.length; i++){
		console.log(describeItem(menu[i]))
	}
}


// Anrop
describeBananasplit()
describeSpoon()
describeMenu()






