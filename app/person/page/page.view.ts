namespace $.$$ {

	export class $care_app_person_page extends $.$care_app_person_page {

		company_rows() {
			return this.person().company_list().map( id => this.Company_row(id) )
		}

		company_date_start_string(id: string) {
			return this.person().company_date_start(id).toString('MM.YYYY')
		}

		company_date_end_string(id: string) {
			if (this.person().company_working_now(id)) return this.working_now()
			return this.person().company_date_end(id)?.toString('MM.YYYY') ?? ''
		}

		education_rows() {
			return this.person().education_list().map( id => this.Education_row(id) )
		}

		education_level_string(id: string) {
			return this.education_level_dict()[this.person().education_level(id)]
		}

		skill_list() {
			return this.person().skill_list().map( key => this.Skill(key) )
		}

		skill_name(key: string) {
			return key
		}

	}

}
