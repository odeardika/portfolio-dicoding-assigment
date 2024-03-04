//* Project Image Arrow Logic
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

//* Profile More Button
const profileMoreButton = document.querySelector('#profile-more')
const profileHiddenText = document.querySelector('#profile-hidden')

profileMoreButton.addEventListener('click', event => {
    const moreButton = event.target
    const moreText = event.target.nextElementSibling
    const hiddenText = event.target.nextElementSibling.nextElementSibling
    
    moreButton.style.display = 'none'
    moreText.style.display = 'inline'
    hiddenText.firstChild.style.display = 'inline'
    hiddenText.style.display = 'inline'
})

profileHiddenText.addEventListener('click', event => {
    hiddenText = event.target
    moreText = event.target.parentElement.previousElementSibling
    moreButton = event.target.parentElement.previousElementSibling.previousElementSibling

    moreButton.style.display = 'inline'
    moreText.style.display = 'none'
    hiddenText.style.display = 'none'
})

// Navigation Burger Button
const burgerBotton = document.querySelector('.nav-button')
burgerBotton.addEventListener('click', event => {
    console.log(event.target)
    const navigation = document.querySelector('#navigation')
    navigation.classList.toggle('navigation-open')
    navigation.style.right = 0
    document.querySelector('#navigation-list').classList.toggle('navigation-list-open')
}) 
