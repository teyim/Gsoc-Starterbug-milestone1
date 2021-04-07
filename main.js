const tap1=document.getElementById('tap1');
const tap2=document.getElementById('tap2');
const tap3=document.getElementById('tap3');
const page1=document.getElementById('page1');
const page2=document.getElementById('page2');
const page3=document.getElementById('page3');

window.addEventListener('load',()=>{
    if('serviceWorker' in navigator){
        try {
          navigator.serviceWorker.register('serviceWorker.js');
          console.log("Service Worker Registered");
        } catch (error) {
          console.log("Service Worker Registration Failed");
        }
      }
})


const updateTapState=(tap)=>{
switch (tap) {
    case 'tap1':
        tap1.classList.toggle('active');
        tap2.classList.remove('active');
        tap3.classList.remove('active');
        page1.classList.toggle('hide');
        page2.classList.add('hide');
        page3.classList.add('hide');
        break;
    case 'tap2':
        tap2.classList.toggle('active');
        tap1.classList.remove('active');
        tap3.classList.remove('active');
        page2.classList.toggle('hide');
        page1.classList.add('hide');
        page3.classList.add('hide');
        break;
    case 'tap3':
        tap3.classList.toggle('active');
        tap1.classList.remove('active');
        tap2.classList.remove('active');
        page3.classList.toggle('hide');
        page2.classList.add('hide');
        page1.classList.add('hide');
        break;

    default:
        break;
}
}
tap1.addEventListener('click',()=>{
    updateTapState('tap1')
})
tap2.addEventListener('click',()=>{
    updateTapState('tap2')
})

tap3.addEventListener('click',()=>{
    updateTapState('tap3')
})

// The ID of the extension we want to talk to.
var editorExtensionId = "nebpageekkhnobnakekaclbnmlbegpfk";
// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId,{openUrlInEditor: "www.google.com"},null,
  function(response) {
    if (!response.success)
      handleError(url);
  });