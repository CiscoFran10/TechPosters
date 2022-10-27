import { users } from "../../script/database/users.js";
import { posts } from "../../script/database/posts.js";
import modal from "../../script/modules/modal.js";
import details from "../../script/modules/details.js";

export default function addPost() {
	function generatePost() {
		let postsArray = [];

		users.forEach((user) => {
			posts.forEach((post) => {
				if (user.id === post.user) {
					user.post = post;
					postsArray.push(user);
				}
			});
		});

		const postsList = document.querySelector(".posts-list");

		return (postsList.innerHTML = postsArray
			.map((item) => {
				let { id, img, user, post, stack } = item;
				return `<article class="post" id="${id}">
		<div class="user-profile">
			<div class="user-img">
				<img src="${img}" alt="profile image">
			</div>
			<div class="user-info">
				<h2 class="user-name">${user}</h2>
				<p class="user-description">${stack}</p>
			</div>
		</div>

		<div class="user-post"> 
		<h2 class="title">${post.title}</h2>

		<p class="post-description">${post.text}</p>
		</div>

		<div class="flex">
			<button class="btn btn-grey-1" data-control-modal="post-modal">Abrir post</button>
			<button class="btn btn-favorite">
				<span class="material-symbols-outlined icon">
					favorite
				</span>
				<span class="likes-counter">0</span>
			</button>
		</div>
	</article>`;
			})
			.join(" "));
	}

	generatePost();

	function updatePosts() {
		const postTitle = document.getElementById("post-title");
		const postContent = document.getElementById("post-content");

		const postBtn = document.querySelector("[data-post]");
		postBtn.addEventListener("click", newPost);

		function newPost(e) {
			e.preventDefault();

			const post = {
				id_post: posts[0].id_post++,
				user: 1,
				title: postTitle.value,
				text: postContent.value,
			};

			posts.push(post);

			postContent.value = "";
			postTitle.value = "";

			generatePost();
			details();
			modal();
		}

		function validateInput() {
			const inputs = [postTitle, postContent];

			inputs.forEach((item) => {
				item.addEventListener("keyup", () => {
					if (postTitle.value.length > 0 && postContent.value.length > 0) {
						postBtn.removeAttribute("disabled");
					} else {
						postBtn.setAttribute("disabled", "true");
					}
				});
			});
		}
		validateInput();
	}

	updatePosts();
}
