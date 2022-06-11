namespace $ {

	export class $care_app_index extends $mol_object2 {

		domain(): $care_app_domain {
			throw new Error('Not defined')
		}

		state(): $mol_state_shared {
			throw new Error('Not defined')
		}

		list(next?: string[]) {
			return this.state().sub('index_list').list(next) as string[]
		}

		add(id: string) {
			this.list( [ ...this.list() , id ] )
		}

		drop(id: string) {
			this.list( this.list().filter( id2 => id2 !== id ) )
		}

		find< Obj extends { id:()=>string, domain:()=>$care_app_domain } >(Obj: new()=> Obj, fn?: (obj: Obj)=> boolean) {
			const list = this.list().map( id => {
				const obj = new Obj
				obj.id = $mol_const(id)
				obj.domain = $mol_const(this.domain())
				return obj
			} )
			if (!fn) return list
			return list.filter( fn )
		}

	}

}
