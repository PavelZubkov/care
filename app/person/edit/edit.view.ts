namespace $.$$ {

	export class $care_app_person_edit extends $.$care_app_person_edit {

		images(next?: string[]) {
			return this.person().images(next && next.slice(-1)) // now only 1 image
		}

		contact_rows() {
			return Object.keys(this.contact_dict()).map( id => this.Contact_row(id) )
		}

		contact_label(id: string) {
			return this.contact_dict()[id]
		}

		contact_value(id: string, next?: string) {
			return this.person()[`contact_${id}`](next)
		}

		company_add(id: string) {
			const next = this.person().company_list().slice()

			const index = next.indexOf(id)
			if (index === -1) {
				next.push($mol_guid())
			} else {
				next.splice(index + 1, 0, $mol_guid())
			}

			this.person().company_list(next)
		}

		company_delete(id: string) {
			const list = this.person().company_list()
			this.person().company_list(list.filter(id2 => id2 !== id))
		}

		company_list() {
			const list = this.person().company_list()
			if (list.length === 0) {
				return [this.Company_add(null)]
			}

			return list.map( id => this.Company_row(id) )
		}

		date_end_content(id: string) {
			return [
				this.Company_working_now(id),
				... !this.company_working_now(id) ? [this.Company_date_end(id)] : [],
			]
		}

		company_date_end_moment(id: string, next?: $mol_time_moment) {
			if (!this.company_working_now(id)) {
				return this.person().company_date_end(id, next) ?? new $mol_time_moment
			}
			return next ?? new $mol_time_moment
		}

		education_add(id: string) {
			const next = this.person().education_list().slice()

			const index = next.indexOf(id)
			if (index === -1) {
				next.push($mol_guid())
			} else {
				next.splice(index + 1, 0, $mol_guid())
			}

			this.person().education_list(next)
		}

		education_delete(id: string) {
			const list = this.person().education_list()
			this.person().education_list(list.filter(id2 => id2 !== id))
		}

		education_list() {
			const list = this.person().education_list()
			if (list.length === 0) {
				return [this.Education_add(null)]
			}

			return list.map( id => this.Education_row(id) )
		}

		skill_list() {
			const list = this.person().skill_list()
			if (list.length === 0) {
				return []
			}

			return list.map( id => this.Skill(id) )
		}

		skill_add() {
			const name = this.skill_add_name()
			if (!name) return

			const list = this.person().skill_list()
			this.person().skill_list([...list, name])
			this.skill_add_name('')
		}

		skill_delete(id: string) {
			const list = this.person().skill_list()
			this.person().skill_list( list.filter( id2 => id2 !== id ) )
		}

		skill_name(id: string) {
			return id
		}

	}

}
