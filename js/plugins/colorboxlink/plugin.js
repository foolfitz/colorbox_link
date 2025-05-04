CKEDITOR.plugins.add( 'colorboxlink', {
    icons: 'colorboxlink',
    init: function( editor ) {
        editor.addCommand( 'colorboxlink', new CKEDITOR.dialogCommand( 'colorboxDialog' ) );
        editor.ui.addButton( 'Colorboxlink', {
            label: 'Insert Colorbox Link',
            command: 'colorboxlink',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'colorboxDialog', this.path + 'dialogs/colorbox.js' );
    }
});
