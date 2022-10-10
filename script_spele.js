let adrese = window.location.hash
adrese = decodeURI(adrese)
adrese = adrese.replace("#"," ")
adrese = adrese.split(",")
let vards = adrese[0]
document.querySelector(".title").innerHTML = 'Sveiks, ' + vards +'!'






