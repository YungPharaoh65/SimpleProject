function formatDateTime() {
    // Get the current date and time
    const now = new Date();

    // Format date, year, and time
    const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    // Create the formatted string
    const formattedString = `${date}, ${year}, ${time}.`;

    // Update the HTML
    const tweetElement = document.querySelector('.tweet');
    tweetElement.textContent = formattedString; // Use textContent to set the text
}

// Call the function to format and display the date and time
formatDateTime();