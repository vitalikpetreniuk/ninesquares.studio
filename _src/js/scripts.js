var $ = jQuery;

let projects_upto = 0;
let years_upto = 0;
let clients_upto = 0;
let projects_counts;
let years_counts;
let clients_counts;

let typewriter_lines = ['stores', 'catalogs', 'landings', 'personalized solutions', 'companies websites'];

$(function() {

	var app = document.getElementById('typewrite');

	var typewriter = new Typewriter(app, {
		loop: true,
		delay: 75,
	});

	typewriter
		.pauseFor(1000)
		.typeString('We create ').pauseFor(500)
		.typeString('stores').pauseFor(1000).deleteChars(6).pauseFor(400)
		.typeString('catalogs').pauseFor(1000).deleteChars(8).pauseFor(400)
		.typeString('landings').pauseFor(1000).deleteChars(8).pauseFor(400)
		.typeString('personalized solutions').pauseFor(1000).deleteChars(22).pauseFor(400)
		.typeString('companies websites').pauseFor(1000)
		.start();

	$(document).mousemove(function(event) {
		let windowWidth = $(window).width();
		let windowHeight = $(window).height();

		let mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
		let mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

		$('.mainscreen').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #003385, #040A37)');
	});

	$('.lang-toggle__current').on('click', function() {
		$(this).toggleClass('_active');
		$('.lang-toggle__list').slideToggle();
	})

	$('.extra-item_current .extra-item__arrow').on('click', function () {

		$('html').animate({scrollTop: $('body').offset().top }, 500);
	})

	$('.header__burger').on('click', function() {

		$(this).toggleClass('_active');
		$('.main-nav').toggleClass('_active');
		$('body').toggleClass('_lock');
	})

	$('.item-portfolio').on('mouseenter', function(){
		let $this = $(this);
		$this.find('.item-portfolio__ibox img').addClass('mask');

		setTimeout(function(){
			$this.find('.item-portfolio__ibox img').removeClass('mask');
		}, 2000)
	})

	let counters = 0
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= $('section.about').offset().top && counters === 0){

			projects_counts = setInterval(updatedProjects);
			years_counts = setInterval(updatedYears, 250);
			clients_counts = setInterval(updatedClients, 6);

			counters = 1;
		}
	})
})

function updatedProjects() {
	let projects = document.querySelector('.about-stats__item-projects .about-stats__number span');
	projects.innerHTML = ++projects_upto;
	if (projects_upto === 600) {
		clearInterval(projects_counts);
		projects.innerHTML = '600+';
	}
}
function updatedYears() {
	let years = document.querySelector('.about-stats__item-expirience .about-stats__number span');
	years.innerHTML = ++years_upto;
	if (years_upto === 10) {
		clearInterval(years_counts);
	}
}
function updatedClients() {
	let clients = document.querySelector('.about-stats__item-clients .about-stats__number span');
	clients.innerHTML = ++clients_upto;
	if (clients_upto === 380) {
		clearInterval(clients_counts);
		clients.innerHTML = '380+';
	}
}