const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#input-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const form = document.querySelector('.update-container').value.trim();
    const id = form.getAttribute('data-id');

    console.log(id);
    if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                post_content: content
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Failed to update post");
        }
    }
};

const deletePostHandler = async (event) => {
    event.preventDefault();

    const form = document.querySelector('.update-container').value.trim();
    const id = form.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Failed to update post");
    }
};

document.querySelector('#update-post-btn').addEventListener("click", updatePostHandler);
document.querySelector('#delete-post-btn').addEventListener("click", deletePostHandler);
