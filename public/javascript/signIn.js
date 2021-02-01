  // Not Yet Tested
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signIn').value.trim();
    const password = document.querySelector('#password-signIn').value.trim();
    
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          "email": email,
          "password": password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert("you're logged in");
      } else {
        alert(response.statusText);
      }
    }
  }

document.querySelector('#log-in').addEventListener('click', loginFormHandler);