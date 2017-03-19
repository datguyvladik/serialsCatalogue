function redline1(){
    document.getElementById('atab1').classList.add('redline');
    document.getElementById('atab2').classList.remove('redline');
    document.getElementById('atab3').classList.remove('redline');
}

function redline2(){
    document.getElementById('atab2').classList.add('redline');
    document.getElementById('atab1').classList.remove('redline');
    document.getElementById('atab3').classList.remove('redline');
}

function redline3(){
    document.getElementById('atab3').classList.add('redline');
    document.getElementById('atab2').classList.remove('redline');
    document.getElementById('atab1').classList.remove('redline');
}