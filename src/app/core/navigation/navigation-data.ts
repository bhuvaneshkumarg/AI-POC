import {FuseNavigationItem} from "../../../@fuse/components/navigation";

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'feather:user',
        hidden:()=> true,
        link: '/pdfexceldashboard'

    },
    // {
    //     id: 'clients',
    //     title: 'Clients',
    //     type: 'basic',
    //     icon: 'feather:user',
    //     hidden:()=> true,
    //     link: '/pdfexceldashboard'
    // },
    // {
    //     id: 'projects',
    //     title: 'Projects',
    //     type: 'basic',
    //     icon: 'feather:file-text',
    //     link: '/fsm/project'
    // },{
    //     id: 'employee',
    //     title: 'Employees',
    //     // role : 'VIEW_EMPLOYEE',
    //     type: 'basic',
    //     icon: 'feather:user',
    //     link: '/fsm/employees'
    // }, {
    //     id: 'timesheet',
    //     title: 'Timesheet',
    //     // role : 'VIEW_TIMESHEET',
    //     type: 'basic',
    //     icon: 'heroicons_outline:clock',
    //     link: '/fsm/timesheet'
    // },{
    //     id: 'payments',
    //     title: 'Payments',
    //     // role : 'VIEW_PAYMENT',
    //     type: 'basic',
    //     icon: 'heroicons_outline:currency-rupee',
    //     link: '/fsm/payments'
    // },
    // {
    //     id: 'reconcile',
    //     title: 'Reconciliation',
    //     // role : 'VIEW_RECONCILE',
    //     type: 'basic',
    //     icon: 'heroicons_outline:chart-pie',
    //     link: '/fsm/reconciliation'
    // },
    //
    // {
    //     id: 'Role',
    //     title: 'Role Management',
    //     // role : 'VIEW_ROLE',
    //     type: 'basic',
    //     icon: 'heroicons_outline:lock-open',
    //     link: '/fsm/role'
    // },
    // {
    //     id: 'settings',
    //     title: 'Settings',
    //     // role : 'VIEW_FIELD_MASTER',
    //     type: 'basic',
    //     icon: 'heroicons_outline:adjustments',
    //     link: '/fsm/settings'
    // },
    // // {
    // //     id: 'FieldMaster',
    // //     title: 'Field Master',
    // //     role : 'VIEW_FIELD_MASTER',
    // //     type: 'basic',
    // //     icon: 'heroicons_outline:badge-check',
    // //     link: '/fsm/fieldmaster'
    // // },
    // {
    //     id: 'Reports',
    //     title: 'Reports',
    //     // role : 'VIEW_REPORTS',
    //     type: 'basic',
    //     icon: 'heroicons_outline:document-report',
    //     link: '/fsm/reports'
    // },
    // {
    //     id: 'Contracts',
    //     title: 'Contracts',
    //     role : 'VIEW_CONTRACT',
    //     type: 'basic',
    //     icon: 'heroicons_outline:badge-check',
    //     link: '/fsm/contracts'
    // }, {
    //     id: 'pocode',
    //     title: 'PO Code',
    //     role : 'VIEW_PO',
    //     type: 'basic',
    //     icon: 'heroicons_outline:badge-check',
    //     link: '/fsm/pocode'
    // }
];