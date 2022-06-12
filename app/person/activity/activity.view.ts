namespace $.$$ {

	export class $care_app_person_activity extends $.$care_app_person_activity {

		domain() {
			return this.person().domain()
		}

		job() {
			return this.domain().job()
		}

		response_list_rows() {
			return this.person().response_list().map( obj => this.Response_list_row(obj.id()) )
		}

		job_id(id: string) {
			return id
		}

		job_name(id: string) {
			return this.job().item(id).name()
		}

		response_status(id: string) {
			const key = this.person().response_status(this.job().item(id))
			return this.msg()[key]
		}

	}

}
