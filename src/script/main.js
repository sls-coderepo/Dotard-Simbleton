

const listOfBusiness = document.querySelector("#activeBusiness-container");
listOfBusiness.innerHTML = "<h1>Active Business</h1>";

const createHTML = businessObj => {
  return `<section>
  <h2>${businessObj.companyName}</h2>
  <p>${businessObj.addressFullStreet}</p>
  <p>${businessObj.addressCity} ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
  <hr></section>`;
};

businesses.forEach(business => {
  let list = createHTML(business);
  listOfBusiness.innerHTML += list;
});

/* businesses.forEach(business => {
  listOfBusiness.innerHTML += `
    <h2>${business.companyName}</h2>
    <p>
      ${business.addressFullStreet}
    </p>
    <p>
    <p>${business.addressCity} ${business.addressStateCode} ${business.addressZipCode}</p>
    </p>
    <hr>
       `
}); */



//Array to contain all Manufacturing Business
const listOfManufacturingBusiness = document.querySelector(
  "#manufacturingBusiness-container"
);
listOfManufacturingBusiness.innerHTML = "<h1>Manufacturing Business</h1>";
const manufacturingBusiness = businesses.filter(business => {
  let isManufacturingBusiness = false;
  if (business.companyIndustry === "Manufacturing") {
    isManufacturingBusiness = true;
  }
  return isManufacturingBusiness;
});
const createHTMLForManufacturingBusiness = businessObj => {
  return `<h2>${businessObj.companyName}</h2>
<p>${businessObj.addressFullStreet}</p>
<p>${businessObj.addressCity} ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
<hr>`;
};
manufacturingBusiness.forEach(business => {
  let list = createHTMLForManufacturingBusiness(business);
  listOfManufacturingBusiness.innerHTML += list;
});


