

const shell = document.getElementById('headshellicon')


document.getElementById('headshellicon').onclick = () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#161d26' : 'white';
    document.body.style.color = document.body.style.color === 'black' ? 'white' : 'black';
    document.querySelector('.bodyfooter').style.color = document.querySelector('.bodyfooter').style.color === 'white' ? 'white' : 'white';


} 