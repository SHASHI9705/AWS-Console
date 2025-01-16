const shell = document.getElementById('headshellicon');
const root = document.documentElement;


shell.onclick = () => {

    const currentBackground = getComputedStyle(document.body).backgroundColor;
    if (currentBackground === 'rgb(255, 255, 255)') { // 'white' in RGB
        document.body.style.backgroundColor = '#161d26';
        document.body.style.color = 'white';
        document.querySelector('.pannel2regionselect').style.color = "white"
        document.querySelector('.detailselect').style.color = "white"
        document.querySelector('.bodyfooter').style.color = 'white';
        root.style.setProperty('--head-names', '#42b4ff');
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('.pannel2regionselect').style.color = "black"
        document.querySelector('.detailselect').style.color = "black"
        document.querySelector('.bodyfooter').style.color = 'white';
        root.style.setProperty('--head-names', '#006ce0');
    }
};
