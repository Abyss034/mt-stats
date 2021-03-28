
var start = new Date(Date.now());
var start_str = start.toISOString().split('T')[0]
input = document.createElement('input');
input.setAttribute('type', "date");
input.setAttribute('id', "end");
input.setAttribute('name', "trip-end");
input.setAttribute('min', start_str);
input.setAttribute('value', start_str);
document.getElementById("calendar").appendChild(input);

function calcule()
{
    var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
    var start = Date.now();
    var end = Date.parse(document.getElementById("end").value);
    var nbdays = (end - start) / (1000 * 3600 * 24);
    var repa = document.getElementById("reparation").value;
    var coef = repa / nbdays
    var guard = Math.round(coef * 0.010123097 - 1.34961127308066)
    if (guard <= 0) {
        guard = 0
    }
    var nbweeks = Math.trunc(nbdays / 7);
    var guardbuycoast = guard * 1000
    var guardweekscoast = nbweeks * guard * 500
    var guardcoast = guardbuycoast + guardweekscoast
    if (lang == 'fr') {
        var msg = "Nombre de gardiens: " + guard + "\nAchat initial: " + guardbuycoast + "€\nSalaires total: " + guardweekscoast + "€"
        if (guardcoast > repa) {
            msg += "\nATTENTION\nle coût de reparation est moins cher!"
        }
    } else {
        var msg = "Number of groundsmen: " + guard + "\nInitial purchase: " + guardbuycoast + "$\nTotal wages: " + guardweekscoast + "$"
        if (guardcoast > repa) {
            msg += "\nWARNING\nthe repair cost is cheaper!"
        }
    }
    alert(msg);
}
