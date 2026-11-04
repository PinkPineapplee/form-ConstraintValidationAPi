//Create function to make ui for form
function createFormUI(){
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
        form.className = "form-Val";
  

    formDiv.append(form);
}



export {
    createFormUI
}