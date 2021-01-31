// need to find difference bw these 2 vars to get hours using dayjs
const startTime = dayjs(document.querySelector('input[name="start-time"]').value.trim()).format('hh mm A');
const endTime = dayjs(document.querySelector('input[name="end-time"]').value.trim()).format('hh mm A');



async function addHours(event) {
  event.preventDefault();

  const response = await fetch('/api/hours', {
    method: 'post',
    body: JSON.stringify({
      billable_hours,
      unbillable_hours
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

// async function deleteHours(event) {}
