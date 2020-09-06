
// 헤더 알림아이콘
function change (icon_bell){
	if(document.getElementById(icon_bell).className=="fa fa-bell-o"){
	document.getElementById(icon_bell).className = "fa fa-bell-slash-o";
	}else{
	document.getElementById(icon_bell).className = "fa fa-bell-o";
	}
}	

// 프로젝트 즐겨찾기
function change (check_project){
	if(document.getElementById(check_project).className=="fa fa-star-o"){
	document.getElementById(check_project).className = "fa star text-yellow";
	}else{
	document.getElementById(check_project).className = "fa fa-star-o";
	}
}	

$(document).ready(function(){

	// 사이드바
	$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

	// tab
	$('ul.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	 // Chart
	 $('.chart1').easyPieChart({
		  barColor: '#F1352B', //차트가 그려질 색
		  trackColor: '#f0f0f0', // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
		  scaleColor: '#fff', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
		  lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
		  lineWidth: 22, // 차트 선의 두께
		  size: 140, // 차트크기
		  animate: 1000, // 그려지는 시간 
		  onStart: $.noop,
		  onStop: $.noop
    });

	$('.chart2').easyPieChart({
		  barColor: '#7630c2	', 
		  trackColor: '#f0f0f0', 
		  scaleColor: '#7630c2', 
		  lineCap: 'butt', 
		  lineWidth: 22, 
		  size: 134,
		  animate: 1000, 
		  onStart: $.noop,
		  onStop: $.noop
    });

	 $( "#wdate" ).datepicker({  
		dateFormat:'yy-mm-dd',
		autoclose : true,
		templates : {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	});

});


