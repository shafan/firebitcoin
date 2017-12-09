function onError(event) {
    //console.error("Une erreur " + event.target.status + " s'est produite au cours de la réception du document.");
    document.querySelector("#error").innerHTML = "Erreur de connexion";
}

function onLoad(event) {
    if (this.status === 200) {
        let ticker = JSON.parse(this.responseText);
        document.getElementById("popup-content").childNodes[0].nodeValue = ticker.price + "€";
    } else {
        //console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        document.querySelector("#error").innerHTML = "Oups !!!";
    }
}

const req = new XMLHttpRequest();
req.onerror = onError;
req.onload = onLoad;

req.open('GET', 'https://paymium.com/api/v1/data/eur/ticker', true);
req.send(null);
