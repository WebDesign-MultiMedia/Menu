let backBtn = document.getElementById('backToMainPg');   
backBtn.style.color = 'red';
 backBtn.addEventListener('mouseenter', () => {

    if ( backBtn.style.color === 'white') {
         backBtn.style.color = 'red'
    } else {
         backBtn.style.color = 'white'
    }
 })
