namespace $.$$ {

	export class $care_app_project_page extends $.$care_app_project_page {

		domain() {
			return this.project().domain()
		}

		duration_string() {
			return this.duration_dict()[this.duration()]
		}

		date_start_string() {
			return this.date_start().toString('DD Month YYYY')
		}

		job_list_rows() {
			const jobs = this.project().jobs().map( obj => this.Job_link(obj.id()) )
			return [this.Job_add(), ...jobs]
		}

		job_id(id: string) {
			return id
		}

		job_name(id: string) {
			return this.domain().job().item(id).name()
		}

	}

}
