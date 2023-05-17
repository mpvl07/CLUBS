const dateInput = document.querySelector('#date');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

dateInput.setAttribute('min', today.toISOString().split('T')[0]);
dateInput.setAttribute('max', tomorrow.toISOString().split('T')[0]);

dateInput.addEventListener('input', (e) => {
  const selectedDate = new Date(e.target.value);
  
  if (selectedDate < today || selectedDate > tomorrow) {
    dateInput.value = '';
  }
});
