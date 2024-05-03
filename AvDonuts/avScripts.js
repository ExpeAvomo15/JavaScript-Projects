function createStores(containerID, min, stores){

    let storesContainer = document.getElementById(containerID);

    //Create P elements
    for (let i=1; i<stores; i++){
        textLabel = "Store: "+i;
        let storeSales = createPElement(textLabel,min);

        storesContainer.appendChild(storeSales);
    }

}

function createPElement (labelText, min){
    //Create the p Element
    let pElement = document.createElement("p");
    
    //creat the label element
    let labelElement = document.createElement("label");
    //Creat lablel's atributes
    labelElement.setAttribute("for",labelText);
    labelElement.innerText = labelText+ ": ";

    //Create input element
    let inputElement = document.createElement("input");
    //create input's attributes
    inputElement.setAttribute("type","number");
    inputElement.setAttribute("id",labelText);
    inputElement.setAttribute("min",min);
    inputElement.setAttribute("value","0");

    //Adding input and label elements in the p
    pElement.appendChild(labelElement);
    pElement.appendChild(inputElement);

    //Return de full pElement
    return pElement;
}

function getValue(element){
    let value = element.value;
    let valueNumber = Number(value);

    return valueNumber;
}

function calcular(){

    //let's build the array of sales 
    let sales = [];
    let pos = 0;

    let salesElement = document.getElementById("storesContainer");
    
    for(let salesItem of salesElement.children){
        let salesValue = getValue (salesItem.children[1])
        sales [pos] = salesValue;
        pos++;
    }


    let total = totalSales(sales);
    let max = maxSales(sales);
    let min = minSales(sales);



    for (let item of salesElement.children){
        let salesValue = getValue(item.children[1]);

        item.children[1].className = "neutralClass";

        if(salesValue==max){
            item.children[1].className = "ventaMayor";
        }

        if(salesValue==min){
            item.children[1].className = "ventaMenor";
        }
    }

    let outputElement = document.getElementById("output");
    let outputMessage = "Total: "+total;
    outputElement.textContent = outputMessage;

}




function totalSales(sales){
    let total = 0;
    for (let itemSales of sales){
        total+=itemSales;
    }
    return total;
}

function maxSales(sales){
    let max = sales[0];
    
    for(let itemSales of sales){
        if(itemSales>max) max=itemSales;
    }
    return max;
}


function minSales(sales){
    let min = sales[0];
    
    for(let itemSales of sales){
        if(itemSales<min) min=itemSales;
    }
    return min;
}