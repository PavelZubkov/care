namespace $ {

	export class $care_app_project_service extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('project')
		}

		index() {
			const obj = new $care_app_index
			obj.domain = $mol_const(this.domain())
			obj.state = $mol_const(this.state().doc('index'))

			return obj
		}

		find(fn?: (obj: $care_app_project) => boolean) {
			return this.index().find($care_app_project, fn)
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new $care_app_project
			obj.domain = $mol_const(this.domain())
			obj.id = $mol_const(id)

			return obj
		}

	}

	export class $care_app_project extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('project').doc(this.id())
		}

		name(next?: string) {
			return String( this.state().sub('name').value(next) ?? '' )
		}

		description(next?: string) {
			return String( this.state().sub('description').value(next) ?? '' )
		}

		result(next?: string) {
			return String( this.state().sub('result').value(next) ?? '' )
		}

		duration(next?: string) {
			return String( this.state().sub('duration').value(next) ?? '' )
		}

		date_start(next?: $mol_time_moment) {
			const str = this.state().sub('date_start').value(next && next.toString())
			return new $mol_time_moment(str ? String(str) : undefined)
		}

		org(next?: $care_app_org) {
			const id = String(this.state().sub('org').value(next && next.id()))
			return this.domain().org().item(id)
		}

		jobs(next?: $care_app_job[]) {
			const ids = this.state().sub('jobs').list(next && next.map(obj => obj.id()))
			return ids.map( id => this.domain().job().item( String(id) ) )
		}
	}

}
