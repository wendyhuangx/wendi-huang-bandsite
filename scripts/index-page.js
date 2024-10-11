document.addEventListener("DOMContentLoaded", function() {    
    let comments = [
        {
            name:'Victor Pinto',
            timestamp: '11/02/2023',
            text:'This is Art',
            profileImage:""
        },
        {
            name:'Christina Cabrera',
            timestamp: '10/28/2023',
            text:'I feel blessed to have seen them in person!',
            profileImage:""
        },
        {
            name:'Issac Tadesse',
            timestamp: '10/20/2023',
            text:"I can't stop listening, everything I hear one of their songs I feel bessed",
            profileImage:""
            
        }
    ]; // Array to store comments

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