const open = document.getElementById('open')

const modalContainer = document.getElementById('modal_container')

const close = document.getElementById('close')

const initialFn = () => {
    setTimeout(() => {
        modalContainer.classList.add('show');
    },5000)
}
window.onload = initialFn()


open.addEventListener('click', () => {
    modalContainer.classList.add('show');
    // console.log('clicked')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})