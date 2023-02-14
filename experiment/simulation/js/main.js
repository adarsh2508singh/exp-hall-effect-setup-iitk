//Your JavaScript goes in here
//Your JavaScript goes in here
 var ammeter1=0;
 var gauss=0;
 var thickness1=0;

document.getElementById("ammeter1").disabled = true;
document.getElementById("thickness1").disabled = true;
document.getElementById("Hallcurrent1").disabled = true;





function getammeter(id) {
    if (id === 'ammeter1') {
      
        ammeter1 = document.getElementById(id).value;
        document.getElementById("ammeter-1-display").innerText = ammeter1 +" "+"A";
        document.getElementById("ammeter-1-display-svg").innerHTML =  ammeter1+" " + "amp.";
        document.getElementById("ammeter-2-display-svg").innerHTML =  ammeter1+" " + "amp.";

     gauss=((12.57*10**-7)*(117900)*ammeter1);
        document.getElementById("gauss-1-display-svg").innerHTML = gauss.toFixed(4);

        getHallcurrent('Hallcurrent1');
    }
    
    return gauss;
}





function getThickness(id) {
  if (id === 'thickness1') {
    
      thickness1 = document.getElementById(id).value;
      document.getElementById("thickness-1-display").innerText = thickness1 +" "+"mm";

      getHallcurrent('Hallcurrent1');

  }
  return thickness1;
}
function getHallcurrent(id) {
  if (id === 'Hallcurrent1') {
    
    hallcurrent1= document.getElementById(id).value;
      document.getElementById("Hallcurrent-1-display").innerText = hallcurrent1 +" "+"mA";
      document.getElementById("output1").innerHTML=Number((hallcurrent1*(1.6*10**(-19))*(1.212*10**29)*gauss*10**(-4)*(thickness1)*10**(-3))/((thickness1*10)**2)).toFixed(3);

  }
}

const select = document.querySelector("#image-select");
const image1 = document.querySelector("#Layer_1");
const image2 = document.querySelector("#Layer_2");

select.addEventListener("change", function() {

  
  image1.style.display = "none";
  image2.style.display = "none";
  if (this.value === "image1") {
    image1.style.display = "block";
  } else if (this.value === "image2") {
    image2.style.display = "block";
    document.getElementById("thickness1").disabled = false;
document.getElementById("Hallcurrent1").disabled = false;
  }
  setTimeout(function(){
    alert("Please click on Probe to insert");
 }, 1000);
});
    
const needle = document.querySelector("#needle");
needle.addEventListener("click", function(){
    needle.setAttribute('transform','translate(0,-65)');
    document.getElementById("ammeter1").disabled = false;
  
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "500px";
  document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
