const link = document.querySelectorAll('.nav ul a');
const linkMobile = document.querySelectorAll('.nav-bawah ul a');

// aktif
for (let i = 0; i < 3; i++){
	if( i == 0){
		link[i].addEventListener('click',function(){
			link[i].classList.add('aktif');
			link[1].classList.remove('aktif');
			link[2].classList.remove('aktif');
		});
	}else if( i == 1){
		link[i].addEventListener('click',function(){
			link[i].classList.add('aktif');
			link[0].classList.remove('aktif');
			link[2].classList.remove('aktif');
		});
	}else{
		link[i].addEventListener('click',function(){
			link[i].classList.add('aktif');
			link[0].classList.remove('aktif');
			link[1].classList.remove('aktif');
		});
	}
};

// aktif mode mobile
for (let i = 0; i < 3; i++){
	if( i == 0){
		linkMobile[i].addEventListener('click',function(){
			linkMobile[i].classList.add('aktif');
			linkMobile[1].classList.remove('aktif');
			linkMobile[2].classList.remove('aktif');
		});
	}else if( i == 1){
		linkMobile[i].addEventListener('click',function(){
			linkMobile[i].classList.add('aktif');
			linkMobile[0].classList.remove('aktif');
			linkMobile[2].classList.remove('aktif');
		});
	}else{
		linkMobile[i].addEventListener('click',function(){
			linkMobile[i].classList.add('aktif');
			linkMobile[0].classList.remove('aktif');
			linkMobile[1].classList.remove('aktif');
		});
	}
};