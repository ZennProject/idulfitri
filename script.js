let userName = "";
let audio = document.getElementById('eidSong');
        function submitName() {
            userName = document.getElementById('namaInput').value;
            if (userName) {
                document.getElementById('greeting').innerText = `Happy Eid Mubarak, ${userName}`;
                document.getElementById('namaPengunjung').innerText = userName;
                document.getElementById('popupNamaPengunjung').innerText = userName;
                document.getElementById('popup').style.display = 'none';
                document.getElementById('mainContent').style.display = 'block';
                document.querySelector('.card').style.display = 'block';
                document.getElementById('messageBox').style.display = 'block';
                audio.play();
            }else {
                alert("isi nama dulu yaa...");
            }
        }


function closePopupCard() {
    document.getElementById('popupCard').style.display = 'none';
    document.getElementById('extraImage').style.display = 'none';
}
function flipCard() {
    let card = document.getElementById('cardInner');
    let backText = document.getElementById('backText');
    if (!card.classList.contains('flipped')) {
        card.classList.add('flipped');
        document.querySelector('.front').style.display = 'none';
        backText.style.display = 'block';
    } else {
        card.classList.remove('flipped');
        document.querySelector('.front').style.display = 'block';
        backText.style.display = 'none';
    }
}
function showPopupCard() {
    document.getElementById('popupCard').style.display = 'flex';
    document.getElementById('extraImage').style.display = 'block';
    let popupChat = document.getElementById('popupChat');
    popupChat.style.display = 'flex';
    setTimeout(() => {
        popupChat.classList.add('fade-out');
        setTimeout(() => {
            popupChat.style.display = 'none';
            popupChat.classList.remove('fade-out');
        }, 1000);
    }, 3000);
}
function sendMessage() {
    let message = document.getElementById('messageInput').value;
    if (message) {
        let telegramBotToken = '7924423386:AAFBgJE3TsqKQbHnRBfoOdvXo5b77Ng8Au8';
        let chatId = '1144262156';
        let fullMessage = `Pesan dari ${document.getElementById('namaPengunjung').innerText} - Eid Mubarak!: ${message}`;
        
        let url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(fullMessage)}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                alert('Pesan terkirim!');
                document.getElementById('messageInput').value = '';
            })
            .catch(error => console.error('Error:', error));
    }{
        alert("Pesan tidak boleh kosong!");
        return;
    }
}

function handleKeyPress(event, type) {
    if (event.key === 'Enter') {
        if (type === 'name') {
            submitName();
        } else if (type === 'message') {
            sendMessage();
        }
    }
}
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        audio.pause();
    } else {
        audio.play();
    }
});
