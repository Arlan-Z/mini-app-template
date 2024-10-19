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

        if (!response.ok) {
            leaderboardList.innerHTML = `Error: ${response.status}`;
        }


        const topUsers = await response.json();

        console.log(topUsers);





        topUsers.forEach(user => {

            const userDiv = document.createElement('div');
            userDiv.classList.add('user');


            userDiv.innerHTML = `
                <p>Username: ${user.username}</p>
                <p>Level: ${user.level}</p>
                <p>Tokens: ${user.tokens}</p>
            `;


            leaderboardList.appendChild(userDiv);
        });

    } catch (error) {
        leaderboardList.innerHTML='Failed to fetch leaderboard:', error;
    }
}

// Fetch leaderboard on window load
window.onload = async function() {
    await fetchTopUsersByTokens();
    const leaderboardList = document.getElementById('leaderboard__list');
    const userDiv = document.createElement('div');
    userDiv.classList.add('name');
    leaderboardList.innerHTML= userDiv;

};
