namespace $ {

	export class $care_app_request_service extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('request')
		}

		index() {
			const obj = new $care_app_index
			obj.domain = $mol_const(this.domain())
			obj.state = $mol_const(this.state().doc('index'))

			return obj
		}

		find(fn?: (obj: $care_app_request) => boolean) {
			return this.index().find($care_app_request, fn)
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new $care_app_request
			obj.domain = $mol_const(this.domain())
			obj.id = $mol_const(id)

			return obj
		}

	}

	export class $care_app_request extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('request').doc(this.id())
		}

		name_full(next?: string) {
			return String( this.state().sub('name_full').value(next) ?? '' )
		}

		phone(next?: string) {
			return String( this.state().sub('phone').value(next) ?? '' )
		}

		description(next?: string) {
			return String( this.state().sub('description').value(next) ?? '' )
		}

		subway(next?: string) {
			return String( this.state().sub('subway').value(next) ?? '' )
		}

		things(next?: string) {
			return String( this.state().sub('thisngs').value(next) ?? '' )
		}

		children(next?: boolean) {
			return Boolean( this.state().sub('children').value(next) ?? '' )
		}

		elderly(next?: boolean) {
			return Boolean( this.state().sub('elderly').value(next) ?? '' )
		}

		urgently(next?: boolean) {
			return Boolean( this.state().sub('urgently').value(next) ?? '' )
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value(next && next.toString())
			return str ? new $mol_time_moment(String(str)) : null
		}

	}

}
