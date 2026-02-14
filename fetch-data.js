/**
 * 1. Initialize the Async Function
 * This function handles the API request and UI updates.
 */
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();

        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 6. Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(function(user) {
            // Create a <li> element for each user
            const listItem = document.createElement('li');
            
            // Set the text content to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // Append the full list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling
        // Clear existing content and display failure message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        
        // Log the error to the console for debugging
        console.error('Error fetching user data:', error);
    }
}

/**
 * 8. Invoke fetchUserData on DOMContentLoaded
 * This ensures the script runs once the HTML is ready.
 */
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});