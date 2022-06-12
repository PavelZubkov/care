namespace $.$$ {

	export class $care_app_project_add extends $.$care_app_project_add {

		domain() {
			return this.project_service().domain()
		}

		submit() {
			const obj = this.project_service().item( $mol_guid() )

			obj.name(this.name())
			obj.description(this.description())
			obj.result(this.result())
			obj.duration(this.duration())
			obj.date_start(this.date_start())

			this.project_service().index().add(obj.id())
			this.org().project_list( [...this.org().project_list(), obj] )
			obj.org(this.org())

			this.$.$mol_state_arg.value('project', null)
		}

	}

}
