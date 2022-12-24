//adding images and functionality to link buttons
window.onload = () => {
    const linkedinBtn = document.querySelector("#linkedin-button");
    const githubBtn = document.querySelector("#github-button");

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/ryangoggin20/", "_blank");
    }
    linkedinBtn.addEventListener("click", goToLinkedIn);

    const goToGithub = () => {
        window.open("https://github.com/ryangoggin", "_blank").focus();
    }
    githubBtn.addEventListener("click", goToGithub);
}
