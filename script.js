document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("giveaway-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Get form values
        const name = form.name.value;
        const email = form.email.value;

        // Simple front-end confirmation
        message.textContent = `Thanks, ${name}! You’re entered into the weekly giveaway.`;
        form.reset();

        // NOTE: For real backend submission, integrate an email service or database
        console.log(`Giveaway Entry: ${name}, ${email}`);
    });
});
