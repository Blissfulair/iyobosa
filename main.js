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
console.log('lll')
let themes = {
    light:{
        'black': '#000000',
        'bg': ' #F6F6F6',
        'header':'#000000',
        'content':'#000000',
        'main':'#000000',
        'dark-border':'#000000'
    },
    dark:{
        'black': '#000000',
        'bg': ' #000000',
        'header':'transparent',
        'content':'#F7FFFF',
        'main':'#fff',
        'dark-border':'#707070'
    }
  }
  function toggleTheme(){
    const theme = localStorage.getItem('theme');
    if(JSON.parse(theme)){
      setTheme('dark');
      localStorage.removeItem('theme');
      document.querySelector('.slide').style.justifyContent ='end'
    }else{
      setTheme('light');
      localStorage.setItem('theme',true);
      document.querySelector('.slide').style.justifyContent ='start'
    }
  }
  function position(){
    const theme = localStorage.getItem('theme');
    if(JSON.parse(theme)){
      setTheme('light');
      document.querySelector('.slide').style.justifyContent ='start'
    }else{
      setTheme('dark');
      document.querySelector('.slide').style.justifyContent ='end'
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
  position();
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