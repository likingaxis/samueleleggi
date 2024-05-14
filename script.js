document.addEventListener('DOMContentLoaded', (event) => {
    const timeCounterElement = document.getElementById('time-counter');

    // Imposta la data e l'ora dell'evento (es. 1 gennaio 2024, 00:00:00)
    const eventDate = new Date('2024-05-13T00:00:00');

    function updateTimeCounter() {
        const now = new Date();
        const differenceInTime = now - eventDate;

        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

        timeCounterElement.innerHTML = `Sono passati ${days} giorni, ${hours} ore, ${minutes} minuti e ${seconds} secondi da quando non abbiamo nominato ...`;

        if (differenceInTime < 0) {
            timeCounterElement.innerHTML = "L'evento non è ancora avvenuto";
        }
    }

    // Aggiorna il contatore ogni secondo
    setInterval(updateTimeCounter, 1000);
    updateTimeCounter();
});
