namespace $ {

	export class $care_app_job_service extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('job')
		}

		index() {
			const obj = new $care_app_index
			obj.domain = $mol_const(this.domain())
			obj.state = $mol_const(this.state().doc('index'))

			return obj
		}

		find(fn?: (obj: $care_app_job) => boolean) {
			return this.index().find($care_app_job, fn)
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new $care_app_job
			obj.domain = $mol_const(this.domain())
			obj.id = $mol_const(id)

			return obj
		}

	}

	export class $care_app_job extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('job').doc(this.id())
		}

		name(next?: string) {
			return String( this.state().sub('name').value(next) ?? '' )
		}

		functions(next?: string) {
			return String( this.state().sub('functions').value(next) ?? '' )
		}

		requests(next?: string) {
			return String( this.state().sub('requests').value(next) ?? '' )
		}

		provided(next?: string) {
			return String( this.state().sub('provided').value(next) ?? '' )
		}

		experience(next?: string) {
			return String( this.state().sub('experience').value(next) ?? '' )
		}

		format(next?: string) {
			return String( this.state().sub('format').value(next) ?? '' )
		}
		
		duration(next?: string) {
			return String( this.state().sub('duration').value(next) ?? '' )
		}

		work_schedule(next?: string) {
			return String( this.state().sub('work_schedule').value(next) ?? '' )
		}

		pay(next?: string) {
			return String( this.state().sub('pay').value(next) ?? '' )
		}

		urgented(next?: boolean) {
			return Boolean( this.state().sub('urgented').value(next) ?? false )
		}

		project(next?: $care_app_project) {
			const id = String(this.state().sub('project').value(next && next.id()))
			return this.domain().project().item(id)
		}
	}

}
