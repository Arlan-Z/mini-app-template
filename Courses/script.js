async function fetchCourses() {
  try {
    const response = await fetch('https://demo-pp.onrender.com/api/courses', {
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
    const courses = await response.json();


    // Get the leaderboard element by ID (make sure it exists in the HTML)
    const course_List = document.getElementById('course_list');

    // Clear any previous content
    course_List.innerHTML = '';

    // Loop through topUsers and generate HTML for each user
    courses.forEach(course => {
      // Create a new div element for each user
      const courseDiv = document.createElement('div');

      // Set the innerHTML for the user's info
      courseDiv.innerHTML = `<div class="box">
                <p class="name">${course.title}</p>
                <p class="description">Description: ${course.description}</p>
                <p class="level">Required level: ${course.requiredLevel}</p>
                <p class="level">Exp reward: ${course.expReward}</p>
                </div>
            `;

      // Append the new div to the leaderboard list container
      course_List.appendChild(courseDiv);
    });

  } catch (error) {
    console.log('Failed to fetch leaderboard:', error);
  }
}

// Fetch leaderboard on window load
window.onload = async function() {
  await fetchCourses();
};
