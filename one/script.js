const panels = document.querySelectorAll('.panel');
// puts all the panels in a node list 
console.log(panels)

// target the specific panel to active


panels.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}