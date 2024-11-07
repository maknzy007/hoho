// timer.js

let countdown = 20; // عدد الثواني للعد التنازلي
const countdownElement = document.getElementById('countdown');

// الحصول على الرابط الأصلي من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const redirectUrl = urlParams.get('url');

if (!redirectUrl) {
    alert("الرابط غير صالح!");
    window.location.href = "index.html"; // إعادة التوجيه للصفحة الرئيسية إذا لم يكن هناك رابط
}

const timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = decodeURIComponent(redirectUrl); // إعادة التوجيه
    }
}, 1000);

// <script type="text/javascript">
	atOptions = {
		'key' : '9cb9c41d6e62d18a8e4065ac1fd9a72c',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/9cb9c41d6e62d18a8e4065ac1fd9a72c/invoke.js"></script>
document.getElementById('banner-ad').innerHTML = `
    <script type="text/javascript">
        atOptions = {
            'key' : '9cb9c41d6e62d18a8e4065ac1fd9a72c',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/9cb9c41d6e62d18a8e4065ac1fd9a72c/invoke.js"></script>
`;
