function nohide(){
    if (document.getElementById('modal').className.includes("hidden")){
     document.getElementById('modal').classList.remove('hidden');
     } else {
        document.getElementById('modal').classList.add('hidden');
    }
}