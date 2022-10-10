let adrese = window.location.hash
adrese = decodeURI(adrese)
adrese = adrese.replace("#"," ")
adrese = adrese.split(",")
let vards = adrese[0]
document.querySelector(".title").innerHTML = 'Sveiks, ' + vards +'!'

//Array
let laukumaSaturs = ['🤩','🥳','😎','🤩','🥳','😎']
let atvertieLaukumi = []
let pedejieDivi = []

function veiktGajienu(laukums){
    
    let atvertsJaunsLaukums = false //Boolean

    if(atvertieLaukumi.indexOf(laukums) == -1)
    {
        atvertsJaunsLaukums = true
    }
    else
    {
        atvertsJaunsLaukums = false
    }

    if(atvertsJaunsLaukums)
    {
        document.querySelector('#'+laukums+' div').style.visibility = "visible";
        pedejieDivi.push(laukums)
    }

    if(pedejieDivi.length == 2)
    {
        let atverts1 = pedejieDivi[0].replace('L','')
        let atverts2 = pedejieDivi[1].replace('L','')

        console.log(atverts1)
        
        atverts1 = parseInt(atverts1,10)
        atverts2 = parseInt(atverts2,10)

        if(laukumaSaturs[atverts1]==laukumaSaturs[atverts2]){
            console.log('Atvērti vienādi laukumi')
            atvertieLaukumi.push(pedejieDivi[0],pedejieDivi[1])
        }
    }
}


