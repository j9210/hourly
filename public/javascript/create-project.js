async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#create-title').value.trim();
    const date_started = document.querySelector('#start-date').value.trim();
    const date_ended = document.querySelector('#end-date').value.trim();

    console.log(title)
    console.log(date_started)
    console.log(date_ended)

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
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#create-project-btn').addEventListener('click', createPostHandler);