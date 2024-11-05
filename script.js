// Function to handle sleep hours input and give recommendations
function submitSleep() {
    const sleepHours = parseInt(document.getElementById("sleep-hours").value);
    const recommendationDiv = document.getElementById("recommendation");

    // Basic input validation
    if (isNaN(sleepHours) || sleepHours < 0 || sleepHours > 24) {
        recommendationDiv.innerHTML = "<p style='color: red;'>Please enter a valid number of hours between 0 and 24.</p>";
        return;
    }

    // Provide personalized recommendations based on sleep hours
    if (sleepHours < 6) {
        recommendationDiv.innerHTML = "<p>It looks like you're not getting enough sleep. Try to aim for 7-9 hours of sleep to feel more refreshed and energized.</p>";
    } else if (sleepHours >= 6 && sleepHours < 7) {
        recommendationDiv.innerHTML = "<p>Your sleep is on the shorter side. Aim for at least 7-8 hours to improve your overall health and performance.</p>";
    } else if (sleepHours >= 7 && sleepHours <= 9) {
        recommendationDiv.innerHTML = "<p>Great job! You're getting an adequate amount of sleep. Keep it up!</p>";
    } else if (sleepHours > 9) {
        recommendationDiv.innerHTML = "<p>You're getting plenty of sleep, but too much sleep can also impact your health. Aim for 7-9 hours for optimal rest.</p>";
    }
}
