namespace $ {

	export class $care_app_person_service extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('person')
		}

		index() {
			const obj = new $care_app_index
			obj.domain = $mol_const(this.domain())
			obj.state = $mol_const(this.state().doc('index'))

			return obj
		}

		find(fn?: (obj: $care_app_person) => boolean) {
			return this.index().find($care_app_person, fn)
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new $care_app_person
			obj.domain = $mol_const(this.domain())
			obj.id = $mol_const(id)

			return obj
		}

	}

	export class $care_app_person extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('person').doc(this.id())
		}

		name(next?: string) {
			return String( this.state().sub('name').value(next) ?? '' )
		}

		name_sur(next?: string) {
			return String( this.state().sub('name_sur').value(next) ?? '' )
		}

		phone(next?: string) {
			return String( this.state().sub('phone').value(next) ?? '' )
		}

		password(next?: string) {
			return String( this.state().sub('password').value(next) ?? '' )
		}

		org_list(next?: $care_app_org[]) {
			const ids = this.state().sub('org_list').list( next && next.map(obj => obj.id()) )
			return ids.map( id => this.domain().org().item( String(id) ) )
		}

		response_list(next?: $care_app_job[]) {
			const ids = this.state().sub('response_list').list(next && next.map(obj => obj.id()))
			return ids.map( id => this.domain().job().item( String(id) ) )
		}

		response_status(key: $care_app_job) {
			return this.domain().job().item(key.id()).response_status(this)
		}

		response_message(key: $care_app_job) {
			return this.domain().job().item(key.id()).response_message(this)
		}

	}

}
