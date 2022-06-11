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

	}

}
