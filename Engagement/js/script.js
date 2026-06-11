;(function () {
	function initScrollAnimation() {
		const sections = document.querySelectorAll('section:not(.hero)')

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible')
					}
				})
			},
			{
				threshold: 0.15,
				rootMargin: '0px 0px -50px 0px',
			},
		)

		sections.forEach(section => {
			observer.observe(section)
		})
	}

	//Таймер
	function updateTimer() {
		const wedding = new Date('2026-08-22T16:00:00+03:00')
		const now = new Date()
		const diff = wedding - now

		if (diff <= 0) {
			document.getElementById('days').innerText = '00'
			document.getElementById('hours').innerText = '00'
			document.getElementById('minutes').innerText = '00'
			document.getElementById('seconds').innerText = '00'
			return
		}

		document.getElementById('days').innerText = Math.floor(
			diff / (1000 * 60 * 60 * 24),
		)
			.toString()
			.padStart(2, '0')
		document.getElementById('hours').innerText = Math.floor(
			(diff / (1000 * 60 * 60)) % 24,
		)
			.toString()
			.padStart(2, '0')
		document.getElementById('minutes').innerText = Math.floor(
			(diff / (1000 * 60)) % 60,
		)
			.toString()
			.padStart(2, '0')
		document.getElementById('seconds').innerText = Math.floor(
			(diff / 1000) % 60,
		)
			.toString()
			.padStart(2, '0')
	}

	initScrollAnimation()
	updateTimer()
	setInterval(updateTimer, 1000)
})()
