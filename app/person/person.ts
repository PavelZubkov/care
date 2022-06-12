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

		about(next?: string) {
			return String( this.state().sub('about').value(next) ?? '' )
		}

		contact_telegram(next?: string) {
			return String( this.state().sub('contact_telegram').value(next) ?? '' )
		}

		contact_mail(next?: string) {
			return String( this.state().sub('contact_mail').value(next) ?? '' )
		}

		contact_website(next?: string) {
			return String( this.state().sub('contact_website').value(next) ?? '' )
		}

		company_list(next?: string[]) {
			const array = this.state().sub('company_list').list(next)
			return array.map(String)
		}

		company_name(id: string, next?: string) {
			return String(this.state().sub('company').sub(id).sub('name').value(next) ?? '')
		}

		company_website(id: string, next?: string) {
			return String(this.state().sub('company').sub(id).sub('website').value(next) ?? '')
		}

		company_position(id: string, next?: string) {
			return String(this.state().sub('company').sub(id).sub('position').value(next) ?? '')
		}

		company_industry(id: string, next?: string) {
			return String(this.state().sub('company').sub(id).sub('industry').value(next) ?? '')
		}

		company_tasks(id: string, next?: string) {
			return String(this.state().sub('company').sub(id).sub('tasks').value(next) ?? '')
		}

		company_date_start(id: string, next?: $mol_time_moment) {
			const str = this.state().sub('company').sub(id).sub('date_start').value(next && next.toString()) ?? ''
			return new $mol_time_moment( str ? String(str) : undefined )
		}

		company_date_end(id: string, next?: $mol_time_moment) {
			const str = this.state().sub('company').sub(id).sub('date_end').value(next && next.toString()) ?? ''
			return str ? new $mol_time_moment(String(str)) : null
		}

		education_list(next?: string[]) {
			const array = this.state().sub('education_list').list(next)
			return array.map(String)
		}

		education_level(id: string, next?: string) {
			return String( this.state().sub('education').sub(id).sub('level').value(next) ?? '' )
		}

		education_institution(id: string, next?: string) {
			return String( this.state().sub('education').sub(id).sub('institution').value(next) ?? '' )
		}

		education_department(id: string, next?: string) {
			return String( this.state().sub('education').sub(id).sub('department').value(next) ?? '' )
		}

		education_specialty(id: string, next?: string) {
			return String( this.state().sub('education').sub(id).sub('specialty').value(next) ?? '' )
		}

		education_year_end(id: string, next?: string) {
			return Number( this.state().sub('education').sub(id).sub('year_end').value(next) ?? 2022 )
		}

		skill_list(next?: string[]) {
			const array = this.state().sub('skill_list').list(next)
			return array.map( key => String(key) )
		}

	}

}
