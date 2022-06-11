namespace $.$$ {

	export class $care_app_org_list extends $.$care_app_org_list {

		domain() {
			return this.user().domain()
		}

		org() {
			return this.domain().org()
		}

		rows() {
			return this.user().org_list().map( obj => this.Row(obj.id()) )
		}

		org_id(id: string) {
			return id
		}

		org_name(id: string) {
			return this.org().item(id).name()
		}

		body() {
			return this.user().org_list().length > 0 ? [this.List()] : [this.List_empty()]
		}

	}

}
