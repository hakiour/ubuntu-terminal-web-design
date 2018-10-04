/*Hamza Akiour - Making the terminal draggable with Jquery UI*/
$( function() {
	$( "#terminal" ).draggable();
} );
document.addEventListener('DOMContentLoaded', function() {
  new Typed('#intro-animation', {
    strings: ["`root@hamza-PC:~#` chmod +x hello.sh^300\n`root@hamza-PC:~#` sh hello.sh^1000\n`Loading`^150.^150.^150.^150\n`Yeaa, I'm <span class='intro-name'>Hamza Akiour</span>.` ^300\n`root@hamza-PC:~#` wanna know more about me?^940\n`Command not found`^0\n`root@hamza-PC:~#`It's easy, just visit me on www.hamza.es :)\n\n\n\n\n\n\naaa^3000"],
    typeSpeed: 40,
    backSpeed: 0,
    loop: false
  });
});
/*Auto scroll down in the terminal*/
var timeoutScrollDownTerminal = setTimeout(scrollDownTerminal,50);
function scrollDownTerminal(){
	clearTimeout(timeoutScrollDownTerminal);
	var bodyTerminal = $(".intro-body")[0];
  	bodyTerminal.scrollTop = bodyTerminal.scrollHeight;
	timeoutScrollDownTerminal = setTimeout(scrollDownTerminal,50);
}
function stopScrollingDownTerminal(){
	clearTimeout(timeoutScrollDownTerminal);
}