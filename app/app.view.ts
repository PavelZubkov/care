namespace $.$$ {

	export class $care_app extends $.$care_app {

		arg() {
			return this.$.$mol_state_arg.dict()
		}

		pages() {
			
			if (!this.user()) {
				return [
					... this.arg().sign === 'in' ? [this.Sign_in_page()] : [],
					... this.arg().sign === 'up' ? [this.Sign_up_page()] : [],
					... !this.arg().sign ? [this.Sign_in_page()] : [],
				]
			}

			return [
				this.Nav_page(),
				... this.arg().orgs === '' ? [this.Org_list_page()] : [],
				... this.arg().org === '' ? [this.Org_add_page()] : [],
			]
		}

		sign_out() {
			this.sign().token('')
		}
	}

}
