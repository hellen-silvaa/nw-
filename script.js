document.addEventListener('DOMContentLoaded', function () {
    const brightnessRange = document.getElementById('brightnessRange');
    const brightnessPercentage = document.getElementById('brightnessPercentage');

    function updateBackground() {
        const value = brightnessRange.value;
        brightnessRange.style.background = `linear-gradient(to right, #ffffff ${value}%, #d3d3d3 ${value}%)`;
        brightnessPercentage.textContent = `${value}%`;
    }

    brightnessRange.addEventListener('input', updateBackground);

    // Initialize the background on page load
    updateBackground();
});