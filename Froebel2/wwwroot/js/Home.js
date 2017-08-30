$(document).ready(function () {
    function setTextColor(picker) {
        document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    }
    console.log('hi');
    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');
    c.fillRect(100, 100, 100, 100);
});