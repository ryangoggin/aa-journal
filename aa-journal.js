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
    //Backend Airbnb Project:
    const backendProj = document.querySelector(".backend_project");

    const goToBackendRepo = () => {
        window.open("https://github.com/ryangoggin/GoggInn", "_blank");
    }
    backendProj.addEventListener("click", goToBackendRepo);

    // Frontend Airbnb Project:
    const frontendProj = document.querySelector(".frontend_project");

    const goToFrontendRepo = () => {
        window.open("https://github.com/ryangoggin/GoggInn", "_blank");
    }
    frontendProj.addEventListener("click", goToFrontendRepo);

    // Group Project:
    const groupProj = document.querySelector(".group_project");

    const goToGroupRepo = () => {
        window.open("https://github.com/ryangoggin/PixelPal", "_blank");
    }
    groupProj.addEventListener("click", goToGroupRepo);

    // Capstone Project:
    const capstoneProj = document.querySelector(".capstone_project");

    const goToCapstoneRepo = () => {
        window.open("https://github.com/ryangoggin/Goggbook", "_blank");
    }
    capstoneProj.addEventListener("click", goToCapstoneRepo);
}
