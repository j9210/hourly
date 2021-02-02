  // Not Yet Tested
async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signUp').value.trim();
    const email = document.querySelector('#email-signUp').value.trim();
    const password = document.querySelector('#password-signUp').value.trim();
  

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      if(response.ok) {
          console.log('success');
          alert("You've been signed up");
          document.location.replace('/login');
      } else {
          alert(response.statusText)
      }
    }
};
document.querySelector('#sign-up').addEventListener('click', signupFormHandler);