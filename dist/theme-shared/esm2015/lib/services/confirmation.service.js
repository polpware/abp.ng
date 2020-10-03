import { ContentProjectionService, PROJECTION_STRATEGY } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { fromEvent, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { Confirmation } from '../models/confirmation';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ConfirmationService {
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
        this.clear = (status = Confirmation.Status.dismiss) => {
            this.confirmation$.next();
            this.status$.next(status);
        };
    }
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
            confirmation$: this.confirmation$,
            clear: this.clear,
        }));
        setTimeout(() => {
            this.containerComponentRef.changeDetectorRef.detectChanges();
        }, 0);
    }
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    show(message, title, severity, options = {}) {
        if (!this.containerComponentRef)
            this.setContainer();
        this.confirmation$.next({
            message,
            title,
            severity: severity || 'neutral',
            options,
        });
        this.status$ = new Subject();
        const { dismissible = true } = options;
        if (dismissible)
            this.listenToEscape();
        return this.status$;
    }
    listenToEscape() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.status$), debounceTime(150), filter((key) => key && key.key === 'Escape'))
            .subscribe(_ => {
            this.clear();
        });
    }
}
ConfirmationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
ConfirmationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ConfirmationService.ctorParameters = () => [
    { type: ContentProjectionService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckYsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBYyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBR3RELE1BQU0sT0FBTyxtQkFBbUI7SUFXOUIsWUFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFUdEUsa0JBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBMEIsQ0FBQyxDQUFDLENBQUM7UUFJOUQsVUFBSyxHQUFHLENBQUMsU0FBOEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztJQUV1RSxDQUFDO0lBRWxFLFlBQVk7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQ3ZFLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixFQUFFO1lBQy9ELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUNILENBQUM7UUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9ELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxPQUFPLENBQ0wsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxLQUFLLENBQ0gsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsUUFBZ0MsRUFDaEMsVUFBVSxFQUFtQztRQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQjtZQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixPQUFPO1lBQ1AsS0FBSztZQUNMLFFBQVEsRUFBRSxRQUFRLElBQUksU0FBUztZQUMvQixPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdCLE1BQU0sRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLElBQUksV0FBVztZQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVPLGNBQWM7UUFDcEIsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3ZCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTSxDQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQzVEO2FBQ0EsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O1lBM0ZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQVBqQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcsIENvbnRlbnRQcm9qZWN0aW9uU2VydmljZSwgUFJPSkVDVElPTl9TVFJBVEVHWSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblNlcnZpY2Uge1xyXG4gIHN0YXR1cyQ6IFN1YmplY3Q8Q29uZmlybWF0aW9uLlN0YXR1cz47XHJcbiAgY29uZmlybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENvbmZpcm1hdGlvbi5EaWFsb2dEYXRhPigxKTtcclxuXHJcbiAgcHJpdmF0ZSBjb250YWluZXJDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxDb25maXJtYXRpb25Db21wb25lbnQ+O1xyXG5cclxuICBjbGVhciA9IChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMgPSBDb25maXJtYXRpb24uU3RhdHVzLmRpc21pc3MpID0+IHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uJC5uZXh0KCk7XHJcbiAgICB0aGlzLnN0YXR1cyQubmV4dChzdGF0dXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudFByb2plY3Rpb25TZXJ2aWNlOiBDb250ZW50UHJvamVjdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29udGFpbmVyKCkge1xyXG4gICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYgPSB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uU2VydmljZS5wcm9qZWN0Q29udGVudChcclxuICAgICAgUFJPSkVDVElPTl9TVFJBVEVHWS5BcHBlbmRDb21wb25lbnRUb0JvZHkoQ29uZmlybWF0aW9uQ29tcG9uZW50LCB7XHJcbiAgICAgICAgY29uZmlybWF0aW9uJDogdGhpcy5jb25maXJtYXRpb24kLFxyXG4gICAgICAgIGNsZWFyOiB0aGlzLmNsZWFyLFxyXG4gICAgICB9KSxcclxuICAgICk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgaW5mbyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnaW5mbycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc3VjY2VzcyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnc3VjY2VzcycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgd2FybihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnd2FybmluZycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2Vycm9yJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzaG93KFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHNldmVyaXR5PzogQ29uZmlybWF0aW9uLlNldmVyaXR5LFxyXG4gICAgb3B0aW9ucyA9IHt9IGFzIFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZikgdGhpcy5zZXRDb250YWluZXIoKTtcclxuXHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbiQubmV4dCh7XHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBzZXZlcml0eTogc2V2ZXJpdHkgfHwgJ25ldXRyYWwnLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdGF0dXMkID0gbmV3IFN1YmplY3QoKTtcclxuICAgIGNvbnN0IHsgZGlzbWlzc2libGUgPSB0cnVlIH0gPSBvcHRpb25zO1xyXG4gICAgaWYgKGRpc21pc3NpYmxlKSB0aGlzLmxpc3RlblRvRXNjYXBlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzJDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9Fc2NhcGUoKSB7XHJcbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnN0YXR1cyQpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxNTApLFxyXG4gICAgICAgIGZpbHRlcigoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBrZXkgJiYga2V5LmtleSA9PT0gJ0VzY2FwZScpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19