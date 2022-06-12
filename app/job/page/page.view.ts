namespace $.$$ {

	export class $care_app_job_page extends $.$care_app_job_page {

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

	}

}
