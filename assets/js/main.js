(function($){var $window=$(window),$body=$('body'),$nav=$('#nav');breakpoints({wide:['961px','1880px'],normal:['961px','1620px'],narrow:['961px','1320px'],narrower:['737px','960px'],mobile:[null,'736px']});$window.on('load',function(){window.setTimeout(function(){$body.removeClass('is-preload')},100)});var $nav_a=$nav.find('a');$nav_a.addClass('scrolly').on('click',function(e){var $this=$(this);if($this.attr('href').charAt(0)!='#')
	return;e.preventDefault();$nav_a.removeClass('active');$this.addClass('active').addClass('active-locked')}).each(function(){var $this=$(this),id=$this.attr('href'),$section=$(id);if($section.length<1)
	return;$section.scrollex({mode:'middle',top:'-10vh',bottom:'-10vh',initialize:function(){$section.addClass('inactive')},enter:function(){$section.removeClass('inactive');if($nav_a.filter('.active-locked').length==0){$nav_a.removeClass('active');$this.addClass('active')}else if($this.hasClass('active-locked'))
	$this.removeClass('active-locked');}})});$('.scrolly').scrolly();$('<div id="headerToggle">'+'<a href="#header" class="toggle"></a>'+'</div>').appendTo($body);$('#header').panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:'left',target:$body,visibleClass:'header-visible'})})(jQuery);filterSelection("all")
	function filterSelection(c){var x,i;x=document.getElementsByClassName("filterDiv");if(c=="all")c="";for(i=0;i<x.length;i++){w3RemoveClass(x[i],"show");if(x[i].className.indexOf(c)>-1)w3AddClass(x[i],"show");}}
	function w3AddClass(element,name){var i,arr1,arr2;arr1=element.className.split(" ");arr2=name.split(" ");for(i=0;i<arr2.length;i++){if(arr1.indexOf(arr2[i])==-1){element.className+=" "+arr2[i]}}}
	function w3RemoveClass(element,name){var i,arr1,arr2;arr1=element.className.split(" ");arr2=name.split(" ");for(i=0;i<arr2.length;i++){while(arr1.indexOf(arr2[i])>-1){arr1.splice(arr1.indexOf(arr2[i]),1)}}
	element.className=arr1.join(" ")}
	var btnContainer=document.getElementById("myBtnContainer");var btns=btnContainer.getElementsByClassName("btn-filter");for(var i=0;i<btns.length;i++){btns[i].addEventListener("click",function(){var current=document.getElementsByClassName("active");current[0].className=current[0].className.replace(" active","");this.className+=" active"})}