const handler = function()
		{
			//document.getElementById("click").addEventListener('click', handler);

			const response = fetch("https://api.ipify.org?format=json");
			response.then(async result=>{
				result.json().then(data => {
					console.log(data);
					document.getElementById('ip').innerHTML = data.ip;
				});
			});
		}
		const handler2 = async function()
		{
			var newElement = document.createElement('div')
			const response = await fetch("https://api.ipify.org?format=json");
			const data = await response.json();
			console.log(data);
			// document.getElementById('ip').innerHTML = data.ip;
			newElement.innerHTML = data.ip;
			document.getElementById('holder').appendChild(newElement);
		}
alert('Hello');
		document.getElementById('click').addEventListener('click', handler2);