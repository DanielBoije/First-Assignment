let list = [];

function test(){
    //datankeräys
    const itemValue = document.getElementById("itemInput").value;
    const priceValue = document.getElementById("priceInput").valueAsNumber;
    const element= {"item":itemValue, "price":priceValue}   
    list.push(element);

    //lajittelu
    list.sort(function(a,b){return a.price-b.price}) 

    //min ja max arvot
    const itemMin = list[0]; //ensimmäinen elementti
    const itemMax = list[list.length-1]; //viimeinen elementti
    const container = document.getElementById("results");

    container.innerHTML= "";
    list.forEach(function(element) {
        container.innerHTML+="<li>" +element.item + ", " + element.price + "€ </li>"
    })
    container.innerHTML += "<br></br>"
    container.innerHTML += "<div>"
    container.innerHTML += itemMin.item + " is the cheapest, and " + itemMax.item + " is the most expensive.";
    container.innerHTML += "</div>"
    
}




