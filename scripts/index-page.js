
document.addEventListener("DOMContentLoaded", async () => {
    const commentsContainer = document.getElementById('comments__container');
    const commentForm = document.getElementById('comment-form');   

    function renderComment(comments){ 
        commentsContainer.innerHTML='';
        comments.forEach(comment =>{
            /*Create comment container */
            const commentBox=document.createElement('div'); /*- making new divs*/
            commentBox.classList.add('comment-box'); /*- making new class for each div*/

            /*Creating the profile image element - filling SRC and alt */
            const profileImage=document.createElement('img');
            profileImage.src='';
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
            commentDate.textContent= new Date(comment.timestamp).toLocaleDateString();
            
            /*Create text element */
            const commentText= document.createElement('p');
            commentText.classList.add('comment-text');
            commentText.textContent=comment.comment;


            commentHeader.appendChild(commentName);
            commentHeader.appendChild(commentDate);
            /*Appends the elements to the comment content container  */
            commentContent.appendChild(commentHeader);
            commentContent.appendChild(commentText);

            /*Appends the elements to the comment box container */
            commentBox.appendChild(profileImage);
            commentBox.appendChild(commentContent);

            commentsContainer.appendChild(commentBox);
        });
        
    }
    async function renderAllComments(){
        const comments=await api.getComments();
        renderComment(comments);
    }
    
    commentForm.addEventListener('submit', async (event) =>{
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        const newComment = {
            name: nameInput.value,
            comment: commentInput.value,
        };
        await api.postComment(newComment);

        renderAllComments();
        nameInput.value='';
        commentInput.value='';
    });
    /*function handleFormSubmit(event){
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
    }*/


    renderAllComments();

});