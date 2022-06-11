namespace $.$$ {

	export class $care_attach extends $.$care_attach {

		attach_new( files: File[] ) {
			this.items([
				... this.items(),
				... files.map( file => this.to_base64(file) ),
			])
		}

		@ $mol_mem_key
		to_base64( file: File ) {
			return new Promise( (resolve, reject) => {
				const reader = new FileReader
				reader.readAsDataURL(file)
				reader.onload = () => resolve(reader.result);
				reader.onerror = error => reject(error);
			} )
		}

	}

}
