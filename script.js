fetch('./data.json')
    .then(r => {return r.json()})
    .then(calculate)

function calculate(data) {
    const day = document.querySelector('.day')
    const week = document.querySelector('.week')
    const month = document.querySelector('.month')

    day.addEventListener('click', f_day)
    week.addEventListener('click', f_week)
    month.addEventListener('click', f_month)

    let day_hours = [];
    let last_day_hours = [];
    let week_hours = [];
    let last_week_hours = [];
    let month_hours = [];
    let last_month_hours = [];

    for (let i = 0; i < 6; i++) {
        day_hours.push(data[i].timeframes.daily.current)
    }

    for (let i = 0; i < 6; i++) {
        last_day_hours.push(data[i].timeframes.daily.previous)
    }

    for (let i = 0; i < 6; i++) {
        week_hours.push(data[i].timeframes.weekly.current)
    }

    for (let i = 0; i < 6; i++) {
        last_week_hours.push(data[i].timeframes.weekly.previous)
    }

    for (let i = 0; i < 6; i++) {
        month_hours.push(data[i].timeframes.monthly.current)
    }

    for (let i = 0; i < 6; i++) {
        last_month_hours.push(data[i].timeframes.monthly.previous)
    }

    const hours = document.querySelectorAll('.hours')
    const last_hours = document.querySelectorAll('.last-hours')
    const title = document.querySelectorAll('.title')

    function f_day() {
        title.forEach(item => {
            item.innerHTML = 'Day'
        })

        hours.forEach((item, i) => {
            item.innerHTML = day_hours[i]
        })

        last_hours.forEach((item, i) => {
            item.innerHTML = last_day_hours[i]
        })

        day.style.color = 'white';
        week.style.color = 'hsl(236, 100%, 87%)';
        month.style.color = 'hsl(236, 100%, 87%)';
    }

    function f_week() {
        title.forEach(item => {
            item.innerHTML = 'Week'
        })

        hours.forEach((item, i) => {
            item.innerHTML = week_hours[i]
        })

        last_hours.forEach((item, i) => {
            item.innerHTML = last_week_hours[i]
        })

        day.style.color = 'hsl(236, 100%, 87%)';
        week.style.color = 'white';
        month.style.color = 'hsl(236, 100%, 87%)';
    }

    function f_month() {
        title.forEach(item => {
            item.innerHTML = 'Month'
        })

        hours.forEach((item, i) => {
            item.innerHTML = month_hours[i]
        })

        last_hours.forEach((item, i) => {
            item.innerHTML = last_month_hours[i]
        })

        day.style.color = 'hsl(236, 100%, 87%)';
        week.style.color = 'hsl(236, 100%, 87%)';
        month.style.color = 'white';
    }

    f_week();
}

