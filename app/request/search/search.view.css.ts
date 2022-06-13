namespace $.$$ {

	const { per, rem } = $mol_style_unit

	$mol_style_define( $.$care_app_request_search , {

		padding: $mol_gap.block,

		Search: {
			width: per(100),
		},

		Flags: {
			Content: {
				$mol_view: {
					padding: $mol_gap.space,
					color: $mol_theme.special,
				}
			},
			alignItems: 'center',
		},

		Link: {
			justifyContent: 'center',
			maxWidth: rem(8),
			marginLeft: 'auto',
		},

		Action: {
			alignItems: 'center',
		},

		Request_row: {
			margin: {
				bottom: $mol_gap.block,
			},
		},

	} )

}
