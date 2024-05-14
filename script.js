document.addEventListener('DOMContentLoaded', (event) => {
    const timeCounterElement = document.getElementById('time-counter');
    const image = document.getElementById('image');
    const indovinello = document.getElementById('indovinello');
    // Imposta la data e l'ora dell'evento (es. 1 gennaio 2024, 00:00:00)
    const eventDate = new Date('2024-05-14T18:46:00');

    function updateTimeCounter() {
        const now = new Date();
        const differenceInTime = now - eventDate;

        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);
        var giorni="giorni";
        var ore="ore";
        var minuti="minuti";
        var secondi="secondi";
        if (days===1)
        {
            giorni="giorno";
        }
           if (hours===1)
        {
            ore="ora";
        }
         if (seconds===1)
        {
            secondi="secondo";
        }
         if (minutes===1)
        {
            minuti="minuto";
        }
        timeCounterElement.innerHTML = `Sono passati ${days} ${giorni}, ${hours} ore, ${minutes} ${minuti} e ${seconds} ${secondi} da quando non abbiamo nominato ...<br>` ;
        image.innerHTML =`<br> <img src="emoji.png" style="height: 200px;"> <img src="symon.png" style="height: 200px;"><br>`;
        indovinello.innerHTML=`<img src="sicily.png" style="height: 200px;"><img src="plus.png" style="height: 150px;"><img src="occhiali.png" style="height: 200px;"><img src="equal.png" style="height: 150px;"><img src="question.png" style="height: 200px;">`;
    }
    // Aggiorna il contatore ogni secondo
    setInterval(updateTimeCounter, 1000);
    updateTimeCounter();
});