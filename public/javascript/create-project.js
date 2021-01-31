async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#create-title').value.trim();
    const startDate = document.querySelector('#start-date').value.trim();
    const endDate = document.querySelector('#end-date').value.trim();
    const projectDates = document.querySelector('.project-date')

    projectDates.forEach( dates => {
        const date = datejs(dates.dataset.date)
    })

    if (title && startDate && endDate) {
        const response = await fetch ('/api/projects', {
            method: 'post',
            body: JSON.stringify({
                title,
                date_started,
                date_ended
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            console.log('Post Created!!')
            document.location.replace('/hours');
            alert('This project has been created')
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#create-project-btn').addEventListener('submit', createPostHandler);