// progress bar
let slider = document.getElementById("rangeSlider");
let progressBar = document.getElementById("progressBar");

slider.oninput = function(){
    progressBar.style.width = this.value * 25 + "%";
}



// viewer and price
let view = document.getElementById("viewer");
let price = document.getElementById("price");
let priceResponsive = document.getElementById("pricePhone");
let discount = document.getElementById("toggle");
let pageView = ["10K ", "50K ", "100K ", "500K ", "1M "];
let costPerMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener("input", function(){
    UpdateValue();
    view.innerHTML = pageView[slider.value];
    
    // slider progress
    
});

function UpdateValue(){

    if (discount.checked == true){
        price.innerHTML = costPerMonth[slider.value] - costPerMonth[slider.value]* .25 
        priceResponsive.innerHTML = costPerMonth[slider.value] - costPerMonth[slider.value]* .25 
    } else {
        price.innerHTML = costPerMonth[slider.value]
        priceResponsive.innerHTML = costPerMonth[slider.value]
    }
}

discount.addEventListener("change", () =>{
    UpdateValue();
})