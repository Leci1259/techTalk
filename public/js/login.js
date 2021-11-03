const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = $('.user-name').val();
  const passwordEl = $('.user-password').val();

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

const switchToSignup = function () {
  document.location.replace('/signup');


}
document
  .querySelector('.loginbutton')
  .addEventListener('click', loginFormHandler)
document
  .querySelector('.switch-signup')
  .addEventListener('click', switchToSignup)

