namespace $.$$ {

	export class $care_app_job_add extends $.$care_app_job_add {

		submit() {
			const obj = this.job_service().item( $mol_guid() )

			obj.name(this.name())
			obj.functions(this.functions())
			obj.requests(this.requests())
			obj.provided(this.provided())
			obj.experience(this.experience())
			obj.format(this.format())
			obj.duration(this.duration())
			obj.work_schedule(this.work_schedule())
			obj.pay(this.pay())

			this.job_service().index().add(obj.id())
			this.project().jobs([ ...this.project().jobs(), obj ])
			obj.project(this.project())

			this.$.$mol_state_arg.value('job', obj.id())
		}

	}

}
