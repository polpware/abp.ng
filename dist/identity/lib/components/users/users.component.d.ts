import { ABP } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit, TemplateRef, TrackByFunction } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Identity } from '../../models/identity';
export declare class UsersComponent implements OnInit {
    private confirmationService;
    private fb;
    private store;
    data$: Observable<Identity.UserItem[]>;
    totalCount$: Observable<number>;
    modalContent: TemplateRef<any>;
    form: FormGroup;
    selected: Identity.UserItem;
    selectedUserRoles: Identity.RoleItem[];
    roles: Identity.RoleItem[];
    visiblePermissions: boolean;
    providerKey: string;
    pageQuery: ABP.PageQueryParams;
    isModalVisible: boolean;
    loading: boolean;
    modalBusy: boolean;
    sortOrder: string;
    sortKey: string;
    passwordRulesArr: ("number" | "small" | "capital" | "special")[];
    requiredPasswordLength: number;
    trackByFn: TrackByFunction<AbstractControl>;
    onVisiblePermissionChange: (event: any) => void;
    readonly roleGroups: FormGroup[];
    constructor(confirmationService: ConfirmationService, fb: FormBuilder, store: Store);
    ngOnInit(): void;
    onSearch(value: string): void;
    buildForm(): void;
    openModal(): void;
    add(): void;
    edit(id: string): void;
    save(): void;
    delete(id: string, userName: string): void;
    onPageChange(page: number): void;
    get(): void;
}
