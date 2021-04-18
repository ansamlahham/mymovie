var usermovietype;
var favtype = function (){
usermovietype =prompt('please enter your movie type');
while (usermovietype !== 'drama' && usermovietype !== 'action'){
 usermovietype =prompt ('please enter the name drama or action');
}
}
favtype();


var userChoose;

function showImages(){
  if (usermovietype === 'drama'){
  userChoose ='<img src="https://hbr.org/resources/images/article_assets/2020/09/A_Sep20_14_1189155141.jpg">'
} else if (usermovietype === 'action') {
userChoose = '<img src="https://alcoholismresearch.org/wp-content/uploads/2013/11/businessman-thumbs-down-90836525-777x437.jpg">'

}

var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
}
showImages();