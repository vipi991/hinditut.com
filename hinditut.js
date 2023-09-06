<script type="text/javascript">
if (!localStorage.getItem('cookieConsent')) {
  document.body.innerHTML += '<div style="position:fixed;bottom:0;left:0;width:100%;background:#333;color:#fff;padding:10px;text-align:center;z-index:9999;">इस वेबसाइट पर कुकीज़ का उपयोग होता है। <a style="color:#fff;text-decoration:underline;cursor:pointer;" id="acceptCookies">स्वीकार करें</a></div>';
document.getElementById('acceptCookies').onclick = function() {
    localStorage.setItem('cookieConsent', 'true');
    document.querySelector('div[style*="z-index:9999;"]').style.display = 'none';
  };
}

window.addEventListener('scroll', handleScroll);
function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    var scrolled = (winScroll / height) * 100;
    document.getElementById("HTML1").style.width = scrolled + "%";
}
</script>
