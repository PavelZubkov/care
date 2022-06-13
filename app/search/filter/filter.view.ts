namespace $.$$ {

	export class $care_app_search_filter extends $.$care_app_search_filter {

		back() {
			this.$.$mol_state_arg.value('search_filter', null)
		}

	}

	export class $care_app_search_filter_dict extends $.$care_app_search_filter_dict {

		check_rows() {
			return Object.keys(this.dict()).map( key => this.Check(key) )
		}

		check_title(key: string) {
			return this.dict()[key]
		}

		@ $mol_mem_key
		checked(key: string, next?: boolean) {
			return next ?? false
		}

		filter(value: any) {
			const keys = Object.keys(this.dict())
			let some_checked = false

			const result = keys.some( key => {
				const flag = this.checked(key)
				if (flag === true) some_checked = true
				return flag && key === value
			})
			return some_checked ? result : true
		}
	}

}
