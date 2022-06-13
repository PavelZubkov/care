namespace $.$$ {

	export class $care_app_request_page extends $.$care_app_request_page {

		chidlren_string() {
			return this.request().children() ? this.yes() : this.no()
		}

		elderly_string() {
			return this.request().elderly() ? this.yes() : this.no()
		}

		urgently_string() {
			return this.request().urgently() ? this.yes() : this.no()
		}

	}

}
