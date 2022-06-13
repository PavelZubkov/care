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

		@ $mol_mem
		person() {
			const obj = new $care_app_person_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		user() {
			return this.sign().token() ? this.person().item(this.sign().token()) : null
		}

		@ $mol_mem
		org() {
			const obj = new $care_app_org_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		project() {
			const obj = new $care_app_project_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		job() {
			const obj = new $care_app_job_service
			obj.domain = $mol_const(this)
			return obj
		}

		@ $mol_mem
		request() {
			const obj = new $care_app_request_service
			obj.domain = $mol_const(this)
			return obj
		}

	}

}
