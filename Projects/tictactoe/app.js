let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let myscore = document.getElementById('myscore');
let enemyscore = document.getElementById('enemyscore');
let but = Array.from(document.getElementsByClassName('but'));

let imgs = [
    './images/rock.png',
    './images/paper.png',
    './images/mkrat.png'
];

for (let i = 0; i < but.length; i++) {
    but[i].addEventListener('click', function () {
        let audio = new Audio('rps.mp3');
        console.log(audio);
        img1.src = './images/rps.png';
        img2.src = './images/rps.png';
        audio.play();

        setTimeout(function () {
            audio.pause();
            img1.src = imgs[i];
            img2.src = imgs[Math.floor(Math.random() * imgs.length)];

            let img1Src = img1.src.split('/').pop();  // Get only the filename
            let img2Src = img2.src.split('/').pop();  // Get only the filename

            if (img1Src === 'rock.png' && img2Src === 'paper.png') {
                enemyscore.innerText = parseInt(enemyscore.innerText) + 1;
            } else if (img1Src === 'rock.png' && img2Src === 'mkrat.png') {
                myscore.innerText = parseInt(myscore.innerText) + 1;
            } else if (img1Src === 'paper.png' && img2Src === 'rock.png') {
                myscore.innerText = parseInt(myscore.innerText) + 1;
            } else if (img1Src === 'paper.png' && img2Src === 'mkrat.png') {
                enemyscore.innerText = parseInt(enemyscore.innerText) + 1;
            } else if (img1Src === 'mkrat.png' && img2Src === 'rock.png') {
                enemyscore.innerText = parseInt(enemyscore.innerText) + 1;
            } else if (img1Src === 'mkrat.png' && img2Src === 'paper.png') {
                myscore.innerText = parseInt(myscore.innerText) + 1;
            }

            if (myscore.innerText == 5) {
                alert('You win!');
                resetGame();
            } else if (enemyscore.innerText == 5) {
                alert('You lose!');
                resetGame();
            }
        }, 3100);
    });
}

function resetGame() {
    myscore.innerText = 0;
    enemyscore.innerText = 0;
    img1.src = './images/rps.png';
    img2.src = './images/rps.png';
}
