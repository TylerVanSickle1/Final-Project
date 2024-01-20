$(document).ready(function(){
    let dName = $('#dName');
    let textArea = $('#formTextArea');
    let commentContainer = $('#commentContainer');

    $('#submitButton').on('click', function(event) {
        event.preventDefault(); 

        if (dName.val() === "") {
            alert('Please enter your User Name!');
        } else if (textArea.val() === ""){
            alert('Please Enter Your Comment!');
        } else {
            let commentBox = $(`
                <div class="commentBox">
                    <span class="iconUserName">
                        <span class="material-symbols-outlined icon">
                            person
                        </span>
                        <span id="userName" class="userCommentName">
                            ${dName.val()}
                        </span>
                    </span>
                    <p class="commentBoxP">
                        <span class="commentText">${textArea.val()}</span>
                        <input type="text" class="editInput tNone" required/>
                        <button class="editButton">Edit</button>
                        <button class="saveButton tNone">Re-Submit</button>
                        <button class="deleteButton">Delete</button>
                    </p>
                </div>
                <br>
            `);

            commentBox.find('.deleteButton').on('click', function(){
                $(this).closest('.commentBox').remove();
            });

            commentBox.find('.editButton').on('click', function(){
                let box = $(this).closest('.commentBox');
                box.find('.commentText').toggleClass('tNone');
                box.find('.editInput').toggleClass('tNone');
                box.find('.editButton, .deleteButton').toggleClass('tNone');
                box.find('.saveButton').toggleClass('tNone');
                
            });
            commentBox.find('.saveButton').on('click', function() {
                let box = $(this).closest('.commentBox');
                let newText = box.find('.editInput').val();
                if (newText.trim() === "") {
                    alert('Please enter text before saving.');
                } else {
                    box.find('.commentText').text(newText);
                    box.find('.commentText').toggleClass('tNone');
                    box.find('.editInput').toggleClass('tNone');
                    box.find('.editButton, .deleteButton').toggleClass('tNone');
                    box.find('.saveButton').toggleClass('tNone');
                }
            });
            commentContainer.prepend(commentBox);
            dName.val('');
            textArea.val('');
        }
    });
});