// setInterval(getTime,1000) co secunde nie wazne czy poprzedni przeszła

document.addEventListener('DOMContentLoaded', () => {
    getTime()
})


$(function() {    $( "#zegar" ).draggable();  })

function getTime()
{ 
    let czas = new Date()
    
    let godz = czas.getHours()
    let min = czas.getMinutes()     
    let sec =czas.getSeconds()   
    
    godz>12?godz-=12 : godz

    let secStopnie = 360*sec/60;
    let minStopnie = 360*min/60;
    let godzStopnie = 360*(godz/12);

    
    
    console.log(godz,godzStopnie)


    document.getElementById('godz').style.transform= `rotate(${godzStopnie}deg)`
    document.getElementById('min').style.transform= `rotate(${minStopnie}deg)`
    document.getElementById('sec').style.transform= `rotate(${secStopnie}deg)`
    
    setTimeout(getTime,1000)


}

element.addEventListener('mousemove', function(e) {
    console.log('Pozycja myszki:');
    console.log('x: ', e.pageX);
    console.log('y: ', e.pageY);
});

