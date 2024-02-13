const backArrow = document.querySelectorAll('.back')
backArrow.forEach((item) => {
    item.addEventListener('click', (event) => {
        //get div element based of element that has been clicked
        let project 
        (event.target.nodeName == 'svg')? project = event.target.parentElement.parentElement.parentElement : project = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        const projectClass = project.getAttribute('class')
        let totalImage
        (projectClass === 'cashir-desktop')? totalImage = 4: totalImage = 2

        const img = project.querySelector('div').querySelector('img')
        const curretImgPath = img.getAttribute('src')
        const curretImgIndex = curretImgPath.charAt(curretImgPath.length-5)
        
        if(curretImgIndex == 1){
            img.setAttribute('src',`assets\\img\\project\\${projectClass}\\${totalImage}.png`)
        }else{
            img.setAttribute('src',`assets\\img\\project\\${projectClass}\\${curretImgIndex-1}.png`)
        }
    })
})

const nextArrow = document.querySelectorAll('.next')
nextArrow.forEach((item) => {
    item.addEventListener('click', (event) => {
        //get div element based of element that has been clicked
        let project 
        (event.target.nodeName == 'svg')? project = event.target.parentElement.parentElement.parentElement : project = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        const projectClass = project.getAttribute('class')
        let totalImage
        (projectClass === 'cashir-desktop')? totalImage = 4: totalImage = 2

        const img = project.querySelector('div').querySelector('img')
        const curretImgPath = img.getAttribute('src')
        const curretImgIndex = curretImgPath.charAt(curretImgPath.length-5)

        if(curretImgIndex == totalImage){
            img.setAttribute('src',`assets\\img\\project\\${projectClass}\\${1}.png`)
        }else{
            img.setAttribute('src',`assets\\img\\project\\${projectClass}\\${parseInt(curretImgIndex)+1}.png`)
        }
    })
})
