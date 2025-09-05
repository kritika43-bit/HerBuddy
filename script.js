function postMessage() {
    let input = document.getElementById("postInput");
    let message = input.value.trim();
    if (message === "") return;

    let postContainer = document.getElementById("postContainer");
    let newPost = document.createElement("div");
    newPost.textContent = "Anonymous: " + message;
    newPost.className = "post";
    postContainer.prepend(newPost);

    input.value = "";
}

async function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();
    if (message === "") return;

    let messagesDiv = document.getElementById("messages");
    let newMessage = document.createElement("div");
    newMessage.textContent = "You: " + message;
    messagesDiv.appendChild(newMessage);

    input.value = "";
}
