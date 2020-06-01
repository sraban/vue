<template>
	<ul>
		<li v-for="image in $store.state.images" :key="image._id">
			<img :src="image.image_url" width="100" height="100"/>
			<button @click="removeImage(image)">Delete</button>
		</li>
	</ul>
	
</template>

<script>
	//import { mapState, mapMutations, mapActions } from 'vuex'
	//import { store } from '@/store'
	const URL = 'https://vuex-server.herokuapp.com'
	export default {
		data () {
			return {
				loading: false,
				images: []
			}
		},
		mounted() {
			this.fetchImages()
		},
		computed: {
			
		},
		methods: {
			toggleLoading() {
				this.loading = !this.loading
			},
			fetchImages() {
				this.toggleLoading()
					fetch(`${URL}/api/images`,{
						method: 'GET'
					})
					.then(res => res.json() )
					.then(output => {
						this.toggleLoading()
						this.$store.commit('setState', {images:output})
					})
					.catch(error => {
						console.error(error)
					})
			},
			async removeImage(payload) {

				var images = this.$store.state.images;
				images.splice(
					images.findIndex(image => image._id === payload._id),
					1
				)

				fetch(`${URL}/api/images`, {
					method: 'DELETE',
					headers: {
						'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
					},
					body: JSON.stringify(payload)
				})
				.then(res => res.json() )
				.then(response => {
					this.$store.commit('setState', {images:images})
					console.log( response )
				})
			}
		}
	}
</script>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		max-width: 100vw;
	}

	li img {
		display: flex;
		border: 2px solid #bada55;
		flex: 1;
		justify-content: space-around;
		margin: 10px;
	}

	button {
		border: none;
		cursor: pointer;
		padding: 5px 10px;
	}

	li button {
		background-color: crimson;
		color: #fff;
		padding: 10px 20px;
	}

	li button:hover {
		background-color: red;
	}

	.pimg {
		width: 250px;
		height: auto;
	}

	.pimg__placeholder {
		filter: blur(2vw);
		transform: scale(1.05);
	}
</style>

