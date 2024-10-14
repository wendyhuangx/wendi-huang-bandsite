document.addEventListener("DOMContentLoaded", function() {
    const shows = [
        { date: 'Mon Sept 09 2024', venue: 'Ronald Lane', location: 'San Francisco, CA' },
        { date: 'Tue Sept 17 2024', venue: 'Pier 3 East', location: 'San Francisco, CA' },
        { date: 'Sat Oct 12 2024', venue: 'View Lounge', location: 'San Francisco, CA' },
        { date: 'Sat Nov 16 2024', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
        { date: 'Fri Nov 29 2024', venue: 'Moscow Center', location: 'San Francisco, CA' },
        { date: 'Wed Dec 18 2024', venue: 'Press Club', location: 'San Francisco, CA' },
    ];

    // Function to create show items
    function createShowItems() {
        const showsContainer = document.querySelector('.shows__grid');

        shows.forEach(show => {
            const showItem = document.createElement('div');
            showItem.className = 'show-item';

            const dateLabel = document.createElement('p');
            dateLabel.className = 'show-label';
            dateLabel.textContent = 'DATE';
        
            const showDate = document.createElement('p');
            showDate.className = 'show-date';
            showDate.textContent = show.date;

            const venueLabel = document.createElement('p');
            venueLabel.className = 'show-label';
            venueLabel.textContent = 'VENUE';
        
            const showVenue = document.createElement('p');
            showVenue.className = 'show-venue';
            showVenue.textContent = show.venue;

            const locationLabel = document.createElement('p');
            locationLabel.className = 'show-label';
            locationLabel.textContent = 'LOCATION';
        
            const showLocation = document.createElement('p');
            showLocation.className = 'show-location';
            showLocation.textContent = show.location;
        
            const showButton = document.createElement('button');
            showButton.className = 'buy-tickets';
            showButton.innerText = 'BUY TICKETS';

            showItem.appendChild(dateLabel);
            showItem.appendChild(showDate);
            showItem.appendChild(venueLabel);
            showItem.appendChild(showVenue);
            showItem.appendChild(locationLabel);
            showItem.appendChild(showLocation);
            showItem.appendChild(showButton);

            showsContainer.appendChild(showItem);
        
            showItem.addEventListener('click', () => {
                document.querySelectorAll('.show-item').forEach(item => {
                    item.classList.remove('selected');
                });
                showItem.classList.add('selected');
            });
        });
    }

    createShowItems();
});
