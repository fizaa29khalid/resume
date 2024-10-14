document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills');
    const skillsSection = document.querySelector('.skills') as HTMLElement;

    // Initially hide the skills section
    skillsSection.style.display = 'none';

    toggleButton?.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills Section';
        } else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills Section';
        }
    });
});
