document.getElementById('title').addEventListener('click',async()=>{
    const [tab] = await chrome.tabs.query({
        active:true,
        currentWindow:true
    });
    const title = tab.title;
    const titletext = document.getElementById('current');

    titletext.textContent = title;
});