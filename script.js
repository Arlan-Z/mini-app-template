async function getCourses() {
    try {
      const response = await fetch('https://demo-pp.onrender.com/api/courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Handle the response data here
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  getCourses(); // Call the function to fetch the data
  