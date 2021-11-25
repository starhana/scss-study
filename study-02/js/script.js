
// 2021-11-19 Javascript 객체 기본

//let → 변수 재할당 O
//const → 변수 재할당 X


const person ={
	name : ['han', 'byul', 'youh'],
	age : 23,
	gender : 'famale',
	like : ['lauv', 'troye'],
	bio : function(){
		alert(this.name[0] + this.name[1] + ' is ' + this.age + ' years old. I likes ' + person.like[0]);
	},
	greeting: function(){
		alert('Hi! i\'m ' + this.name[2] + '.')
	}
};

//f01 슬라이드

//버튼 클릭할 때 ul에 margin-left:0% ~ margin-left:-300%



//f02 hover

$(document).ready(function(){
	$('.f02 li').mouseover(function(){
		$(this).addClass('active');
	});
	$('.f02 li').mouseout(function(){
		$(this).removeClass('active');
	});
});