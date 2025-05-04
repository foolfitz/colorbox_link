CKEDITOR.dialog.add( 'colorboxDialog', function( editor ) {
    return {
        title: 'Insert Colorbox Link',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'settings',
                label: 'Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'url',
                        label: 'URL',
                        validate: CKEDITOR.dialog.validate.notEmpty( "URL field cannot be empty." )
                    },
                    {
                        type: 'text',
                        id: 'linktext',
                        label: 'Link Text',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Link text field cannot be empty." )
                    }
                ]
            },
        ],
        onOk: function() {
            var dialog = this;

            var link = editor.document.createElement( 'a' );
	    link.addClass('use-ajax');
            link.setAttribute('href', dialog.getValueOf( 'settings', 'url' ));
	    link.setAttribute('data-dialog-options', '{"width":700,"dialogClass":"colorbox-load"}');
	    link.setAttribute('data-dialog-type', 'modal');
            link.setText( dialog.getValueOf( 'settings', 'linktext' ) );

            editor.insertElement( link );
        }
    };
});
