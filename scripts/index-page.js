const commentForm = document.getElementById('comment-form');
const commentsSection = document.querySelector('.comments-section');
const commentTemplate = document.getElementById('comment-template');

let comments = []; // Array to store comments

function renderComment(comment){ 
    /*Create comment container */
    const commentBox=document.createElement('div'); /*- making new divs*/
    commentBox.classList.add('comment-box'); /*- making new class for each div*/

    /*Creating the profile image element - filling SRC and alt */
    const profileImage=document.createElement('img');
    profileImage.src=comment.profileImage;
    profileImage.alt="profile";
    profileImage.classList.add('profile-image');

    /*Creating the comment content container (surrounds text)*/
    const commentContent=document.createElement('div');
    commentContent.classList.add('comment-content');

    /*Creates the name element */
    const commentName=document.createElement('p');
    commentName.classList.add('comment-name');
    comment.textContent=comment.name;

    /*Create date element */
    const commentDate=document.createElement('p');
    commentDate.classList.add('comment-date');
    commentDate.textContent=comment.timestamp;
    
    /*Create text element */
    const commentText= document.createElement('p');
    commentText.classList.add('comment-text');
    commentText.textContent=comment.text;

    /*Appends the elements to the comment content container  */
    commentContent.appendChild(commentName);
    commentContent.appendChild(commentDate);
    commentContent.appendChild(commentText);

    /*Appends the elements to the comment box container */
    commentBox.appendChild(profileImage);
    commentBox.appendChild(commentContent);

    const commentsContainer=document.getElementById('comments__container');
    commentsContainer.appendChild(commentBox);
}





/*commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const date = new Date().toLocaleString(); // Get current date and time

    // Add comment to the array
    comments.push({ name, comment, date });

    // Clear the input fields
    commentForm.reset();

    // Display the latest three comments
    displayComments();
});

function displayComments() {
    // Clear existing comments
    commentsSection.innerHTML = '';

    // Get the last three comments
    const recentComments = comments.slice(-3).reverse();

    recentComments.forEach(({ name, comment, date }) => {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.style.display = 'flex'; // Show the cloned element

        commentElement.querySelector('.comment-date').textContent = date;
        commentElement.querySelector('.comment-text').textContent = `${name}: ${comment}`;

        commentsSection.appendChild(commentElement);
    });
}*/
