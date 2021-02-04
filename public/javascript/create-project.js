async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#create-title').value.trim();
    const date_started = document.querySelector('#start-date').value.trim();
    const date_ended = document.querySelector('#end-date').value.trim();

    if (title && date_started && date_ended) {
        const response = await fetch ('/api/project', {
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
            alert('This project has been created')
            document.location.reload();
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#create-project-btn').addEventListener('click', createPostHandler);
