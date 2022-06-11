namespace $ {

	export class $care_app_domain extends $mol_object2 {

		@ $mol_mem
		state() {
			return new $mol_state_shared()
		}

		@ $mol_mem
		sign() {
			const obj = new $care_app_sign
			obj.domain = $mol_const(this)
			return obj
		}

		person() {
			const obj = new $care_app_person_service
			obj.domain = $mol_const(this)
			return obj
		}

		user() {
			return this.sign().token() ? this.person().item(this.sign().token()) : null
		}

	}

}
