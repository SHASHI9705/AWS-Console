const darkMode = document.getElementById('settingicon');
const root = document.documentElement;


darkMode.onclick = () => {

    const currentBackground = getComputedStyle(document.body).backgroundColor;
    if (currentBackground === 'rgb(255, 255, 255)') { 
        document.body.style.backgroundColor = '#161d26';
        document.body.style.color = 'white';
        document.querySelector('.pannel2regionselect').style.color = "white"
        document.querySelectorAll('.detailselect').forEach((element) =>{
            element.style.color = "white"
        });
        document.querySelector('.bodyfooter').style.color = 'white';
        root.style.setProperty('--head-names', '#42b4ff');
        root.style.setProperty('--hover-color', '#7fccff');
        root.style.setProperty('--border-line', 'rgba(255,255,255,0.3)');
        
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('.pannel2regionselect').style.color = "black"
        document.querySelectorAll('.detailselect').forEach((element) =>{
            element.style.color = "black"
        });
        document.querySelector('.bodyfooter').style.color = 'white';
        root.style.setProperty('--head-names', '#006ce0');
        root.style.setProperty('--hover-color', '#00008b');
        root.style.setProperty('--border-line', 'rgba(0,0,0,0.3)');

    }
};



