import { Inject, Injectable, InjectionToken } from '@angular/core';
import { actionMatcher, InitState, setValue, UpdateState, } from '@ngxs/store';
export const NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
export class ConfigPlugin {
    constructor(options) {
        this.options = options;
        this.initialized = false;
    }
    handle(state, event, next) {
        const matches = actionMatcher(event);
        const isInitAction = matches(InitState) || matches(UpdateState);
        if (isInitAction && !this.initialized) {
            state = setValue(state, 'ConfigState', Object.assign(Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState))), this.options));
            this.initialized = true;
        }
        return next(state, event);
    }
}
ConfigPlugin.decorators = [
    { type: Injectable }
];
ConfigPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUdULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxhQUFhLENBQUM7QUFHckIsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUczRixNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUF3RCxPQUFpQjtRQUFqQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRmpFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRWdELENBQUM7SUFFN0UsTUFBTSxDQUFDLEtBQVUsRUFBRSxLQUFVLEVBQUUsSUFBc0I7UUFDbkQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEUsSUFBSSxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLGFBQWEsa0NBQ2hDLENBQUMsS0FBSyxDQUFDLFdBQVcsc0JBQVMsS0FBSyxDQUFDLFdBQVcsQ0FBRSxDQUFDLEdBQy9DLElBQUksQ0FBQyxPQUFPLEVBQ2YsQ0FBQztZQUVILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQXBCRixVQUFVOzs7NENBSUksTUFBTSxTQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBhY3Rpb25NYXRjaGVyLFxyXG4gIEluaXRTdGF0ZSxcclxuICBOZ3hzTmV4dFBsdWdpbkZuLFxyXG4gIE5neHNQbHVnaW4sXHJcbiAgc2V0VmFsdWUsXHJcbiAgVXBkYXRlU3RhdGUsXHJcbn0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1BsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUykgcHJpdmF0ZSBvcHRpb25zOiBBQlAuUm9vdCkge31cclxuXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGV2ZW50OiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBhY3Rpb25NYXRjaGVyKGV2ZW50KTtcclxuICAgIGNvbnN0IGlzSW5pdEFjdGlvbiA9IG1hdGNoZXMoSW5pdFN0YXRlKSB8fCBtYXRjaGVzKFVwZGF0ZVN0YXRlKTtcclxuXHJcbiAgICBpZiAoaXNJbml0QWN0aW9uICYmICF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHN0YXRlID0gc2V0VmFsdWUoc3RhdGUsICdDb25maWdTdGF0ZScsIHtcclxuICAgICAgICAuLi4oc3RhdGUuQ29uZmlnU3RhdGUgJiYgeyAuLi5zdGF0ZS5Db25maWdTdGF0ZSB9KSxcclxuICAgICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoc3RhdGUsIGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19