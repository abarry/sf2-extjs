Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    //title: 'Mes utilisateurs',
    store: 'Users',
    tbar:[
        {
            xtype    : 'textfield',
            name     : 'search',
            emptyText: 'saisir une recherche'
        },
        '',
        {
            text: 'Ajouter'
        },
        '',
        {
            text: 'Exporter'
        },
        '',
        {
            text: 'Activer'
        },
        '',
        {
            text: 'Désactiver'
        }],

    initComponent: function() {

        this.columns = [
            {header: 'Nom',  dataIndex: 'firstName',  flex: 1},
            {header: 'Prénom',  dataIndex: 'lastName',  flex: 1},
            {header: 'UID',  dataIndex: 'uid',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            store: this.store,
            firstText : 'Début',
            lastText : 'Fin',
            nextText: "Suivant",
            prevText: "Précédent",
            refreshText: "Rafraichier",
            displayMsg: 'Utilisateurs {0} à {1} sur {2}',
            emptyMsg: "Aucun utilisateur à afficher"
        }];

        this.callParent(arguments);
    }
});