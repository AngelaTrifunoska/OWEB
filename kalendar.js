const calendar = document.querySelector("#app-calendar");

for (let day = 1; day <= 31; day++) {

    calendar.insertAdjacentHTML("beforeend", '<div class="day">${day}</div')


}