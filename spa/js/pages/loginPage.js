import { appState, setState } from '../state.js';

export function renderLoginPage() {
    document.getElementById('app').innerHTML = `
    <h1>Login</h1>
    <form id="loginForm">
      <sl-input name="email" label="Email" type="email"></sl-input>
      <sl-input name="password" label="Password" type="password"></sl-input>
      <sl-button type="submit" variant="primary">Login</sl-button>
    </form>
  `;

    // Handle form submission
    document.getElementById('loginForm').onsubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        // Simple login logic (replace with real API call)
        if (email === 'user@example.com' && password === 'password') {
            setState({ loggedIn: true });
            alert('Login successful!');
            window.location.hash = '/';
        } else {
            alert('Invalid credentials');
        }
    };
}
