const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#input-username").value.trim()
    const password = document.querySelector("#input-password").value.trim()

    if (username && password) {
        const response = await fetch('/api/users', {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": 'application/json' },
        });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else alert("Failed to sign up");
    }
    if (!username) {
        alert("Username required to sign up");
    } else if (!password) {
        alert("Password required to sign up");
    }
};

document.querySelector(".signup-form").addEventListener("submit", signupHandler);