namespace $.$$ {

	export class $care_app extends $.$care_app {

		sign_page() {
			return this.$.$mol_state_arg.value('sign')
		}

		pages() {
			
			if (!this.user()) {
				return [
					... this.sign_page() === 'in' ? [this.Sign_in_page()] : [],
					... this.sign_page() === 'up' ? [this.Sign_up_page()] : [],
					... !this.sign_page() ? [this.Sign_in_page()] : [],
				]
			}

			return [
				this.Nav_page(),
			]
		}

		sign_out() {
			this.sign().token('')
		}
	}

}
