// plus functionality
document.getElementById("case-increase").addEventListener("click", function () {
  handleProductChange(true);
});

// decreased functionality
document.getElementById("case-decrease").addEventListener("click", function () {
  handleProductChange(false);
});

// adding function
function handleProductChange(isIncrease) {
  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);
  //   const caseNewCount = caseCount + 1;
  let caseNewCount = caseCount;
  if (isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 59;
  document.getElementById("case-total").innerText = "$" + caseTotal;
}

// phone increase and decreased in function

// phone increase and decreased
document
  .getElementById("phone-increase")
  .addEventListener("click", function () {
    const phoneInput = document.getElementById("phoneCount");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerHTML = "$" + phoneTotal;
  });

document
  .getElementById("phone-decrease")
  .addEventListener("click", function () {
    const phoneInput = document.getElementById("phoneCount");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerHTML = "$" + phoneTotal;
  });

// phone case increase and decreased

// plus functionality
// document.getElementById("case-increase").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;
//   });

//   // decreased functionality
//   document.getElementById("case-decrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = "$" + caseTotal;
//   });
