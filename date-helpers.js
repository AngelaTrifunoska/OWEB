const isWeekend = day {
    //6 for saturday, 0 for sunday
    return day % 7 == 6 || day % 7 == 0;

}

export { isWeekend }