namespace $.$$ {

	export class $care_app_request_search extends $.$care_app_request_search {

		domain() {
			return this.request_service().domain()
		}

		@ $mol_mem
		rows_filtered() {
			const search = this.request_service().find( obj => this.request_search(obj) )
			return search.map(obj => this.Request_row(obj.id()))
		}

		description(id: string) {
			return this.request(id).description()
		}

		flags_content(id: string) {
			return [
				... this.flag_children(id) ? [this.Children(id)] : [],
				... this.flag_elderly(id) ? [this.Elderly(id)] : [],
				... this.flag_urgently(id) ? [this.Urgently(id)] : [],
			]
		}

		flag_children(id: string) {
			return this.request(id).children() ? this.flags().children : ''
		}

		flag_elderly(id: string) {
			return this.request(id).elderly() ? this.flags().elderly : ''
		}

		flag_urgently(id: string) {
			return this.request(id).urgently() ? this.flags().urgently : ''
		}

		request_id(id: string) {
			return id
		}

		request_date(id: string) {
			return this.request(id).moment()?.toString('DD.MM.YYYY hh:mm') ?? ''
		}

		@ $mol_mem_key
		request_text(obj: $care_app_request) {
			const text = [
				obj.name_full(),
				obj.description(),
				obj.things(),
				obj.subway(),
			].join(' ').toLowerCase()
			return text
		}

		@ $mol_mem_key
		request_search( obj : $care_app_request ) {
			const index = this.request_text(obj).indexOf( this.query().toLocaleLowerCase() )
			console.log(index)
			return index > -1
		}

	}

}
