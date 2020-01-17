/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/account-layout/account-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class AccountLayoutComponent {
}
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-layout-account',
                template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AccountLayoutComponent.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi9iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE2QjFDLE1BQU0sT0FBTyxzQkFBc0I7OztBQUUxQiwyQkFBSSwyQkFBdUI7O1lBNUJuQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQlQ7eUJBQ1EsaXdCQUFpd0I7YUFDM3dCOzs7O0lBR0MsNEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVMYXlvdXRUeXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWFkbWluLWxheW91dC1hY2NvdW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5iLWxheW91dD5cclxuICAgICAgPG5iLWxheW91dC1jb2x1bW4+XHJcbiAgICAgICAgPG5iLWNhcmQ+XHJcbiAgICAgICAgICA8bmItY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmsgYmFjay1saW5rXCIgYXJpYS1sYWJlbD1cIkJhY2tcIj5cclxuICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJhcnJvdy1iYWNrXCI+PC9uYi1pY29uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L25iLWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG5iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgPG5iLWF1dGgtYmxvY2s+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICA8L25iLWF1dGgtYmxvY2s+XHJcbiAgICAgICAgICA8L25iLWNhcmQtYm9keT5cclxuICAgICAgICA8L25iLWNhcmQ+XHJcbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cclxuICAgIDwvbmItbGF5b3V0PlxyXG4gICAgPGFicC1jb25maXJtYXRpb24+PC9hYnAtY29uZmlybWF0aW9uPlxyXG4gICAgPGFicC10b2FzdC1jb250YWluZXIgcmlnaHQ9XCIzMHB4XCIgYm90dG9tPVwiMzBweFwiPjwvYWJwLXRvYXN0LWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIHN0eWxlczogW1wiLyohXFxuICogQGxpY2Vuc2VcXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cXG4gKi86aG9zdCBuYi1jYXJke21hcmdpbjowO2hlaWdodDpjYWxjKDEwMHZoIC0gMiAqIDIuNXJlbSl9Omhvc3QgLm5hdmlnYXRpb24gLmxpbmt7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Omhvc3QgLm5hdmlnYXRpb24gLmxpbmsgbmItaWNvbntmb250LXNpemU6MnJlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Omhvc3QgLmxpbmtzIG5iLWljb257Zm9udC1zaXplOjIuNXJlbX06aG9zdCBuYi1jYXJkLWJvZHl7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCV9Omhvc3QgbmItYXV0aC1ibG9ja3ttYXJnaW46YXV0b31AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpezpob3N0IG5iLWNhcmR7Ym9yZGVyLXJhZGl1czowO2hlaWdodDoxMDB2aH19Omhvc3QgOjpuZy1kZWVwIG5iLWxheW91dCAubGF5b3V0IC5sYXlvdXQtY29udGFpbmVyIC5jb250ZW50IC5jb2x1bW5zIG5iLWxheW91dC1jb2x1bW57cGFkZGluZzoyLjVyZW19QG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KXs6aG9zdCA6Om5nLWRlZXAgbmItbGF5b3V0IC5sYXlvdXQgLmxheW91dC1jb250YWluZXIgLmNvbnRlbnQgLmNvbHVtbnMgbmItbGF5b3V0LWNvbHVtbntwYWRkaW5nOjB9fVxcblwiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudExheW91dENvbXBvbmVudCB7XHJcbiAgLy8gcmVxdWlyZWQgZm9yIGR5bmFtaWMgY29tcG9uZW50XHJcbiAgc3RhdGljIHR5cGUgPSBlTGF5b3V0VHlwZS5hY2NvdW50O1xyXG59XHJcbiJdfQ==