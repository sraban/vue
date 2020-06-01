<template>
	<div>
		<form enctype="multipart/form-data" @submit.prevent="uploadImages">
			<input id="file" multiple type="file" accept="image/*" @change="tempSaveImages" />
			<button> Add Image</button>
			<br/><br/>
			<div v-show="loading">
				loading..... 
			</div>
		</form>
	</div>
</template>

<script>
	//import { mapActions, mapMutations, mapState } from 'vuex';
	const URL = 'https://vuex-server.herokuapp.com'
	export default {
		data () {
			return {
				loading: false,
				temp_images: []
			}
		},
		mounted() {

		},
		computed: {
			
		},
		methods: { 
			toggleLoading() {
				this.loading = !this.loading
			},
			addImage(payload) {
				var images = this.$store.state.images
				images.unshift(payload)

				this.$store.commit('setState', {images})
			},
			uploadImages(e) {

				this.toggleLoading()
				this.temp_images.map(image => {

					const formData = new FormData()
					formData.append('file', image)

					fetch(`${URL}/api/images`, {method: 'POST', body: formData})
					.then(res => res.json() )
					.then(rex => {
						this.toggleLoading()
						e.target.reset()
						this.temp_images = []
						let data = JSON.parse(JSON.stringify(rex))
						this.addImage(data)
					})
					.catch(error => {
						console.error(error)
					})
				})

			},
			tempSaveImages(e) {
				const images = Array.from(e.target.files)
				this.temp_images.unshift(...images)
			}
		}
	}
</script>
