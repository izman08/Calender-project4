const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function updateCalendar(month, year) {
  calendarBody.innerHTML = '';  
  
  const firstDay = new Date(year, month).getDay(); 
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  
  let date = 1;
  monthYear.textContent = `${months[month]} ${year}`;
  
  for (let i = 0; i < 6; i++) {  
    const row = document.createElement('tr');
    
    for (let j = 0; j < 7; j++) {  
      const cell = document.createElement('td');
      
      if (i === 0 && j < firstDay) {
        cell.textContent = '';  
      } else if (date > daysInMonth) {
        break;  
      } else {
        cell.textContent = date;
        if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          cell.classList.add('current-day');
        }
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function goToNextMonth() {
  currentMonth = (currentMonth + 1) % 12;
  if (currentMonth === 0) currentYear++;
  updateCalendar(currentMonth, currentYear);
}

function goToPreviousMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12;
  if (currentMonth === 11) currentYear--;
  updateCalendar(currentMonth, currentYear);
}

prevBtn.addEventListener('click', goToPreviousMonth);
nextBtn.addEventListener('click', goToNextMonth);

updateCalendar(currentMonth, currentYear);
