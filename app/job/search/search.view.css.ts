namespace $.$$ {

	export class $care_app_job_search extends $.$care_app_job_search {

		domain() {
			return this.job_service().domain()
		}

		@ $mol_mem
		rows_filtered() {
			const list = this.job_service().find(obj => this.job_search(obj))
			return list.map(obj => this.Job_row(obj.id()))
		}

		job_id(id: string) {
			return id
		}

		job_name(id: string) {
			return this.domain().job().item(id).name()
		}

		@ $mol_mem_key
		job_search( obj : $care_app_job ) {
			const fileds = [
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

			const index = fileds.indexOf( this.query().toLocaleLowerCase() ) >= 0
			return index
		}

	}

}
