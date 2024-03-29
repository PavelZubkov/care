namespace $.$$ {

	export class $care_app extends $.$care_app {

		user() {
			return this.domain().user()!
		}

		arg() {
			return this.$.$mol_state_arg.dict()
		}

		org_opened() {
			return this.org().item( this.arg().org )
		}

		project_opened() {
			return this.project_service().item( this.arg().project )
		}

		job_opened() {
			return this.job_service().item( this.arg().job )
		}

		person_opened() {
			return this.person_service().item( this.arg().person )
		}

		request_opened() {
			return this.request_service().item( this.arg().request )
		}

		pages() {
			
			if (!this.user()) {
				return [
					... this.arg().sign === 'request' ? [this.Request_add_page()] : [],
					... this.arg().sign === 'in' ? [this.Sign_in_page()] : [],
					... this.arg().sign === 'up' ? [this.Sign_up_page()] : [],
					... !this.arg().sign ? [this.Sign_in_page()] : [],
				]
			}

			return [
				this.Nav_page(),

				... this.arg().person ? [this.Person_page()] : [],
				... this.arg().person_edit === '' ? [this.Person_edit_page()] : [],
				... this.arg().person_activity === '' ? [this.Person_activity_page()] : [],

				... this.arg().search === '' ? [this.Search_page()] : [],
				... this.arg().search_filter === '' ? [this.Search_filter_page()] : [],

				... this.arg().request ? [this.Request_page()] : [],

				... this.arg().orgs === '' ? [this.Org_list_page()] : [],
				... this.arg().org ? [this.Org_page()] : [],
				... this.arg().org === '' ? [this.Org_add_page()] : [],

				... this.arg().project === '' && this.arg().org ? [this.Project_add_page()] : [],
				... this.arg().project ? [this.Project_page()] : [],
				... this.arg().project && this.arg().job === '' ? [this.Job_add_page()] : [],

				... this.arg().job ? [this.Job_page()] : [],

			]
		}

		sign_out() {
			this.sign().token('')
		}
	}

}
