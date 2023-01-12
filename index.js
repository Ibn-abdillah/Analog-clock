const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function start(){
    const count = new Date()
    
    const hours = count.getHours();
    const minutes = count.getMinutes();
    const seconds = count.getSeconds();

    const hourdeg = (hours / 12) * 360;
       hour.style.transform = 'rotate('+ hourdeg +'deg)'
    const mindeg = (minutes / 60) * 360;
       minute.style.transform = 'rotate('+ mindeg +'deg)'
    const secdeg = (seconds / 60) * 360;
       second.style.transform = 'rotate('+ secdeg +'deg)'
}
setInterval(start, 1000);

start()
