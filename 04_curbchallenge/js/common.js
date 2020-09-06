$(document).ready(function(){
	
	var tabs = $('.fnTab'),
		i;
	
	$.each(tabs, function(){
		$(this).find('a').on('click', function(){
			var activeTab = $(this).parent('li').attr('data-tab');
			
			$(this).parents('ul').children('li').removeClass('current');
			$(this).parents('.tabWrap').find('.tabcontent').removeClass('current');

			$(this).parent('li').addClass('current');
			$('#' + activeTab).addClass('current');
		});
	});
	//$('.challenge_tabs .chall_li:nth-child(3) a').trigger('click');

	// 팝업
	$('#login_pop').popup({ outline: true, focusdelay: 0, opacity: 0.6, setzindex: 2000,blur:true});
	$('#uplode_p').popup({	escape: false,  blur: false,  scrolllock: true,  transition: 'all 0.3s'	});
	$('#uplode_d').popup({	escape: false,  blur: false,  scrolllock: true,  transition: 'all 0.3s'	});

	$('#conditions_pop').popup({ 
		outline: true, // optional
		focusdelay: 0, // optional
		opacity: 0.6,
		setzindex: 2000,
		blur:true
	});
		$('#privacy_pop').popup({ 
		outline: true, // optional
		focusdelay: 0, // optional
		opacity: 0.6,
		setzindex: 2000,
		blur:true
	});


	

	// Q&A
	$(".q_aWrap > dd").hide();
	$(".q_aWrap > dt").click(function(){
		$(this).next("dd").siblings("dd").slideUp();	
		$(this).siblings("dt").removeClass('on');
		$(this).next("dd").slideToggle();	
		$(this).addClass('on');
	}); 



	// 계정추가
    var btnAdd = $('#btnAdd'),
        addIndex = 0;

    btnAdd.on('click', function(){
        var inputHrml = "<li class='snsli font18'><input type='text' class='upload-url' value='' id='sns_account_"+addIndex+"' name='sns_account_"+addIndex+"'></li>";
        addIndex++;

        if(addIndex > 4){
            alert('5개까지만 가능합니다.');
            return;
        }
        $(this).parents('ul').append(inputHrml);
        
    });


		// 사진영상 업로드
		var fnFile = function(){
			var filebox = $('.filebox');

			$.each(filebox, function(){
				$(this).find('input[type="file"]').off().on('change', function(){
					$(this).next().val($(this).val());
				});
			});
		};

		fnFile();

		var btnAdd2 = $('#addfile2'),addIndex2 = 1;

		btnAdd2.on('click', function(){
			var inputHrml2 = '<div class="filebox"><input  type="text" class="upload-name" value="파일선택" name="" id="p_filename'+addIndex2+'" /><a href="javascript:;" class="uplode_p_open label">업로드</a></div>';


			addIndex2++;

			if(addIndex2 > 5){
				alert('5개까지만 가능합니다.');
				return;
			}
			$(this).parents('.pictureArea').append(inputHrml2);
			fnFile();
		});

	
});
