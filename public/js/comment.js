const commentHandler = async function (event) {
    event.preventDefault();

    const button = event.target
    const commentText = $(button).prev().val()
    const postId = $(button).siblings().eq(1).children().eq(0).val();

    if (commentText) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentText
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        document.location.reload();
    };
}


document
    .querySelector('.postContainer')
    .addEventListener('click', commentHandler);
//$('.postContainer').on('click', commentHandler);