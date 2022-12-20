const topMenu = document.getElementById('tcm-top-menu');
const toggleTopMenuIcon = document.getElementById('tcm-toggle-top-menu');


document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        //click to toggle top menu icon
        topMenu.classList.toggle('hidden');     
        topMenu.classList.toggle('tcm-menu-res');     
    }else{
        //click outside of toggle
        if(topMenu.classList.contains('tcm-menu-res')){
            topMenu.classList.remove('tcm-menu-res');
            topMenu.classList.add('hidden');
        }
    
    }
    
})
