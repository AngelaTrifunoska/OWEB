import { isWeekend } from "./date-helpers.js";


const calendar = document.querySelector("#app-calendar");


for (let day = 1; day <= 31; day++) {

    const date = new Date(2021, 10);

    const options = { weekdays: "short" };

    const dayName = new Intl.DateTime("en-US", options).format(date);

    const weekend = isWeekend(day);


    calendar.insertAdjacentHTML("beforeend", '< div class ="day ${weekend ? "weekend" :""}" > ${ day } < /div>');

}