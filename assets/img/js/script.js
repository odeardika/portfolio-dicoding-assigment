const backArrowCashirDesktop = document.getElementById('back-cashir-desktop')

backArrowCashirDesktop.addEventListener('click', ()=>{
    const img = document.getElementById('cashir-desktop-img')
    let srcAtribut = img.getAttribute('src')
    
    if(srcAtribut.charAt(srcAtribut.length-5) == 1){
        img.setAttribute('src',`assets\\img\\project\\cashir-desktop\\${4}.png`)
    }else{
        img.setAttribute('src',`assets\\img\\project\\cashir-desktop\\${(srcAtribut.charAt(srcAtribut.length-5))-1}.png`)
    }
    
})