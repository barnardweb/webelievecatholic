$(document).ready(function() {
    $("#navbarload").load('navbar.html')
});

console.time('cache');
const list = $('#list');
for (let i=0; i < 1000; i++) {
	list.append (i);
}

$(document).ready(function(){
    alert("hi");}

console.timeEnd('cache')
