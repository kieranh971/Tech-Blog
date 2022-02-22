const createPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#input-title').value.trim()
    const postContent = document.querySelector('#post-content').value.trim()

    if (title && postContent) {
        const response = await fetch('/api.posts', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                post_content: postContent,
            }),
            headers: { "Content-Type": 'application/json' },
        })
            console.log(response)
            if (response.ok) {
                document.location.replace('/dashboard');
            } else alert("New post failed");
    }
    if (!title) {
        alert("Title required");
    } else if (!content) {
        alert("Content required");
    }
};

document.querySelector(".new-post-form").addEventListener("submit", createPost);