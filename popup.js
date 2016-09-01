(function(){
var engines = document.getElementsByName("search engine");
function checkStorage()
{
	if (!localStorage.checked)
	{
		localStorage.checked = "google";
	}
	document.getElementById("engine")["search engine"].value = localStorage.checked;
	displayChecked();
}
function displayChecked()
{
	for (var i = 0; i < engines.length; i++)
	{
		if (!engines[i].checked)
		{
			document.getElementById(engines[i].value).className = "hidden";
		}
		else
		{
			document.getElementById(engines[i].value).className = "";
			localStorage.checked = engines[i].value;
		}
	}
}

function loadEvent(f) 
{
	var old = window.onload;
	if (typeof window.onload != 'function')
	{
		window.onload = f;
	}
	else
	{
		old();
		f();
	}
}

function changeEvent(f) 
{
	var old = window.onchange;
	if (typeof window.onchange != 'function')
	{
		window.onchange = f;
	}
	else
	{
		old();
		f();
	}
}

loadEvent(checkStorage);
document.getElementById("engine").addEventListener("onchange", changeEvent(displayChecked));
})();