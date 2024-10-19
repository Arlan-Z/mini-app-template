fetch('https://demo-pp.onrender.com/api/courses')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    alert(data); // Handle the response data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });