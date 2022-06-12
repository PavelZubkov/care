namespace $.$$ {

	export class $care_app_job_page extends $.$care_app_job_page {

		domain() {
			return this.job().domain()
		}

		person() {
			return this.domain().person()
		}

		user() {
			return this.domain().user()!
		}

		experience_string() {
			return this.experience_dict()[this.experience()]
		}

		format_string() {
			return this.format_dict()[this.format()]
		}

		duration_string() {
			return this.duration_dict()[this.duration()]
		} 

		work_schedule_string() {
			return this.work_schedule_dict()[this.work_schedule()]
		}

		pay_string() {
			return this.pay_dict()[this.pay()]
		}

		project_id() {
			return this.job().project().id()
		}

		project_name() {
			return this.job().project().name()
		}

		user_responsed() {
			return this.user().response_list().includes(this.job())
		}

		user_responsed_status() {
			return this.user().response_status(this.job())
		}

		user_responsed_message() {
			return this.user().response_message(this.job())
		}

		response_content() {
			return [
				... this.user_responsed() ? [
					... this.user_responsed_status() === 'wait' ? [this.response_wait()] : [],
					... this.user_responsed_status() === 'apply' ? [this.response_apply()] : [],
					... this.user_responsed_status() === 'decline' ? [this.response_decline()] : [],
				] : [
					this.Response_text(),
					this.Response_submit(),
				],
			]
		}

		response_submit() {
			this.job().response_list([ ...this.job().response_list() , this.user() ])
			this.user().response_list([ ...this.user().response_list(), this.job() ])
			this.job().response_status(this.user(), 'wait')
			this.job().response_message(this.user(), this.response_text())
		}

		person_id(id: string) {
			return id
		}

		person_full_name(id: string) {
			const person = this.person().item(id)
			return `${person.name()} ${person.name_sur()}`
		}

		person_message(id: string) {
			return this.person().item(id).response_message(this.job())
		}

		person_response_status(id: string, next?: ReturnType<$care_app_job['response_status']>) {
			const person = this.person().item(id)
			return this.job().response_status(person, next)
		}

		response_rows() {
			return this.job().response_list().map( obj => this.Response_list_row(obj.id()) )
		}

	}

}
