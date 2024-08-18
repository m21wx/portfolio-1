


	let myProject =document.querySelector('.myProject');
	async function fetchApi(){
		try{
			let urlApi = await fetch(`https://api.github.com/users/m21wx/repos`)
			let arr = await urlApi.json();

			for(i in arr){
			
				let row =`<div class='row'>
							<span class='name'> ${arr[i].name} </span>
							<span class='link'><a href='https://m21wx.github.io/${arr[i].name}/'target='_blank'> زيارة الموقع </a> </span>
						</div>`;
						myProject.innerHTML+= row;
			}
		}catch(e){
			console.log('NOt array')
		} finally{
		
		}
	}
fetchApi()

	let body = document.body;
	console.log(body)


	let icons = document.querySelector('.icons');
	icons.addEventListener('click',()=>{
		icons.classList.toggle('active');
		body.classList.toggle('mode');
		
	})


