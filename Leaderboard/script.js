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


        return topUsers;

    } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
    }
}

// Call the function to get the top users
window.onload = async function() {
    try {
        const response = await fetch('https://demo-pp.onrender.com/api/leaderboard/tokens');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }


        const topUsers = await response.json();

        console.log(topUsers);

        const leaderboard__list=document.getElementById('.leaderboard__list');
        leaderboard__list.innerHTML = topUsers;

    } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
    }
}