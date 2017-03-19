function reimg() {
new Image().src = "img/logo2.png";
document.getElementById('logo').src='img/logo2.png';
}

function reimg2() {
document.getElementById('logo').src='img/logo.png';
}

function colormouseover() {
    var btn = document.getElementsByClassName('btn');
    console.log(btn);
    btn.style.color='#fff';
    console.log(btn.style);
}

function showchangephoto() {
    document.getElementById('change-photo').style.display='block';
}

function hidechangephoto() {
    document.getElementById('change-photo').style.display='none';
}

function showchangename() {
    document.getElementById('change-name').style.display='block';
}


function hidechangename() {
    document.getElementById('change-name').style.display='none';
}

