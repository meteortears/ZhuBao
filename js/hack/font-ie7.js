/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_heart': '&#xe600;',
		'icon_heart2': '&#xe601;',
		'icon_star': '&#xe602;',
		'icon_star2': '&#xe603;',
		'icon_bag': '&#xe604;',
		'icon_clipboard': '&#xe605;',
		'icon_cart': '&#xe606;',
		'icon_lock': '&#xe607;',
		'icon_arrow_left': '&#xe608;',
		'icon_arrow_down': '&#xe609;',
		'icon_arrow_up': '&#xe60a;',
		'icon_arrow_right': '&#xe60b;',
		'icon_arrow_left2': '&#xe60c;',
		'icon_arrow_down2': '&#xe60d;',
		'icon_arrow_up2': '&#xe60e;',
		'icon_arrow_right2': '&#xe60f;',
		'icon_times': '&#xe610;',
		'icon_tick': '&#xe611;',
		'icon_plus': '&#xe612;',
		'icon_minus': '&#xe613;',
		'icon_equals': '&#xe614;',
		'icon_divide': '&#xe615;',
		'icon_th_menu': '&#xe616;',
		'icon_th_list': '&#xe617;',
		'icon_home': '&#xe618;',
		'icon_heart3': '&#xe619;',
		'icon_user': '&#xe61a;',
		'icon_user_delete': '&#xe61b;',
		'icon_user_add': '&#xe61c;',
		'icon_group': '&#xe61d;',
		'icon_heart4': '&#xe61e;',
		'icon_assignment': '&#xe61f;',
		'icon_more_horiz': '&#xe620;',
		'icon_more_vert': '&#xe621;',
		'icon_check_box': '&#xe622;',
		'icon_check_box-outline-blank': '&#xe623;',
		'icon_spin': '&#xe624;',
		'icon_bubble': '&#xe96b;',
		'icon_spinner4': '&#xe97d;',
		'icon_happy': '&#xe9df;',
		'icon_happy2': '&#xe9e0;',
		'icon_smile': '&#xe9e1;',
		'icon_smile2': '&#xe9e2;',
		'icon_tongue': '&#xe9e3;',
		'icon_tongue2': '&#xe9e4;',
		'icon_sad': '&#xe9e5;',
		'icon_sad2': '&#xe9e6;',
		'icon_wink': '&#xe9e7;',
		'icon_wink2': '&#xe9e8;',
		'icon_grin': '&#xe9e9;',
		'icon_grin2': '&#xe9ea;',
		'icon_cool': '&#xe9eb;',
		'icon_cool2': '&#xe9ec;',
		'icon_angry': '&#xe9ed;',
		'icon_angry2': '&#xe9ee;',
		'icon_evil': '&#xe9ef;',
		'icon_evil2': '&#xe9f0;',
		'icon_shocked': '&#xe9f1;',
		'icon_shocked2': '&#xe9f2;',
		'icon_baffled': '&#xe9f3;',
		'icon_baffled2': '&#xe9f4;',
		'icon_confused': '&#xe9f5;',
		'icon_confused2': '&#xe9f6;',
		'icon_neutral': '&#xe9f7;',
		'icon_neutral2': '&#xe9f8;',
		'icon_hipster': '&#xe9f9;',
		'icon_hipster2': '&#xe9fa;',
		'icon_wondering': '&#xe9fb;',
		'icon_wondering2': '&#xe9fc;',
		'icon_sleepy': '&#xe9fd;',
		'icon_sleepy2': '&#xe9fe;',
		'icon_frustrated': '&#xe9ff;',
		'icon_frustrated2': '&#xea00;',
		'icon_crying': '&#xea01;',
		'icon_crying2': '&#xea02;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
