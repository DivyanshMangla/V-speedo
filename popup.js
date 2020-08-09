try {
  document.getElementById('speed-select').onchange = function () {
    console.log("Speed changed");
    let value = document.getElementById('speed-select').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.getElementsByTagName("video")[0].playbackRate=' + value + ';' });
    });
  }
} catch (e) {
  alert('Speed change Failed!');
}
