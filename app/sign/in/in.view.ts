namespace $.$$ {

	export class $care_app_sign_in extends $.$care_app_sign_in {

		@ $mol_mem
		phone_bid(next?: string) {
			if (next) return next
			return !this.phone() ? this.error().required : ''
		}

		@ $mol_mem
		password_bid(next?: string) {
			if (next) return next
			return !this.password() ? this.error().required : ''
		}

		submit_enabled() {
			return !this.phone_bid() && !this.password_bid()
		}

		submit() {
			const [person] = this.person().find( obj => obj.phone() === this.phone() && obj.password() === this.password() )
			if (!person) return this.phone_bid(this.error().wrong)
			
			this.sign().token(person.id())
		}

		@ $mol_mem
		bid_clear() {
			this.phone()
			this.password()
			this.phone_bid('')
			this.password_bid('')
		}

		auto() {
			this.person().find().map(obj => {obj.phone(); obj.password()})
			this.bid_clear()
		}

	}

}
