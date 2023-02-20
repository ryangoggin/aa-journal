window.onload = () => {
    //adding images and functionality to link buttons
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

    //make project containers links to their GitHub repos
    const backendProj = document.querySelector(".backend_project");

    const goToBackendRepo = () => {
        window.open("https://github.com/ryangoggin/AirBnB-clone-project", "_blank");
    }
    backendProj.addEventListener("click", goToBackendRepo);

    const frontendProj = document.querySelector(".frontend_project");

    const goToFrontendRepo = () => {
        window.open("https://github.com/ryangoggin/AirBnB-clone-project", "_blank");
    }
    frontendProj.addEventListener("click", goToFrontendRepo);
}
