
var usermovietype =prompt('please enter your movie type');
if (usermovietype =='drama'){
alert('you will love this movie');
}else if (usermovietype == 'action'){
  alert('this movie is not your type');

}
while(usermovietype !== 'drama' && usermovietype !== 'action'){
 usermovietype =prompt ('please enter the name drama or action');
}
var userchoose;

if (usermovietype === 'drama'){
  userchoose ='<img src="https://hbr.org/resources/images/article_assets/2020/09/A_Sep20_14_1189155141.jpg">'
} else if (usermovietype === 'action') {
userchoose = '<img src="https://alcoholismresearch.org/wp-content/uploads/2013/11/businessman-thumbs-down-90836525-777x437.jpg">'
}
var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userchoose);
}

