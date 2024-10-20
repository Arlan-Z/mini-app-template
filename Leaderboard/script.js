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
        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON response
        const topUsers = await response.json();

        console.log(topUsers);

        // Get the leaderboard element by ID (make sure it exists in the HTML)
        const leaderboardList = document.getElementById('leaderboard__list');

        // Clear any previous content
        leaderboardList.innerHTML = '';

        // Loop through topUsers and generate HTML for each user
        topUsers.forEach(user => {
            // Create a new div element for each user
            const userDiv = document.createElement('div');
            // Add a class to the div for styling

            // Set the innerHTML for the user's info
            userDiv.innerHTML = `<div class="box">
            <p class="name">Username: ${user.username}</p>
            <div class="box__header">
            <p class="level">Level: ${user.level}</p>
            <p class="tokens">Tokens: ${user.tokens}</p>
            </div>
        </div>
            `;

            // Append the new div to the leaderboard list container
            leaderboardList.appendChild(userDiv);
        });

    } catch (error) {
       console.log('Failed to fetch leaderboard:', error);
    }
}

// Fetch leaderboard on window load
window.onload = async function() {
    await fetchTopUsersByTokens();
};
