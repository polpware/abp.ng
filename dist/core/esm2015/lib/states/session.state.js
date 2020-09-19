var SessionState_1;
import { __decorate, __metadata, __rest } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Actions, ofActionSuccessful, Selector, State, Store, } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetAppConfiguration } from '../actions/config.actions';
import { ModifyOpenedTabCount, SetLanguage, SetRemember, SetTenant, } from '../actions/session.actions';
let SessionState = SessionState_1 = class SessionState {
    constructor(oAuthService, store, actions) {
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe(() => {
            var _a;
            const sessionDetail = ((_a = this.store.selectSnapshot(SessionState_1)) === null || _a === void 0 ? void 0 : _a.sessionDetail) || {};
            const fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                this.oAuthService.logOut();
            }
            this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe(event => {
                this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            });
        });
    }
    static getLanguage({ language }) {
        return language;
    }
    static getTenant({ tenant }) {
        return tenant;
    }
    static getSessionDetail({ sessionDetail }) {
        return sessionDetail;
    }
    setLanguage({ patchState, dispatch }, { payload, dispatchAppConfiguration = true }) {
        patchState({
            language: payload,
        });
        if (dispatchAppConfiguration)
            return dispatch(new GetAppConfiguration());
    }
    setTenant({ patchState }, { payload }) {
        patchState({
            tenant: payload,
        });
    }
    setRemember({ getState, patchState }, { payload: remember }) {
        const { sessionDetail } = getState();
        patchState({
            sessionDetail: Object.assign(Object.assign({}, sessionDetail), { remember }),
        });
    }
    modifyOpenedTabCount({ getState, patchState }, { operation }) {
        // tslint:disable-next-line: prefer-const
        let _a = getState().sessionDetail || { openedTabCount: 0 }, { openedTabCount, lastExitTime } = _a, detail = __rest(_a, ["openedTabCount", "lastExitTime"]);
        if (operation === 'increase') {
            openedTabCount++;
        }
        else if (operation === 'decrease') {
            openedTabCount--;
            lastExitTime = new Date().valueOf();
        }
        if (!openedTabCount || openedTabCount < 0) {
            openedTabCount = 0;
        }
        patchState({
            sessionDetail: Object.assign({ openedTabCount,
                lastExitTime }, detail),
        });
    }
};
__decorate([
    Action(SetLanguage),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetLanguage]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "setLanguage", null);
__decorate([
    Action(SetTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetTenant]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "setTenant", null);
__decorate([
    Action(SetRemember),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetRemember]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "setRemember", null);
__decorate([
    Action(ModifyOpenedTabCount),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ModifyOpenedTabCount]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "modifyOpenedTabCount", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], SessionState, "getLanguage", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SessionState, "getTenant", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SessionState, "getSessionDetail", null);
SessionState = SessionState_1 = __decorate([
    State({
        name: 'SessionState',
        defaults: { sessionDetail: { openedTabCount: 0 } },
    }),
    Injectable(),
    __metadata("design:paramtypes", [OAuthService, Store, Actions])
], SessionState);
export { SessionState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBQ1Asa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixLQUFLLEVBRUwsS0FBSyxHQUNOLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sNEJBQTRCLENBQUM7QUFRcEMsSUFBYSxZQUFZLG9CQUF6QixNQUFhLFlBQVk7SUFnQnZCLFlBQW9CLFlBQTBCLEVBQVUsS0FBWSxFQUFVLE9BQWdCO1FBQTFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDNUYsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsR0FBRyxFQUFFOztZQUNkLE1BQU0sYUFBYSxHQUFHLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsY0FBWSxDQUFDLDBDQUFFLGFBQWEsS0FBSSxFQUFFLENBQUM7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REM7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDOzs2Q0FHNEIsV0FBVzs7K0NBTzFEO0FBR0Q7SUFEQyxNQUFNLENBQUMsU0FBUyxDQUFDOzs2Q0FDa0QsU0FBUzs7NkNBSTVFO0FBR0Q7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDOzs2Q0FHSyxXQUFXOzsrQ0FVbkM7QUFHRDtJQURDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzs7NkNBR1osb0JBQW9COzt3REF3QnBDO0FBdEdEO0lBREMsUUFBUSxFQUFFOzs7O3FDQUdWO0FBR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7bUNBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7OzswQ0FHVjtBQWRVLFlBQVk7SUFMeEIsS0FBSyxDQUFnQjtRQUNwQixJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQW1CO0tBQ3BFLENBQUM7SUFDRCxVQUFVLEVBQUU7cUNBaUJ1QixZQUFZLEVBQWlCLEtBQUssRUFBbUIsT0FBTztHQWhCbkYsWUFBWSxDQXlHeEI7U0F6R1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb24sXHJcbiAgQWN0aW9ucyxcclxuICBvZkFjdGlvblN1Y2Nlc3NmdWwsXHJcbiAgU2VsZWN0b3IsXHJcbiAgU3RhdGUsXHJcbiAgU3RhdGVDb250ZXh0LFxyXG4gIFN0b3JlLFxyXG59IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgU2V0TGFuZ3VhZ2UsXHJcbiAgU2V0UmVtZW1iZXIsXHJcbiAgU2V0VGVuYW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zJztcclxuaW1wb3J0IHsgQUJQLCBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBTdGF0ZTxTZXNzaW9uLlN0YXRlPih7XHJcbiAgbmFtZTogJ1Nlc3Npb25TdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgc2Vzc2lvbkRldGFpbDogeyBvcGVuZWRUYWJDb3VudDogMCB9IH0gYXMgU2Vzc2lvbi5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRMYW5ndWFnZSh7IGxhbmd1YWdlIH06IFNlc3Npb24uU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VGVuYW50KHsgdGVuYW50IH06IFNlc3Npb24uU3RhdGUpOiBBQlAuQmFzaWNJdGVtIHtcclxuICAgIHJldHVybiB0ZW5hbnQ7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRTZXNzaW9uRGV0YWlsKHsgc2Vzc2lvbkRldGFpbCB9OiBTZXNzaW9uLlN0YXRlKTogU2Vzc2lvbi5TZXNzaW9uRGV0YWlsIHtcclxuICAgIHJldHVybiBzZXNzaW9uRGV0YWlsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUsIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucykge1xyXG4gICAgYWN0aW9uc1xyXG4gICAgICAucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoR2V0QXBwQ29uZmlndXJhdGlvbikpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb25EZXRhaWwgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZSk/LnNlc3Npb25EZXRhaWwgfHwge307XHJcblxyXG4gICAgICAgIGNvbnN0IGZpdmVNaW51dGVzQmVmb3JlID0gbmV3IERhdGUoKS52YWx1ZU9mKCkgLSA1ICogNjAgKiAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLmxhc3RFeGl0VGltZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5vcGVuZWRUYWJDb3VudCA9PT0gMCAmJlxyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLnJlbWVtYmVyID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgPCBmaXZlTWludXRlc0JlZm9yZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCgnaW5jcmVhc2UnKSk7XHJcblxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICd1bmxvYWQnKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2RlY3JlYXNlJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0TGFuZ3VhZ2UpXHJcbiAgc2V0TGFuZ3VhZ2UoXHJcbiAgICB7IHBhdGNoU3RhdGUsIGRpc3BhdGNoIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgcGF5bG9hZCwgZGlzcGF0Y2hBcHBDb25maWd1cmF0aW9uID0gdHJ1ZSB9OiBTZXRMYW5ndWFnZSxcclxuICApIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZTogcGF5bG9hZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChkaXNwYXRjaEFwcENvbmZpZ3VyYXRpb24pIHJldHVybiBkaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0VGVuYW50KVxyXG4gIHNldFRlbmFudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0VGVuYW50KSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgdGVuYW50OiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFJlbWVtYmVyKVxyXG4gIHNldFJlbWVtYmVyKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQ6IHJlbWVtYmVyIH06IFNldFJlbWVtYmVyLFxyXG4gICkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgLi4uc2Vzc2lvbkRldGFpbCxcclxuICAgICAgICByZW1lbWJlcixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihNb2RpZnlPcGVuZWRUYWJDb3VudClcclxuICBtb2RpZnlPcGVuZWRUYWJDb3VudChcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBvcGVyYXRpb24gfTogTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxyXG4gICAgbGV0IHsgb3BlbmVkVGFiQ291bnQsIGxhc3RFeGl0VGltZSwgLi4uZGV0YWlsIH0gPVxyXG4gICAgICBnZXRTdGF0ZSgpLnNlc3Npb25EZXRhaWwgfHwgKHsgb3BlbmVkVGFiQ291bnQ6IDAgfSBhcyBTZXNzaW9uLlNlc3Npb25EZXRhaWwpO1xyXG5cclxuICAgIGlmIChvcGVyYXRpb24gPT09ICdpbmNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQrKztcclxuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVjcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50LS07XHJcbiAgICAgIGxhc3RFeGl0VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3BlbmVkVGFiQ291bnQgfHwgb3BlbmVkVGFiQ291bnQgPCAwKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIG9wZW5lZFRhYkNvdW50LFxyXG4gICAgICAgIGxhc3RFeGl0VGltZSxcclxuICAgICAgICAuLi5kZXRhaWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19