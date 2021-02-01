const hoursBtn = document.querySelector('#add-hours');
// const deleteBtn = document.querySelector('#delete-hours');

async function addHours(event) {
  event.preventDefault();

const startTime = document.querySelector('#start-time').value;
const endTime = document.querySelector('#end-time').value;
const hourType = document.querySelector('#hour-type').value.trim();

const start = startTime.split(':')
const end = endTime.split(':')
console.log(start, end)
console.log(startTime);
console.log(endTime);

// get difference between start and end time
let hourDiff = Number(end[0]) - Number(start[0]);
if (hourDiff < 0) {
   hourDiff = 24 + (Number(end[0]) - Number(start[0]));
}

let minuteDiff = Number(end[1]) - Number(start[1]);
if (minuteDiff < 0) {
  minuteDiff = 24 + (Number(end[1]) - Number(start[1]));
}

let diff = hourDiff + minuteDiff/60;
console.log(diff);

// save unbillable/billable
let billable_hours = diff;
let unbillable_hours = 0;
if (hourType == 'unbillable') {
  let unbillable_hours = diff;
  let billable_hours = 0;
} 
console.log(billable_hours, unbillable_hours)
  const response = await fetch('/api/hours', {
    method: 'post',
    body: JSON.stringify({
      billable_hours: billable_hours,
      unbillable_hours: unbillable_hours

    }),
    headers: { 'Content-Type': 'application/json' }
  })

    if(response.ok) {
      console.log('Hours added!')
      alert('Your hours have been added!')
    } else {
        alert(response.statusText)
    }
}
hoursBtn.addEventListener('click', addHours);

// async function deleteHours(event) {
//   event.preventDefault();

//   const response = await fetch('/api/hours/:id', {
//     method: 
//   })
// }
