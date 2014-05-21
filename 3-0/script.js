$(document).ready(function() {
$('.list-group-item').click(function() {
$(this).find('span').html(function(span) {
var num = Number($(this).html());
num--;
if (num <= 0) {
num = '';
}
return num;
})
});
});