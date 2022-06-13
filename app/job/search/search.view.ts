namespace $.$$ {

	export class $care_app_job_search extends $.$care_app_job_search {

		domain() {
			return this.job_service().domain()
		}

		@ $mol_mem
		rows_filtered() {
			const filter = this.job_service().find( obj => this.job_filter(obj) )
			const search = filter.filter(obj => this.job_search(obj))
			return search.map(obj => this.Job_row(obj.id()))
		}

		job_id(id: string) {
			return id
		}

		job_name(id: string) {
			return this.domain().job().item(id).name()
		}

		@ $mol_mem_key
		job_text(obj: $care_app_job) {
			const text = [
				obj.name(),
				obj.functions(),
				obj.requests(),
				obj.provided(),
				obj.experience(),
				obj.format(),
				obj.duration(),
				obj.work_schedule(),
				obj.pay(),
				obj.project().name(),
				obj.project().org().name(),
			].join(' ').toLowerCase()
			return text
		}

		@ $mol_mem_key
		job_search( obj : $care_app_job ) {
			const index = this.job_text(obj).indexOf( this.query().toLocaleLowerCase() ) >= 0
			return index
		}

		@ $mol_mem_key
		job_filter( obj: $care_app_job ) {
			const flags = [
				this.Exp_filter().filter(obj.experience()),
				this.Pay_filter().filter(obj.pay()),
				this.Duration_filter().filter(obj.duration()),
				this.Work_schedule_filter().filter(obj.work_schedule()),
				this.Format_filter().filter(obj.format()),
			]
			const result = flags.every( val => val === true )
			return result
		}

		// @ $mol_mem
		// jobs() {
		// 	return this.job_service().find()
		// }

		// @ $mol_mem
		// suggests() {
		// 	const query = this.query()
		// 	if( !query.length ) return []
			
		// 	this.$.$mol_wait_timeout( 200 )
			
		// 	const words = this.jobs().map( obj => this.job_text(obj) ).flat()
		// 	return words.filter( $mol_match_text( this.query() , w => [w] ) )
		// }

	}

}
