// Function to update the time
function updateTime() {
    const timezone = document.getElementById('timezone').value;
    let timeString;
    if (timezone === 'local') {
        timeString = new Date().toLocaleTimeString();
    } else {
        timeString = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    }
    document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();
document.getElementById('timezone').addEventListener('change', updateTime);
