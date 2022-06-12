namespace $.$$ {

	const { rem, per } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $.$care_app_org_page , {

		Body: {
			padding: $mol_gap.block,
		},

		Org_image: {
			width: rem(5),
			border: {
				radius: per(50),
			},
			margin: {
				right: $mol_gap.block,
			},
		},

		Org_name: {
			width: per(100),
			maxWidth: calc('100% - 5rem'),
			font: {
				size: rem(1.25),
			},
		},

		Org_head: {
			width: per(100),
			alignItems: 'center',
			flex: {
				direction: 'row',
			},
			margin: {
				bottom: $mol_gap.block,
			},
		},

	} )

}
