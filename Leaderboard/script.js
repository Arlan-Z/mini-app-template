async function fetchTopUsersByTokens() {
    try {
        const response = await fetch('https://demo-pp.onrender.com/api/leaderboard/tokens', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const topUsers = await response.json();

        console.log(topUsers);

        const leaderboard__list = document.getElementById('leaderboard__list');

        // Create HTML content by mapping the array to list items
        const topUserlistHTML = topUsers.map(user =>
            `<div class="user">
                <p>Username: ${user.username}</p>
                <p>Level: ${user.level}</p>
                <p>Tokens: ${user.tokens}</p>
            </div>`
        ).join(''); // Join them into a single string of HTML

        // Set the innerHTML to display the users
        leaderboard__list.innerHTML = topUserlistHTML;

    } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
    }
}

// Call the function when the window loads
window.onload = async function() {
    await fetchTopUsersByTokens();
};
