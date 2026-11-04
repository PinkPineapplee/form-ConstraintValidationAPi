//Create function to make ui for form
function createFormUI(){
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    form.className = "form-Val";
    form.setAttribute("novalidate");
    form.setAttribute("method","POST");
   //Email components
    const container = document.createElement("fieldset");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: " ;

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.name = "email";

//country components
 const container1 = document.createElement("fieldset");
    const countryLabel = document.createElement("label");
    countryLabel.textContent = "Country: " ;

    const countrySelect = document.createElement("select");
    countryInput.name = "country";
    const countryInput = document.createElement("input");
    countryInput.type = "text";

    const countryOptions = document.createElement("option");

//postal code components
 const container = document.createElement("fieldset");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: " ;

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.name = "email";

//password components
 const container = document.createElement("fieldset");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: " ;

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.name = "email";

//password comfirm components
 const container = document.createElement("fieldset");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: " ;

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.name = "email";



  
container.append(emailLabel,emailInput);
    formDiv.append(form);
}



export {
    createFormUI
}