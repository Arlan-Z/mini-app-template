async function fetchTopUsersByTokens() {
    try {
        const response = await fetch('https://demo-pp.onrender.com/api/leaderboard/tokens', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        console.log(response);
        const leaderboardList = document.getElementById('leaderboard__list');
        // Check if the response is OK
        if (!response.ok) {
            leaderboardList.innerHTML = `Error: ${response.status}`;
        }

        // Parse the JSON response
        const topUsers = await response.json();

        console.log(topUsers);

        // Get the leaderboard element by ID (make sure it exists in the HTML)


        // Clear any previous content
        leaderboardList.innerHTML = '';

        // Loop through topUsers and generate HTML for each user
        topUsers.forEach(user => {
            // Create a new div element for each user
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');  // Add a class to the div for styling

            // Set the innerHTML for the user's info
            userDiv.innerHTML = `
                <p>Username: ${user.username}</p>
                <p>Level: ${user.level}</p>
                <p>Tokens: ${user.tokens}</p>
            `;

            // Append the new div to the leaderboard list container
            leaderboardList.appendChild(userDiv);
        });

    } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
    }
}

// Fetch leaderboard on window load
window.onload = async function() {
    await fetchTopUsersByTokens();
};
