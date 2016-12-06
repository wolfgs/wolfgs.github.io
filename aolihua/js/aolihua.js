var global = {
	Url: "./../../logistic-h5-client/LogisticServlet?addr=www.kuaifengla.com/",
	imgUrl: "http://www.kuaifengla.com/doc/",
};
var intoStart = angular.module("intoApp", []);
intoStart.controller("intoController", ["$scope", function(c) {
	c.intoa = false;
	c.intob = false;
	c.intoc = false;
	c.intod = false;
	c.intof = false;
	var d = document.URL;
	var b = d.split("?")[1];
	if(b) {
		var a = b.split("=")[1];
		switch(a) {
			case "1":
				c.intoa = true;
				c.intoImg = "img/btn_dsz_03.png";
				document.getElementById("intocontent").innerHTML = intoaolihuaDSZ;
				c.intotitle = "  董事长致辞";
				break;
			case "2":
				c.intob = true;
				c.intoImg = "img/btn_jtjj_03.png";
				document.getElementById("intocontent").innerHTML = intoaolihuaJTJS;
				c.intotitle = "  集团简介";
				break;
			case "3":
				c.intoc = true;
				c.intoImg = "img/into_04.png";
				document.getElementById("intocontent").innerHTML = intoaolihuaZZJG;
				c.intotitle = "  组织架构";
				break;
			case "4":
				c.intod = true;
				c.intoImg = "img/into_05.png";
				document.getElementById("intocontent").innerHTML = intoaolihuaJY;
				c.intotitle = " 精英团队 ";
				break;
			case "5":
				c.intof = true;
				c.intoImg = "img/into_06.png";
				document.getElementById("intocontent").innerHTML = intoaolihuaJTDSJ;
				c.intotitle = " 集团大事件";
				break;
			default:
				c.intoa = true;
				c.intoImg = "img/into_02.jpg";
				document.getElementById("intocontent").innerHTML = intoaolihuaDSZ;
				c.intotitle = "  董事长致辞";
				break
		}
	} else {
		c.intoa = true;
		c.intoImg = "img/btn_dsz_03.png";
		document.getElementById("intocontent").innerHTML = intoaolihuaDSZ;
		c.intotitle = "  董事长致辞"
	}
	c.intoaa = function() {
		c.intoa = true;
		c.intob = false;
		c.intoc = false;
		c.intod = false;
		c.intof = false;
		c.intoImg = "img/btn_dsz_03.png";
		document.getElementById("intocontent").innerHTML = intoaolihuaDSZ;
		c.intotitle = "  董事长致辞"
	};
	c.intobb = function() {
		c.intoa = false;
		c.intob = true;
		c.intoc = false;
		c.intod = false;
		c.intof = false;
		c.intoImg = "img/btn_jtjj_03.png";
		document.getElementById("intocontent").innerHTML = intoaolihuaJTJS;
		c.intotitle = "  集团简介"
	};
	c.intocc = function() {
		c.intoa = false;
		c.intob = false;
		c.intoc = true;
		c.intod = false;
		c.intof = false;
		c.intoImg = "img/into_04.png";
		document.getElementById("intocontent").innerHTML = intoaolihuaZZJG;
		c.intotitle = "  组织架构"
	};
	c.intodd = function() {
		c.intoa = false;
		c.intob = false;
		c.intoc = false;
		c.intod = true;
		c.intof = false;
		c.intoImg = "img/into_05.png";
		document.getElementById("intocontent").innerHTML = intoaolihuaJY;
		c.intotitle = " 精英团队 "
	};
	c.intoff = function() {
		c.intoa = false;
		c.intob = false;
		c.intoc = false;
		c.intod = false;
		c.intof = true;
		c.intoImg = "img/into_06.png";
		document.getElementById("intocontent").innerHTML = intoaolihuaJTDSJ;
		c.intotitle = " 集团大事件"
	}
}]);
var groupbusinessdelStart = angular.module("groupbusinessdelApp", []);
groupbusinessdelStart.controller("groupbusinessdelController", ["$scope", function(c) {
	c.groupbusinessdela = false;
	c.groupbusinessdelb = false;
	c.groupbusinessdelc = false;
	c.groupbusinessdeltitle = "";
	var d = document.URL;
	var b = d.split("?")[1];
	var a = b.split("=")[1];
	switch(a) {
		case "1":
			c.groupbusinessdela = true;
			c.groupbusinessImg = "img/JITx3_03.png";
			document.getElementById("groupbusinescontent").innerHTML = groubusinessDataJT;
			c.groupbusinessdeltitle = "  全球贸易";
			c.groupbusinessdelmore = "http://www.mr-finewines.com/";
			break;
		case "2":
			c.groupbusinessdelb = true;
			c.groupbusinessImg = "img/JITx2_03.png";
			document.getElementById("groupbusinescontent").innerHTML = groubusinessDataQQ;
			c.groupbusinessdeltitle = "  环球美食";
			c.groupbusinessdelmore = "http://www.jqkrestaurant.com/";
			break;
		case "3":
			c.groupbusinessdelc = true;
			c.groupbusinessImg = "img/JITx_03.png";
			document.getElementById("groupbusinescontent").innerHTML = groubusinessDataHLW;
			c.groupbusinessdeltitle = "  互联网+";
			c.groupbusinessdelmore = "http://www.czebd.com";
			break;
		default:
			c.groupbusinessdela = true;
			c.groupbusinessImg = "img/JITx3_03.png";
			document.getElementById("groupbusinescontent").innerHTML = groubusinessDataJT;
			c.groupbusinessdeltitle = "  全球贸易";
			c.groupbusinessdelmore = "http://www.mr-finewines.com/";
			break
	}
	c.groupbusinessdelaa = function() {
		c.groupbusinessdela = true;
		c.groupbusinessdelb = false;
		c.groupbusinessdelc = false;
		c.intod = false;
		c.intof = false;
		c.groupbusinessImg = "img/JITx3_03.png";
		document.getElementById("groupbusinescontent").innerHTML = groubusinessDataJT;
		c.groupbusinessdeltitle = "  全球贸易";
		c.groupbusinessdelmore = "http://www.mr-finewines.com/"
	};
	c.groupbusinessdelbb = function() {
		c.groupbusinessdela = false;
		c.groupbusinessdelb = true;
		c.groupbusinessdelc = false;
		c.intod = false;
		c.intof = false;
		c.groupbusinessImg = "img/JITx2_03.png";
		document.getElementById("groupbusinescontent").innerHTML = groubusinessDataQQ;
		c.groupbusinessdeltitle = "  环球美食";
		c.groupbusinessdelmore = "http://www.jqkrestaurant.com/"
	};
	c.groupbusinessdelcc = function() {
		c.groupbusinessdela = false;
		c.groupbusinessdelb = false;
		c.groupbusinessdelc = true;
		c.intod = false;
		c.intof = false;
		c.groupbusinessImg = "img/JITx_03.png";
		document.getElementById("groupbusinescontent").innerHTML = groubusinessDataHLW;
		c.groupbusinessdeltitle = "  互联网+";
		c.groupbusinessdelmore = "http://www.czebd.com"
	}
}]);
var inviteStart = angular.module("inviteApp", []);
inviteStart.controller("inviteController", ["$scope", function(a) {
	a.invitea = true;
	a.inviteb = false;
	a.invitec = false;
	a.invited = false;
	a.invitef = false;
	document.getElementById("invitecontent").innerHTML = inviteDataWeb;
	a.intotitle = "  Web前端开发工程师";
	a.inviteaa = function() {
		a.invitea = true;
		a.inviteb = false;
		a.invitec = false;
		a.invited = false;
		a.invitef = false;
		document.getElementById("invitecontent").innerHTML = inviteDataWeb;
		a.invitetitle = " Web前端开发工程师 "
	};
	a.invitebb = function() {
		a.invitea = false;
		a.inviteb = true;
		a.invitec = false;
		a.invited = false;
		a.invitef = false;
		document.getElementById("invitecontent").innerHTML = inviteDataYX;
		a.invitetitle = "  营销策划经理"
	};
	a.invitecc = function() {
		a.invitea = false;
		a.inviteb = false;
		a.invitec = true;
		a.invited = false;
		a.invitef = false;
		document.getElementById("invitecontent").innerHTML = inviteDataUI;
		a.invitetitle = "  美工设计师"
	};
	a.invitedd = function() {
		a.invitea = false;
		a.inviteb = false;
		a.invitec = false;
		a.invited = true;
		a.invitef = false;
		document.getElementById("invitecontent").innerHTML = inviteDataQY;
		a.invitetitle = " 营业企划经理 "
	};
	a.inviteff = function() {
		a.invitea = false;
		a.inviteb = false;
		a.invitec = false;
		a.invited = false;
		a.invitef = true;
		document.getElementById("invitecontent").innerHTML = inviteDataCS;
		a.invitetitle = " 西餐厨师"
	}
}]);
var informationStart = angular.module("informationApp", []);
informationStart.controller("informationController", ["$scope", function(c) {
	var e = document.URL;
	var b = e.split("?")[1];
	var a = b.split("=")[1];
	var f = e.split("?")[2];
	var d = b.split("=")[2];
	c.informationdeltitle = "正文";
	switch(a) {
		case "1":
			document.getElementById("informalcontent").innerHTML = informalone;
			break;
		case "2":
			document.getElementById("informalcontent").innerHTML = informaltwo;
			break;
		case "3":
			document.getElementById("informalcontent").innerHTML = informalthree;
			break;
		case "4":
			document.getElementById("informalcontent").innerHTML = informalfour;
			break;
		case "5":
			document.getElementById("informalcontent").innerHTML = informalfive;
			break;
		case "6":
			document.getElementById("informalcontent").innerHTML = informalsix;
			break;
		case "7":
			document.getElementById("informalcontent").innerHTML = informalseven;
			break;
		case "8":
			document.getElementById("informalcontent").innerHTML = informaleight;
			break;
		case "9":
			document.getElementById("informalcontent").innerHTML = informalnine;
			break;
		default:
			break
	}
}]);