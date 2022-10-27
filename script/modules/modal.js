import { users } from "../../script/database/users.js";

export default function modal() {
	const modalButtons = document.querySelectorAll("[data-control-modal]");

	modalButtons.forEach((btn) => {
		btn.addEventListener("click", openModal);
	});

	function openModal(e) {
		const post = e.target.parentElement.parentElement;
		const modalId = e.target.getAttribute("data-control-modal");
		const modalWrapper = document.getElementById(modalId);

		modalWrapper.classList.add("active");

		updateModal(post);
		closeModal(modalWrapper);
	}

	function closeModal(modalWrapper) {
		const closeBtn = document.querySelector(".close-modal");
		
		window.addEventListener("click", (e) => {
			if (e.target === modalWrapper || e.target === closeBtn) {
				modalWrapper.classList.remove("active");
			}
		});
	}

	function updateModal(post) {
		const userProfile = post.querySelector(".user-profile");
		const userPost = post.querySelector(".user-post");

		const modalProfile = document.querySelector(".modal .user-profile");
		const modalPost = document.querySelector(".modal .user-post");

		modalProfile.innerHTML = userProfile.innerHTML;
		modalPost.innerHTML = userPost.innerHTML;
	}
}
