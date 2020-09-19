import { EventEmitter, Renderer2, TrackByFunction } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PermissionManagement } from '../models/permission-management';
declare type PermissionWithStyle = PermissionManagement.Permission & {
    style: string;
};
export declare class PermissionManagementComponent implements PermissionManagement.PermissionManagementComponentInputs, PermissionManagement.PermissionManagementComponentOutputs {
    private store;
    private renderer;
    readonly providerName: string;
    readonly providerKey: string;
    readonly hideBadges = false;
    protected _visible: boolean;
    get visible(): boolean;
    set visible(value: boolean);
    readonly visibleChange: EventEmitter<boolean>;
    groups$: Observable<PermissionManagement.Group[]>;
    entityName$: Observable<string>;
    selectedGroup: PermissionManagement.Group;
    permissions: PermissionManagement.Permission[];
    selectThisTab: boolean;
    selectAllTab: boolean;
    modalBusy: boolean;
    trackByFn: TrackByFunction<PermissionManagement.Group>;
    get selectedGroupPermissions$(): Observable<PermissionWithStyle[]>;
    constructor(store: Store, renderer: Renderer2);
    getChecked(name: string): boolean;
    isGrantedByOtherProviderName(grantedProviders: PermissionManagement.GrantedProvider[]): boolean;
    onClickCheckbox(clickedPermission: PermissionManagement.Permission, value: any): void;
    setTabCheckboxState(): void;
    setGrantCheckboxState(): void;
    onClickSelectThisTab(): void;
    onClickSelectAll(): void;
    onChangeGroup(group: PermissionManagement.Group): void;
    submit(): void;
    openModal(): Observable<PermissionManagement.Response>;
    initModal(): void;
    getAssignedCount(groupName: string): number;
    shouldFetchAppConfig(): boolean;
}
export {};