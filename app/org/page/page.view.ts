namespace $.$$ {

	export class $care_app_org_page extends $.$care_app_org_page {
		domain() {
			return this.org().domain()
		}

		org_name() {
			return this.org().name()
		}

		org_image() {
			return this.org().image() || ''
		}

		org_description() {
			return this.org().description()
		}

		project_rows() {
			const list = this.org().project_list().map( obj => this.Project_link(obj.id()) )
			return [this.Project_add(), ...list]
		}

		project_id(id: string) {
			return id
		}

		project_name(id: string) {
			return this.domain().project().item(id).name()
		}

	}

}
