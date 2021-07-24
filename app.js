const dateInput = document.querySelector('.date-box');
const submitButton = document.querySelector('.sub-but');

submitButton.addEventListener("click", getReqDate);

function getReqDate(event) {
    const reqTime = dateInput.value;
    const reqTimeDate = new Date(reqTime);
    const currentDate = new Date();
    if (reqTimeDate < currentDate) {
        alert("Enter A Future Date");
        location.reload();
    }
    console.log(days);


    function countdown() {
        window.scroll({ bottom: 0, behavior: 'smooth' })

        const heading = document.querySelector('.heading');
        const reqTimeDate = new Date(reqTime);
        const currentDate = new Date();

        const daysItem = document.getElementById('big-text-day');
        const hoursItem = document.getElementById('big-text-hour');
        const minutesItem = document.getElementById('big-text-minute');
        const secondsItem = document.getElementById('big-text-second');
        const diff = (reqTimeDate - currentDate);

        const totalseconds = diff / 1000;

        const days = Math.floor(totalseconds / 3600 / 24);
        const hours = Math.floor((totalseconds / 3600) % 24);
        const mins = Math.floor((totalseconds / 60) % 60);
        const seconds = Math.floor(totalseconds % 60);

        daysItem.innerHTML = days;
        hoursItem.innerHTML = hours;
        minutesItem.innerHTML = mins;
        secondsItem.innerHTML = seconds;
        heading.innerHTML = "Time Until " + reqTime;

    }
    setInterval(countdown, 1000)
}