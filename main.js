// const work = document.querySelector('.col');
// const overlay = document.querySelector('.view');
// const frame = document.querySelector('.frame');
// document.addEventListener('click', (e)=>{
//     console.log(e)
//     if(e.target.className == 'col'){
//         frame.style.background =  e.target.style.background;
//         overlay.style.display = 'block';
//     }
// })
// document.querySelector('body').addEventListener('click', (e)=>{
//     overlay.style.display = 'none';
// })
let themes = {
    light:{
        'black': '#000000',
        'bg': ' #F6F6F6',
        'header':'#000000',
        'content':'#000000'
    },
    dark:{
        'black': '#000000',
        'bg': ' #000000',
        'header':'transparent',
        'content':'#F7FFF'
    }
  }
function setTheme(currentTheme){
    const theme = themes[currentTheme];
    Object.keys(theme).forEach((key)=>{
        const cssKey = `--${key}`;
        const cssValue = theme[key];
        console.log(cssValue)
        //document.getElementsByTagName('html')[0].style.setProperty(cssKey,cssValue)
        document.body.style.setProperty(cssKey, cssValue);
      })
}
window.addEventListener('load',()=>{
  registerSW();
})
async function registerSW(){
  if('serviceWorker' in navigator){
    try{
      await navigator.serviceWorker.register('./sw.js');
    }catch(e){
      console.log('Sw registration failed: '+e)
    }
  }
}