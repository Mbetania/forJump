const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    console.log('shown.bs.modal')
  myInput.focus()
})