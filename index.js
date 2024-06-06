const monthNameEl= document.getElementById("month-name");
const dayNameE1= document.getElementById("day-name");
const dayNumEl= document.getElementById("day-number");
const yearEl= document.getElementById("year");

const date = new Date();
const month= date.getMonth()
monthNameEl.innerText= date.toLocalString("en",{
    month:"long"
})

dayNameE1.innerText= date.toLocaleString("en",{
    weekday:"long"
})


dayNumE1.innerText= date.getDate()

yearEl.innerText= date.getFullYear()
