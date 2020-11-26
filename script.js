// navbar mobo responsive
function dropdownMenu(){
    var x = document.getElementById("dropdownClick");
            if(x.className === "topnav"){
                x.className += " responsive" ;
            }
            else  {
                    x.className="topnav" ;
                }
        }
//
function myFunction(y){
	y.classList.toggle("change");
}
var progress = document.getElementById('progressBar');
var totalHeight = document.body.scrollHeight - window.innerHeight ;
window.onscroll = function (){
	var progressHeight = (window.pageYOffset/totalHeight)*100 ;
	progress.style.height = progressHeight	+ "%";
}

/******************* Trigger animation **************/



var element = document.getElementById('triggerAnimation');
var elementHeight = element.clientHeight ;
document.addEventListener('scroll', animate) ;
function inView(){
	var windowHeight = window.innerHeight ;
	var scrollY = window.scrollY || window.pageYOffset ;
	var scrollPosition = scrollY + windowHeight ;
	var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
	if(scrollPosition > elementPosition)
	{return true ; }
	else
	{return false ; }
}
function animate(){
	if(inView()){
const counters = document.querySelectorAll('.counter');
var speed =  500 ;
counters.forEach(counter => {
	const updateCount = function (){
	const target = +counter.getAttribute('data-target');
	const count = +counter.innerText;
		const inc = target / speed ;
		if(count < target )
	{	counter.innerText = Math.round(count + inc );
		setTimeout(updateCount,40) ;
	}
		else
		{count.innerText = target ; }

	}
updateCount()
});

	}
}
