import { Routes } from "@angular/router";
export const contentRoutes : Routes = [
    {path:'dashboard',loadChildren:()=> import('../../components/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'masters',loadChildren:()=> import('../../components/masters/masters.module').then(m=>m.MastersModule)},
    {path:'users',loadChildren:()=> import('../../components/users/users.module').then(m=>m.UsersModule)},
    {path:'invoice',loadChildren:()=> import('../../components/invoice/invoice.module').then(m=>m.InvoiceModule)},
    {path:'products',loadChildren:()=> import('../../components/products/products.module').then(m=>m.ProductsModule)},
    {path:'reports',loadChildren:()=> import('../../components/report/report.module').then(m=>m.ReportModule)},
    {path:'sales',loadChildren:()=> import('../../components/sales/sales.module').then(m=>m.SalesModule)},
    {path:'setting',loadChildren:()=> import('../../components/settings/settings.module').then(m=>m.SettingsModule)}

]