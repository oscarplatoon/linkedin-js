const pfp = document.getElementById('pfp');

const getThicc = () => {
  pfp.style.borderWidth = parseInt(pfp.style.borderWidth) + 1 + 'px';
  animate = setInterval(getThicc, 20)  // calls getThicc in 20ms
}

pfp.addEventListener('mouseenter', getThicc());




const moreOptions = document.getElementsByClassName('dropdown-item');
moreOptions[0].addEventListener('click', () => {
  alert('won@gatech.edu');
})