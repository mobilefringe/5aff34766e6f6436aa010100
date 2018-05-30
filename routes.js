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
            path: '/mapv2',
            component: view('default'),
            redirect: '/',
            children: [{
                path: ':id',
                component: view('map'),
                name: 'map',
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
            path: '/events',
            component: view('default'),
            redirect: '/',
            children: [{
                path: ':id',
                component: view('event_details'),
                name: 'eventDetails',
                props: true
            }]
        },
        {
            path: '/jobs',
            component: view('default'),
            children: [{
                    path: '',
                    component: view('jobs'),
                    name: 'jobList'
                }
            ]
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
            redirect: '/'
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