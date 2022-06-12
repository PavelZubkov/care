namespace $ {

	export class $care_app_org_service extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('org')
		}

		index() {
			const obj = new $care_app_index
			obj.domain = $mol_const(this.domain())
			obj.state = $mol_const(this.state().doc('index'))

			return obj
		}

		find(fn?: (obj: $care_app_org) => boolean) {
			return this.index().find($care_app_org, fn)
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new $care_app_org
			obj.domain = $mol_const(this.domain())
			obj.id = $mol_const(id)

			return obj
		}

	}

	export class $care_app_org extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('org').doc(this.id())
		}

		name(next?: string) {
			return String( this.state().sub('name').value(next) ?? '' )
		}

		description(next?: string) {
			return String( this.state().sub('description').value(next) ?? '' )
		}

		image(next?: string) {
			return String( this.state().sub('image').value(next) ?? '' )
		}

		owner(next?: $care_app_person) {
			const id = this.state().sub('owner').value(next && next.id())
			return this.domain().person().item( String( id ) )
		}

		project_list(next?: $care_app_project[]) {
			const ids = this.state().sub('projects').list(next && next.map(obj => obj.id()))
			return ids.map( id => this.domain().project().item( String(id) ) )
		}

	}

}
