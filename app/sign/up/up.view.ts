namespace $.$$ {

	export class $care_app_sign_up extends $.$care_app_sign_up {

		name_bid() {
			return !this.name() ? this.error().required : ''
		}

		name_sur_bid() {
			return !this.name_sur() ? this.error().required : ''
		}

		phone_bid() {
			if (!this.phone()) return this.error().required
			if (this.person().find( obj => obj.phone() === this.phone().trim() ).length > 0) return this.error().phone_taken
			return ''
		}

		password_bid() {
			if (!this.password()) return this.error().required
			if (this.password().length < 8) return this.error().password_short
			if (this.password() !== this.password_confirm()) return this.error().password_not_match
			return ''
		}

		password_confirm_bid() {
			if (!this.password_confirm()) return this.error().required
			return ''
		}

		submit_enabled() {
			return !this.name_bid() && !this.name_sur_bid() && !this.phone_bid() && !this.password_bid() && !this.password_confirm_bid()
		}

		submit() {
			const obj = this.domain().person().item( $mol_guid() )

			obj.name(this.name())
			obj.name_sur(this.name_sur())
			obj.phone(this.phone())
			obj.password(this.password())

			this.person().index().add(obj.id())
			this.sign().token(obj.id())
		}

	}

}
