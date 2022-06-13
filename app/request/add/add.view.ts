namespace $.$$ {

	export class $care_app_request_add extends $.$care_app_request_add {

		submit() {
			const obj = this.request_service().item( $mol_guid() )

			obj.name_full( `${this.name()} ${this.name_sur()}` )
			obj.phone(this.phone())
			obj.description(this.description())
			obj.things(this.things())
			obj.subway(this.subway())
			obj.children(this.chidlren())
			obj.elderly(this.elderly())
			obj.urgently(this.urgently())
			obj.moment(new $mol_time_moment)

			this.request_service().index().add(obj.id())
			this.completed(true)
		}

		body_sub() {
			return this.completed() ? [this.Completed()] : [this.Form()]
		}

		auto() {
			this.request_service().find() // keep state from auto destroy
		}

	}

}
