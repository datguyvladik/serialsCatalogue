function hiden(){
    if (document.getElementById('menu').className.includes("hidden") && document.getElementById('triangle-menu').className.includes("hidden")) {
     document.getElementById('menu').classList.remove('hidden');
     document.getElementById('triangle-menu').classList.remove('hidden');
    } else {
        document.getElementById('menu').classList.add('hidden');
        document.getElementById('triangle-menu').classList.add('hidden');
    }
}

function oskarhiden(){
    if (document.getElementById('oskar').className.includes("hidden") && document.getElementById('triangle-oskar').className.includes("hidden")) {
     document.getElementById('oskar').classList.remove('hidden');
     document.getElementById('triangle-oskar').classList.remove('hidden');
    } else {
        document.getElementById('oskar').classList.add('hidden');
        document.getElementById('triangle-oskar').classList.add('hidden');
    }
}