import { PersonalSettingsComponent as AbpPersonalSettingsComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
export declare class PersonalSettingsComponent extends AbpPersonalSettingsComponent implements OnInit {
    private _fb;
    private _store;
    private _toasterService;
    constructor(_fb: FormBuilder, _store: Store, _toasterService: ToasterService);
}