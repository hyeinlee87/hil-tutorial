

var messagebox = function(title, contents, url){
	$("#notice_modal_title").html(title);
	$("#notice_modal_contents").html(contents);
	if(url==''){
		$("#notice_modal_button").html("<a href='javascript:;' class='btn btn-default waves-effect' data-dismiss='modal'>Close</a>");
	}
	else{
		$("#notice_modal_button").html("<a href='"+url+"' class='btn btn-default waves-effect'>Close</a>");
	}
	$("#noticeModal").modal('show');
}




var upload_check = function(){
	var fobj = $("#myfile");
	fobj.css("border", "1px solid #CCC");
	if(fobj.val()==""){
		fobj.css("border", "2px solid red");
		return;
	}
	else{
		$("#upload_form").submit();
	}
}

var helptext = function(msg, obj){
	var hobj = $("#help-text");
	if(hobj.length){
		if(hobj.css("display")=="none")
			hobj.show();
		hobj.html(msg);
	}
	if(obj.length){
		obj.css("border", "2px solid red");
		obj.focus();
	}
}

var resetFormElementStyle = function(fname){
	$("#"+fname+" input").css("border", "1px solid #CCC");
	$("#"+fname+" select").css("border", "1px solid #CCC");
}

var resetFormItem = function(obj){
	obj.css("border", "1px solid #CCC");
}

var setComma = function(obj){
	var istr = obj.value;
	var fstr = istr.substring(0,1);
	var lstr = istr.substring(1,istr.length);

	if(fstr=="-"){
		var tmp = addComma(lstr);
		obj.value=fstr+tmp;
	}
	else{
		var tmp = addComma(istr);
		obj.value = tmp;
	}
};

var addComma = function(str){
	str = "" + str.replace(/,/gi,''); // 肄ㅻ쭏 �쒓굅
	var regx = new RegExp(/(-?\d+)(\d{3})/);
	var bExists = str.indexOf(".",0);
	var strArr = str.split('.');

	while(regx.test(strArr[0])){
		strArr[0] = strArr[0].replace(regx,"$1,$2");
	}

	if (bExists > -1)
		return strArr[0] + "." + strArr[1];
	else
		return strArr[0];
}

var eraseComma = function(str){
	
    var i = 0;
    var pos_str = 0;
    var rtn_str = "";
	
	if(str=="" || str == null || typeof(str) =="undefined"){
		rtn_str = "";
	}
	else{
		while( i < str.length ) {
			pos_str = str.indexOf(",",i);

			if( pos_str == -1 ) {
				rtn_str += str.substring(i, str.length );
				break;
			}else {
				rtn_str += str.substring(i, pos_str );
				i = pos_str+1;
			}
		}
	}

	return rtn_str;
};