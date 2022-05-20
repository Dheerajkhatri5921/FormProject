const open = document.getElementById('open')

const modalContainer = document.getElementById('modal_container')

const close = document.getElementById('close')


function mobileScreen(x) {
    if (x.matches) {
        //if it is a mobile screen.
        //it will run after every 5 seconds if the modal is closed.
        setInterval(() => {
            if (!modalContainer.classList.contains('show')) {
                modalContainer.classList.add('show');
            }

        }, 5000)

        close.addEventListener('click', () => {
            modalContainer.classList.remove('show');
        })

    } else {
        //if it is a desktop
        open.addEventListener('click', () => {
            modalContainer.classList.add('show');
        })
        close.addEventListener('click', () => {
            modalContainer.classList.remove('show');
        })

    }
}

var x = window.matchMedia("(max-width: 500px)")
mobileScreen(x)
