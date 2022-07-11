(function () {

    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        list.innerHTML += '<li style = "color: ' + getRandomColor() + ';">' + item.value + '</li>';
        store();


        item.value = "";
    }, false)

    list.addEventListener('click', function (e) {
        var t = e.target;
        if (t.classList.contains('checked')) {

            t.parentNode.removeChild(t);
        } else {
            t.classList.add('checked');
            t.innerHTML += '<i class="fa fa-trash" style ="color:black;"></i>';
        }
        store();
    }, false)

    function store() {
        window.localStorage.myitems = list.innerHTML;
    }

    function getRandomColor() {

        //25
        var colours = ["#0000FF", "#6A5ACD", "#8B008B", "#FF1493", "#D8AE47", "#B76BA3", "#F7786B", "#79C753", "#8a2be2", "#ff69b4", "#CE5B78", "#F96714", "#FE840E", "#C62168", "#006E6D", "#BC70A4", "#BFD641", "#4F84C4", "#F2552C", "#CE3175", "#0000A0", "#1E90FF", "#0000CD", "#191970", "#4169E1"]
        var x = Math.floor(Math.random() * 25);   //return number from 1 to 11
        color = colours[x]

        return color;
    }

    function getValues() {
        var storedValues = window.localStorage.myitems;
        if (!storedValues) {
            list.innerHTML = '<li>Get started</li>';
        }
        else {
            list.innerHTML = storedValues;
        }
    }
    getValues();


})();

