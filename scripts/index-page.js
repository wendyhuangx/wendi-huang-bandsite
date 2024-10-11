document.addEventListener("DOMContentLoaded", function() {    
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

        const commentHeader=document.createElement('div');
        commentHeader.classList.add('comment-header');

        /*Creates the name element */
        const commentName=document.createElement('p');
        commentName.classList.add('comment-name');
        commentName.textContent=comment.name;

        /*Create date element */
        const commentDate=document.createElement('p');
        commentDate.classList.add('comment-date');
        commentDate.textContent=comment.timestamp;
        
        /*Create text element */
        const commentText= document.createElement('p');
        commentText.classList.add('comment-text');
        commentText.textContent=comment.text;


        commentHeader.appendChild(commentName);
        commentHeader.appendChild(commentDate);
        /*Appends the elements to the comment content container  */
        commentContent.appendChild(commentHeader);
        commentContent.appendChild(commentText);

        /*Appends the elements to the comment box container */
        commentBox.appendChild(profileImage);
        commentBox.appendChild(commentContent);

        const commentsContainer=document.getElementById('comments__container');
        commentsContainer.appendChild(commentBox);
    }
    function renderAllComments(){
        const commentsContainer=document.getElementById('comments__container');
        commentsContainer.innerHTML = '';
        comments.forEach(renderComment);
    }

    function handleFormSubmit(event){
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');


        const newComment = {
            name: nameInput.value,
            timestamp: new Date().toLocaleDateString(),
            text: commentInput.value,
            profileImage: "../assets/images/band.jpg"
        };

        comments.unshift(newComment);


        renderAllComments();

        nameInput.value="";
        commentInput.value="";
    }

    document.getElementById('comment-form').addEventListener('submit', handleFormSubmit);

    renderAllComments();

});