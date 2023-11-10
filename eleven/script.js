const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
 console.log(e); 
 insert.innerHTML = `
 <div class="key">

        <h4>event.key</h4>
        <div class="btnval"> ${e.key === ' ' ? 'Space' : e.key}</div>
    </div>
    <div class="code">
        <h4>event.keyCode</h4>
        <div class="btnval"> ${e.keyCode}</div>
    </div>
    <div class="which">
        <h4>event.code</h4>
        <div class="btnval"> ${e.code}</div>
    </div>
    `
})