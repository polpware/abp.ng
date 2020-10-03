import { getLocaleDirection, LazyLoadService, LOADING_STRATEGY, LocalizationService, } from '@abp/ng.core';
import { Injectable, Injector } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { BOOTSTRAP } from '../constants/styles';
import { LAZY_STYLES } from '../tokens/lazy-styles.token';
import * as i0 from "@angular/core";
export class LazyStyleHandler {
    constructor(injector) {
        this._dir = 'ltr';
        this.loaded = new Map();
        this.setStyles(injector);
        this.setLazyLoad(injector);
        this.listenToLanguageChanges(injector);
    }
    set dir(dir) {
        if (dir === this._dir)
            return;
        this.switchCSS(dir);
        this.setBodyDir(dir);
        this._dir = dir;
    }
    get dir() {
        return this._dir;
    }
    getHrefFromLink(link) {
        if (!link)
            return '';
        const a = document.createElement('a');
        a.href = link.href;
        return a.pathname.replace(/^\//, '');
    }
    getLoadedBootstrap() {
        const href = createLazyStyleHref(BOOTSTRAP, this.dir);
        const selector = `[href*="${href.replace(/\.css$/, '')}"]`;
        const link = document.querySelector(selector);
        return { href, link };
    }
    listenToLanguageChanges(injector) {
        const l10n = injector.get(LocalizationService);
        // will always listen, no need to unsubscribe
        l10n.languageChange
            .pipe(map(({ payload }) => payload), startWith(l10n.currentLang))
            .subscribe(locale => {
            this.dir = getLocaleDirection(locale);
        });
    }
    setBodyDir(dir) {
        document.body.dir = dir;
    }
    setLazyLoad(injector) {
        this.lazyLoad = injector.get(LazyLoadService);
        const { href, link } = this.getLoadedBootstrap();
        this.lazyLoad.loaded.set(href, link);
    }
    setStyles(injector) {
        this.styles = injector.get(LAZY_STYLES, [BOOTSTRAP]);
    }
    switchCSS(dir) {
        this.styles.forEach(style => {
            const oldHref = createLazyStyleHref(style, this.dir);
            const newHref = createLazyStyleHref(style, dir);
            const link = this.loaded.get(newHref);
            const href = this.getHrefFromLink(link) || newHref;
            const strategy = LOADING_STRATEGY.PrependAnonymousStyleToHead(href);
            this.lazyLoad.load(strategy).subscribe(() => {
                const oldLink = this.lazyLoad.loaded.get(oldHref);
                this.loaded.delete(newHref);
                this.loaded.set(oldHref, oldLink);
                const newLink = this.lazyLoad.loaded.get(href);
                this.lazyLoad.loaded.delete(href);
                this.lazyLoad.loaded.set(newHref, newLink);
                this.lazyLoad.remove(oldHref);
            });
        });
    }
}
LazyStyleHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyStyleHandler_Factory() { return new LazyStyleHandler(i0.ɵɵinject(i0.INJECTOR)); }, token: LazyStyleHandler, providedIn: "root" });
LazyStyleHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LazyStyleHandler.ctorParameters = () => [
    { type: Injector }
];
export function createLazyStyleHref(style, dir) {
    return style.replace(/{{\s*dir\s*}}/g, dir);
}
export function initLazyStyleHandler(injector) {
    return () => new LazyStyleHandler(injector);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1zdHlsZS5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvaGFuZGxlcnMvbGF6eS1zdHlsZS5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUsxRCxNQUFNLE9BQU8sZ0JBQWdCO0lBbUIzQixZQUFZLFFBQWtCO1FBaEJ0QixTQUFJLEdBQW9CLEtBQUssQ0FBQztRQUU3QixXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7UUFlbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBaEJELElBQUksR0FBRyxDQUFDLEdBQW9CO1FBQzFCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUU5QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBUU8sZUFBZSxDQUFDLElBQTRCO1FBQ2xELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFFckIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixNQUFNLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sUUFBUSxHQUFHLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMzRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFrQixRQUFRLENBQUMsQ0FBQztRQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxRQUFrQjtRQUNoRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0MsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxjQUFjO2FBQ2hCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDNUI7YUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxVQUFVLENBQUMsR0FBb0I7UUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFFTyxXQUFXLENBQUMsUUFBa0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU8sU0FBUyxDQUFDLFFBQWtCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxTQUFTLENBQUMsR0FBb0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUM7WUFFbkQsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBb0IsQ0FBQztnQkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBb0IsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXpGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVJvQixRQUFROztBQWtHN0IsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxHQUFXO0lBQzVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFFBQWtCO0lBQ3JELE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRMb2NhbGVEaXJlY3Rpb24sXHJcbiAgTGF6eUxvYWRTZXJ2aWNlLFxyXG4gIExPQURJTkdfU1RSQVRFR1ksXHJcbiAgTG9jYWxpemF0aW9uU2VydmljZSxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQk9PVFNUUkFQIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB7IExvY2FsZURpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBMQVpZX1NUWUxFUyB9IGZyb20gJy4uL3Rva2Vucy9sYXp5LXN0eWxlcy50b2tlbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eVN0eWxlSGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBsYXp5TG9hZDogTGF6eUxvYWRTZXJ2aWNlO1xyXG4gIHByaXZhdGUgc3R5bGVzOiBzdHJpbmdbXTtcclxuICBwcml2YXRlIF9kaXI6IExvY2FsZURpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICByZWFkb25seSBsb2FkZWQgPSBuZXcgTWFwPHN0cmluZywgSFRNTExpbmtFbGVtZW50PigpO1xyXG5cclxuICBzZXQgZGlyKGRpcjogTG9jYWxlRGlyZWN0aW9uKSB7XHJcbiAgICBpZiAoZGlyID09PSB0aGlzLl9kaXIpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnN3aXRjaENTUyhkaXIpO1xyXG4gICAgdGhpcy5zZXRCb2R5RGlyKGRpcik7XHJcbiAgICB0aGlzLl9kaXIgPSBkaXI7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlyKCk6IExvY2FsZURpcmVjdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLnNldFN0eWxlcyhpbmplY3Rvcik7XHJcbiAgICB0aGlzLnNldExhenlMb2FkKGluamVjdG9yKTtcclxuICAgIHRoaXMubGlzdGVuVG9MYW5ndWFnZUNoYW5nZXMoaW5qZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIcmVmRnJvbUxpbmsobGluazogSFRNTExpbmtFbGVtZW50IHwgbnVsbCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWxpbmspIHJldHVybiAnJztcclxuXHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5ocmVmID0gbGluay5ocmVmO1xyXG4gICAgcmV0dXJuIGEucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TG9hZGVkQm9vdHN0cmFwKCk6IExvYWRlZFN0eWxlIHtcclxuICAgIGNvbnN0IGhyZWYgPSBjcmVhdGVMYXp5U3R5bGVIcmVmKEJPT1RTVFJBUCwgdGhpcy5kaXIpO1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgW2hyZWYqPVwiJHtocmVmLnJlcGxhY2UoL1xcLmNzcyQvLCAnJyl9XCJdYDtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxMaW5rRWxlbWVudD4oc2VsZWN0b3IpO1xyXG4gICAgcmV0dXJuIHsgaHJlZiwgbGluayB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub0xhbmd1YWdlQ2hhbmdlcyhpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGNvbnN0IGwxMG4gPSBpbmplY3Rvci5nZXQoTG9jYWxpemF0aW9uU2VydmljZSk7XHJcblxyXG4gICAgLy8gd2lsbCBhbHdheXMgbGlzdGVuLCBubyBuZWVkIHRvIHVuc3Vic2NyaWJlXHJcbiAgICBsMTBuLmxhbmd1YWdlQ2hhbmdlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoeyBwYXlsb2FkIH0pID0+IHBheWxvYWQpLFxyXG4gICAgICAgIHN0YXJ0V2l0aChsMTBuLmN1cnJlbnRMYW5nKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGxvY2FsZSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXIgPSBnZXRMb2NhbGVEaXJlY3Rpb24obG9jYWxlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJvZHlEaXIoZGlyOiBMb2NhbGVEaXJlY3Rpb24pIHtcclxuICAgIGRvY3VtZW50LmJvZHkuZGlyID0gZGlyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRMYXp5TG9hZChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHRoaXMubGF6eUxvYWQgPSBpbmplY3Rvci5nZXQoTGF6eUxvYWRTZXJ2aWNlKTtcclxuICAgIGNvbnN0IHsgaHJlZiwgbGluayB9ID0gdGhpcy5nZXRMb2FkZWRCb290c3RyYXAoKTtcclxuICAgIHRoaXMubGF6eUxvYWQubG9hZGVkLnNldChocmVmLCBsaW5rKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3R5bGVzKGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgdGhpcy5zdHlsZXMgPSBpbmplY3Rvci5nZXQoTEFaWV9TVFlMRVMsIFtCT09UU1RSQVBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3dpdGNoQ1NTKGRpcjogTG9jYWxlRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLnN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuICAgICAgY29uc3Qgb2xkSHJlZiA9IGNyZWF0ZUxhenlTdHlsZUhyZWYoc3R5bGUsIHRoaXMuZGlyKTtcclxuICAgICAgY29uc3QgbmV3SHJlZiA9IGNyZWF0ZUxhenlTdHlsZUhyZWYoc3R5bGUsIGRpcik7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmxvYWRlZC5nZXQobmV3SHJlZik7XHJcbiAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEhyZWZGcm9tTGluayhsaW5rKSB8fCBuZXdIcmVmO1xyXG5cclxuICAgICAgY29uc3Qgc3RyYXRlZ3kgPSBMT0FESU5HX1NUUkFURUdZLlByZXBlbmRBbm9ueW1vdXNTdHlsZVRvSGVhZChocmVmKTtcclxuICAgICAgdGhpcy5sYXp5TG9hZC5sb2FkKHN0cmF0ZWd5KS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9sZExpbmsgPSB0aGlzLmxhenlMb2FkLmxvYWRlZC5nZXQob2xkSHJlZikgYXMgSFRNTExpbmtFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmRlbGV0ZShuZXdIcmVmKTtcclxuICAgICAgICB0aGlzLmxvYWRlZC5zZXQob2xkSHJlZiwgb2xkTGluayk7XHJcbiAgICAgICAgY29uc3QgbmV3TGluayA9IHRoaXMubGF6eUxvYWQubG9hZGVkLmdldChocmVmKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYXp5TG9hZC5sb2FkZWQuZGVsZXRlKGhyZWYpO1xyXG4gICAgICAgIHRoaXMubGF6eUxvYWQubG9hZGVkLnNldChuZXdIcmVmLCBuZXdMaW5rKTtcclxuICAgICAgICB0aGlzLmxhenlMb2FkLnJlbW92ZShvbGRIcmVmKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYXp5U3R5bGVIcmVmKHN0eWxlOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3R5bGUucmVwbGFjZSgve3tcXHMqZGlyXFxzKn19L2csIGRpcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0TGF6eVN0eWxlSGFuZGxlcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICByZXR1cm4gKCkgPT4gbmV3IExhenlTdHlsZUhhbmRsZXIoaW5qZWN0b3IpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9hZGVkU3R5bGUge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBsaW5rOiBIVE1MTGlua0VsZW1lbnQ7XHJcbn1cclxuIl19