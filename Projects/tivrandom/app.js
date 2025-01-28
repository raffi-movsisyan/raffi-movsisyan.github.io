let gumar = document.getElementById('gumar')
let number = document.getElementById('number')
let bet = document.getElementById('bet')
let random = document.getElementById('random')
let but = document.getElementById('but')
let but2 = document.getElementById('but2')
let partq = document.getElementById('partq')
let partqer = document.getElementById('partqer')
let help = 0;
but.addEventListener('click', function () {
    if (number.value < 11 && number.value != '' && number.value != '' && bet.value <= gumar.innerText) {
        random.innerText = Math.random() * 10 
        console.log(random.innerText = Math.round(Math.random() * 10))
        if (random.innerText === number.value) { gumar.innerText = parseInt(gumar.innerText) + parseInt(bet.value) }
        else { gumar.innerText = gumar.innerText - bet.value }
    }
})

but2.addEventListener('click',function(){
    if(help<5000 && partq.value != ''){
    help = help +   parseInt( partq.value) 
    gumar.innerText = parseInt( gumar.innerText) + parseInt(partq.value)
    let partqbox = document.createElement('div')
    partqer.style.width = 170 + 'px'
    partqbox.style.backgroundColor = 'black'
    let iqs = document.createElement('button')
    iqs.innerText = 'X'
    let span = document.createElement('span')
    span.innerText = 'partq ='
    // partqbox.append(span,partq.value,iqs)
    partqer.appendChild(partqbox)
    let partqboxinn = document.createElement('div')
    partqboxinn.style.padding = 10 + 'px'
    partqboxinn.append(span,partq.value,iqs)
    partqbox.appendChild(partqboxinn)
    partqbox.style.color = 'white'
    iqs.addEventListener('click',function(){
        partqbox.innerHTML = null
        gumar.innerText = gumar.innerText - partq.value
    })
    }
})