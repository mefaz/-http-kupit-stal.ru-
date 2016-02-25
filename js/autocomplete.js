$(function() {
//  Автозаполнитель поиска
$(".input_search").autocomplete({
serviceUrl:'ajax/search_products.php',
minChars:1,
noCache: false, 
onSelect:
function(value, data){
$(".input_search").closest('form').submit();
},
fnFormatResult:
function(value, data, currentValue){
var reEscape = new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'].join('|\\') + ')', 'g');
var pattern = '(' + currentValue.replace(reEscape, '\\$1') + ')';
return (data.image?"<img align=absmiddle src='"+data.image+"'> ":'') + value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
}	
});
});