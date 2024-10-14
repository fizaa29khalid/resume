document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.querySelector('.skills');
    // Initially hide the skills section
    skillsSection.style.display = 'none';
    toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills Section';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills Section';
        }
    });
});
