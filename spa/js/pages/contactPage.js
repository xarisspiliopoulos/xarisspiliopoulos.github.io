export function renderContactPage() {
    document.getElementById('app').innerHTML = `
    <h1>Contact Us</h1>
    <form id="contactForm">
      <sl-input name="name" label="Name"></sl-input>
      <sl-input name="email" label="Email" type="email"></sl-input>
      <sl-textarea name="message" label="Message"></sl-textarea>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </form>
  `;

    // Handle form submission
    document.getElementById('contactForm').onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        alert(`Message from ${formData.get('name')} has been sent!`);
    };
}
