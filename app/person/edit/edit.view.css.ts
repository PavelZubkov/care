namespace $.$$ {

	const { per } = $mol_style_unit

	$mol_style_define( $.$care_app_person_edit, {

		Body: {
			padding: $mol_gap.space,
		},

		Contact_row: {
			margin: {
				bottom: $mol_gap.space,
			},
		},

		Company_row: {
			$mol_string: {
				margin: {
					bottom: $mol_gap.space,
				},
			},
			$mol_textarea: {
				margin: {
					bottom: $mol_gap.space,
				},
			},
		},

		$mol_list: {
			width: per(100),
		},

	} )

}
