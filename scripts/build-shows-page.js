document.addEventListener("DOMContentLoaded", async () => {
    const showsContainer = document.querySelector('.shows__grid');

    // Function to create show items
    function createShowItems(shows) {
        showsContainer.innerHTML='';

        shows.forEach(show => {
            const showItem = document.createElement('div');
            showItem.className = 'show-item';

            const dateLabel = document.createElement('p');
            dateLabel.className = 'show-label';
            dateLabel.textContent = 'DATE';
        
            const showDate = document.createElement('p');
            showDate.className = 'show-date';
            showDate.textContent = new Date(show.date).toLocaleDateString();

            const venueLabel = document.createElement('p');
            venueLabel.className = 'show-label';
            venueLabel.textContent = 'VENUE';
        
            const showVenue = document.createElement('p');
            showVenue.className = 'show-venue';
            showVenue.textContent = show.place;

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
    async function loadShows(){
        const shows = await api.getShows();
        createShowItems(shows);
    }

    loadShows();
});
