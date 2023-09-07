const shortenButton = document.querySelector('#shorten-it-btn')
const inputForm = document.querySelector('.form-btn-box form input')
const shortLinkTag = document.querySelector('.shortened-copyBtn p')
const longLinkTag = document.querySelector('.theLongLink')
const shortened = document.querySelector('.shortened')
const copyButton = document.getElementById('copyButton')
const errorMessage = document.getElementById('errorMessage')
const mobileMenu = document.querySelector('.mobileMenu')
const mobileMenuBtn = document.querySelector('.mobileMenuBtn')



async function shorten(){
        if(navigator.onLine){
                let longLink = inputForm.value;
                const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`)
                const shortLink = await result.json();   
                if(shortLink.ok){
                    shortLinkTag.textContent = shortLink.result.short_link2
                    if(shortened.classList.contains('hidden')){shortened.classList.toggle('hidden')}else{}
                    copyButton.textContent = 'Copy'
                    copyButton.style.color = 'white'
                    longLinkTag.textContent = longLink 
                    inputForm.value = ''
                    errorMessage.classList.add('hidden')
                    inputForm.classList.remove('error')
                }else{
                    errorMessage.classList.toggle('hidden')
                    inputForm.classList.toggle('error')
                }
        }else{}
}
shortenButton.addEventListener('click',shorten)

copyButton.onclick = ()=>{
    copyButton.textContent = 'Copied!'
    copyButton.style.color = "hsl(260, 8%, 14%)"
    window.navigator.clipboard.writeText(shortLinkTag.textContent)
}
mobileMenuBtn.onclick = ()=>{
    mobileMenu.classList.toggle('hidden')
}


