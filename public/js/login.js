const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#input-username").value.trim()
    const password = document.querySelector("#input-password").value.trim()

    if (username && password) {
        const response = await fetch('/api/users.login', {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: { "Content-Type": 'application/json' },
        });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else alert("Failed to login");
    }
    if (!username) {
        alert("Username required to login");
    } else if (!password) {
        alert("Password required to login");
    }
};

document.querySelector(".login-form").addEventListener("submit", loginHandler);