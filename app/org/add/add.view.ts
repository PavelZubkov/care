namespace $.$$ {

	export class $care_app_org_add extends $.$care_app_org_add {

		domain() {
			return this.org().domain()
		}

		user() {
			return this.domain().user()!
		}

		name_bid() {
			return !this.name() ? this.error().required : ''
		}

		description_bid() {
			return !this.description() ? this.error().required : ''
		}

		submit_enabled() {
			return !this.name_bid() && !this.description_bid()
		}

		submit() {
			const obj = this.org().item( $mol_guid() )
			obj.name(this.name())
			obj.description(this.description())
			obj.image(this.images()[0] ?? '')
			obj.owner(this.user())
			this.user().org_list( [... this.user().org_list(), obj] )

			this.org().index().add(obj.id())
			this.$.$mol_state_arg.value('org', null)
		}

	}

}
