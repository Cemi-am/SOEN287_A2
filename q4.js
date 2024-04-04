function calcTotal() {
    //prices
    const it1p = 19.99;
    const it2p = 86.00;
    const it3p = 55.00;
    //user values
    let it1 = document.getElementById("it1").value;
    let it2 = document.getElementById("it2").value;
    let it3 = document.getElementById("it3").value;

    if(it1 === "" || it2 === "" || it3 === "") {
        alert("All fields should be filled");
        return;
    }

    if(!Number.isInteger(parseInt(it1)) || !Number.isInteger(parseInt(it2)) || !Number.isInteger(parseInt(it3))) {
        alert("Invalid entry. Please enter a number");
        return;
    }

    let total = (parseInt(it1) * it1p) + (parseInt(it2) * it2p) + (parseInt(it3) * it3p);
    document.getElementById("pricebreakdown").innerHTML = ("Item 1 (Quantity = " +it1+"):" +(it1*it1p) +
        "<br>Item 2 (Quantity = " +it2+"):" +(it2*it2p) +
        "<br>Item 3 (Quantity = " +it3+"):" +(it3*it3p));
    document.getElementById("totalcost").textContent = "Total cost:" + total;
}