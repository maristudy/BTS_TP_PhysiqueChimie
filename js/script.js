
child2028 = document.getElementById("child2028");
child2027 = document.getElementById("child2027");




let liste_h3 = document.getElementsByTagName("h3");
for(let i=0;i<liste_h3.length;i++)
{
	liste_h3[i].addEventListener("click",function () {
		kids = this.closest("section").getElementsByTagName("article");
		for (let j=0; j<kids.length; j++)
		{
			if (kids[j].classList.contains("visible"))
			{
				kids[j].classList.replace("visible", "cache");
			}
			else
			{
				kids[j].classList.replace("cache", "visible");
			}
		}
	});
}
