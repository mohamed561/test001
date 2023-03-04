const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  // validate username and password here
  console.log('username:', username);
  console.log('password:', password);
});
