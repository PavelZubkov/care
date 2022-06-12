namespace $.$$ {

	const { rem, per } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $.$care_app_person_page , {

		Body: {
			padding: $mol_gap.block,
		},

		Image: {
			width: rem(7),
			border: {
				radius: per(50),
			},
			margin: {
				right: $mol_gap.block,
			},
		},

		Name_full: {
			width: per(100),
			maxWidth: calc('100% - 7rem'),
			font: {
				size: rem(1.25),
			},
		},

		Person_head: {
			width: per(100),
			alignItems: 'center',
			flex: {
				direction: 'row',
			},
			margin: {
				bottom: $mol_gap.block,
			},
		},

		About: {
			whiteSpace: 'pre',
		},

		Website_link_iconed: {
			padding: 0,
		},

		Skill: {
			padding: $mol_gap.text,
			color: $mol_theme.special,
		}

	} )

}
