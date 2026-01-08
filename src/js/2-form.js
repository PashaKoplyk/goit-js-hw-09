console.log('Form');

const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email || "";
  messageInput.value = formData.message || "";
}


function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  saveToLocalStorage();
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  
  form.reset();
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
});