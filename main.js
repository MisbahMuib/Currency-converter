const dollar = document.getElementById("dollar");
const out = document.getElementById("out");
dollar.addEventListener("input", toPound);

function toPound(){
  const inValue = dollar.value;
  let poundResult = 0;
  poundResult = (inValue*0.77).toFixed(2);
  out.innerHTML = "£ " + poundResult;
}
const change = document.getElementById("change");
change.addEventListener("click", invert);

function invert(){
  dollar.addEventListener("input", toDollar);
  const us = document.getElementById("us$");
  const uk = document.getElementById("uk£");
  us.innerHTML = "UK £";
  uk.innerHTML = "US $";
  dollar.placeholder = "Number of £...";
  function toDollar(){
    const inValue = dollar.value;
    let dollarResult = 0;
    dollarResult = (inValue/0.77).toFixed(2);
    out.innerHTML = "$ " + dollarResult;
  }

};
