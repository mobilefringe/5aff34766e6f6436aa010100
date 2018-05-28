define([], function() {
    return [{
            path: '/',
            component: view('home')
        },
        {
            path: '/stores',
            component: view('default'),
            redirect: '/',
            children: [{
                path: ':id',
                component: view('store_details'),
                name: 'storeDetails',
                props: true
            }]
        },
        {
            path: '/promotions',
            component: view('default'),
            redirect: '/',
            children: [{
                path: ':id',
                component: view('promotion_details'),
                name: 'promotionDetails',
                props: true
            }]
        },
        {
            path: '/promotions',
            component: view('default'),
            redirect: '/',
            children: [{
                path: ':id',
                component: view('promotion_details'),
                name: 'promotionDetails',
                props: true
            }]
        },
        {
            path: '/pages',
            component: view('default'),
            redirect: '/',
            children: [{
                path: ':id',
                component: view('page_details'),
                name: 'pageDetails',
                props: true
            }]
        },
        {
            path: '/404',
            name: '404',
            component: view('notfoundcomponent')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]

    /**
     * Asynchronously load view (lazy-loading)
     * @param {string} name the filename (basename) of the view to load.
     */
    function view(name) {
        return function(resolve) {
            require(['vue!' + name + '.vue'], resolve);
        }
    };
});