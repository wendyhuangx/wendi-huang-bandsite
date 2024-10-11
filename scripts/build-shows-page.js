// script.js

const shows = [
    { date: 'Mon Sept 09 2024', venue: 'Ronald Lane', location: 'San Francisco, CA' },
    { date: 'Tue Sept 17 2024', venue: 'Pier 3 East', location: 'San Francisco, CA' },
    { date: 'Sat Oct 12 2024', venue: 'View Lounge', location: 'San Francisco, CA' },
    { date: 'Sat Nov 16 2024', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
    { date: 'Fri Nov 29 2024', venue: 'Moscow Center', location: 'San Francisco, CA' },
    { date: 'Wed Dec 18 2024', venue: 'Press Club', location: 'San Francisco, CA' },

];

const showsContainer = document.getElementById('showsContainer');

// Function to create show item

function createShowItem(show) {
    const showItem = document.createElement('div');
    showItem.className = 'show-item';

    const dateDiv = document.createElement('div');
    dateDiv.className = 'show-date';
    dateDiv.innerText = show.date;

    const venueDiv = document.createElement('div');
    venueDiv.className = 'show-venue';
    venueDiv.innerText = show.venue;

    const locationDiv = document.createElement('div');
    locationDiv.className = 'show-location';
    locationDiv.innerText = show.location;

    const button = document.createElement('button');
    button.className = 'buy-tickets';
    button.innerText = 'Buy Tickets';

    button.addEventListener('click', () => {
        const selectedItems = document.querySelectorAll('.show-item.selected');
        selectedItems.forEach(item => item.classList.remove('selected'));
        showItem.classList.add('selected');
    });

    showItem.appendChild(dateDiv);
    showItem.appendChild(venueDiv);
    showItem.appendChild(locationDiv);
    showItem.appendChild(button);
    
    return showItem;
}

// Render all shows
shows.forEach(show => {
    const showItem = createShowItem(show);
    showsContainer.appendChild(showItem);
});
