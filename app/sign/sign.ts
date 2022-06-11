namespace $ {

	export class $care_app_sign extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('sign')
		}

		token(next?: string) {
			return this.$.$mol_state_local.value('token', next) ?? ''
		}

	}

}
