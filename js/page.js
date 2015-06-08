// JavaScript Document

/**
* @name     :numPlusMinus
* @date     :15.01.29
* @author   :Nice
* @explain  :购物车数字加减
*/
function numPlusMinus(ID){
	var e=$('#'+ID);
	var plus=e.find('.icon_plus');
	var minus=e.find('.icon_minus');

	function pm(parameter){
		if (parameter=="+") {
			console.log('+++');
		};

		if (parameter=="-") {
			console.log("---");
		};
	}

	plus.click(function() {
		pm('+');
	});

	minus.click(function() {
		minus('-')
	});

	

}
/* @end **/















/**
* @name		:mianInit
* @author	:Nice
* @dependent:总初始化
*/
function mianInit(){
	document.write(
		'屏幕分辨率：'+screen.width+'x'+screen.height+'<br/>'+
		"屏幕可用大小："+screen.availWidth+"*"+screen.availHeight+"<br />"+
		"网页可见区域宽："+document.body.clientWidth+"<br />"+
		"网页可见区域高："+document.body.clientHeight+"<br />"+
		"网页可见区域宽(包括边线的宽)："+document.body.offsetWidth +"<br />"+
		"网页可见区域高(包括边线的宽)："+document.body.offsetHeight +"<br />"+
		"网页正文全文宽："+document.body.scrollWidth+"<br />"+
		"网页正文全文高："+document.body.scrollHeight+"<br />"+
		"网页被卷去的高："+document.body.scrollTop+"<br />"+
		"网页被卷去的左："+document.body.scrollLeft+"<br />"+
		"网页正文部分上："+window.screenTop+"<br />"+
		"网页正文部分左："+window.screenLeft+"<br />"+
		"屏幕分辨率的高："+window.screen.height+"<br />"+
		"屏幕分辨率的宽："+window.screen.width+"<br />"+
		"屏幕可用工作区高度："+window.screen.availHeight+"<br />"+
		"屏幕可用工作区宽度："+window.screen.availWidth
	)
}
// mianInit();
/* @end **/



/**
* @name		:名称
* @author	:作者
* @dependent:描述
*/

/* @end **/

/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/