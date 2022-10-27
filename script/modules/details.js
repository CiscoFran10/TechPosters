export default function details() {
	// LIKE

	const likeButton = document.querySelectorAll(".btn-favorite");

	likeButton.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			let likesCounter = e.target.querySelector(".likes-counter");

			e.target.classList.toggle("active");
			if (e.target.classList.contains("active")) {
				likesCounter.innerText++;
			} else {
				likesCounter.innerText--;
			}
		});
	});

	// FOLLOW

	const followBtn = document.querySelectorAll("[data-button='follow']");

	followBtn.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.target.classList.toggle("active");

			if (e.target.classList.contains("active")) {
				btn.innerText = "Seguindo";
			} else {
				btn.innerText = "Seguir";
			}
		});
	});
}
