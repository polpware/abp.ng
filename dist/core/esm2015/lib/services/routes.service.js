import { Injectable } from '@angular/core';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';
import { GetAppConfiguration } from '../actions/config.actions';
import { ConfigState } from '../states/config.state';
import { pushValueTo } from '../utils/array-utils';
import { BaseTreeNode, createTreeFromList } from '../utils/tree-utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class AbstractTreeService {
    constructor() {
        this._flat$ = new BehaviorSubject([]);
        this._tree$ = new BehaviorSubject([]);
        this._visible$ = new BehaviorSubject([]);
    }
    get flat() {
        return this._flat$.value;
    }
    get flat$() {
        return this._flat$.asObservable();
    }
    get tree() {
        return this._tree$.value;
    }
    get tree$() {
        return this._tree$.asObservable();
    }
    get visible() {
        return this._visible$.value;
    }
    get visible$() {
        return this._visible$.asObservable();
    }
    createTree(items) {
        return createTreeFromList(items, item => item[this.id], item => item[this.parentId], item => BaseTreeNode.create(item));
    }
    filterWith(setOrMap) {
        return this._flat$.value.filter(item => !setOrMap.has(item[this.id]));
    }
    findItemsToRemove(set) {
        return this._flat$.value.reduce((acc, item) => {
            if (!acc.has(item[this.parentId]))
                return acc;
            const childSet = new Set([item[this.id]]);
            const children = this.findItemsToRemove(childSet);
            return new Set([...acc, ...children]);
        }, set);
    }
    publish(flatItems, visibleItems) {
        this._flat$.next(flatItems);
        this._tree$.next(this.createTree(flatItems));
        this._visible$.next(this.createTree(visibleItems));
        return flatItems;
    }
    add(items) {
        const map = new Map();
        items.forEach(item => map.set(item[this.id], item));
        const flatItems = this.filterWith(map);
        map.forEach(pushValueTo(flatItems));
        flatItems.sort(this.sort);
        const visibleItems = flatItems.filter(item => !this.hide(item));
        return this.publish(flatItems, visibleItems);
    }
    find(predicate, tree = this.tree) {
        return tree.reduce((acc, node) => (acc ? acc : predicate(node) ? node : this.find(predicate, node.children)), null);
    }
    patch(identifier, props) {
        const flatItems = this._flat$.value;
        const index = flatItems.findIndex(item => item[this.id] === identifier);
        if (index < 0)
            return false;
        flatItems[index] = Object.assign(Object.assign({}, flatItems[index]), props);
        flatItems.sort(this.sort);
        const visibleItems = flatItems.filter(item => !this.hide(item));
        return this.publish(flatItems, visibleItems);
    }
    refresh() {
        return this.add([]);
    }
    remove(identifiers) {
        const set = new Set();
        identifiers.forEach(id => set.add(id));
        const setToRemove = this.findItemsToRemove(set);
        const flatItems = this.filterWith(setToRemove);
        const visibleItems = flatItems.filter(item => !this.hide(item));
        return this.publish(flatItems, visibleItems);
    }
    search(params, tree = this.tree) {
        const searchKeys = Object.keys(params);
        return tree.reduce((acc, node) => acc
            ? acc
            : searchKeys.every(key => node[key] === params[key])
                ? node
                : this.search(params, node.children), null);
    }
}
export class AbstractNavTreeService extends AbstractTreeService {
    constructor(actions, store) {
        super();
        this.actions = actions;
        this.store = store;
        this.id = 'name';
        this.parentId = 'parentName';
        this.hide = (item) => item.invisible || !this.isGranted(item);
        this.sort = (a, b) => {
            if (!Number.isInteger(a.order))
                return 1;
            if (!Number.isInteger(b.order))
                return -1;
            return a.order - b.order;
        };
        this.subscription = this.actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .subscribe(() => this.refresh());
    }
    isGranted({ requiredPolicy }) {
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy(requiredPolicy));
    }
    hasChildren(identifier) {
        var _a;
        const node = this.find(item => item[this.id] === identifier);
        return Boolean((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length);
    }
    hasInvisibleChild(identifier) {
        var _a;
        const node = this.find(item => item[this.id] === identifier);
        return (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.some(child => child.invisible);
    }
    /* istanbul ignore next */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AbstractNavTreeService.decorators = [
    { type: Injectable }
];
AbstractNavTreeService.ctorParameters = () => [
    { type: Actions },
    { type: Store }
];
export class RoutesService extends AbstractNavTreeService {
}
RoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesService_Factory() { return new RoutesService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store)); }, token: RoutesService, providedIn: "root" });
RoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
export class SettingTabsService extends AbstractNavTreeService {
}
SettingTabsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingTabsService_Factory() { return new SettingTabsService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store)); }, token: SettingTabsService, providedIn: "root" });
SettingTabsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvc2VydmljZXMvcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQVksTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRWpGLE1BQU0sT0FBZ0IsbUJBQW1CO0lBQXpDO1FBTVUsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsRUFBRSxDQUFDLENBQUM7UUFDaEQsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFnQixFQUFFLENBQUMsQ0FBQztJQW9IN0QsQ0FBQztJQWxIQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8s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QUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUM7UUFDN0QsT0FBTyxPQUFPLE9BQUMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFFBQVEsMENBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlCQUFpQixDQUFDLFVBQWtCOztRQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQztRQUM3RCxhQUFPLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLDBDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDeEQsQ0FBQztJQUVELDBCQUEwQjtJQUMxQixXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUF2Q0YsVUFBVTs7O1lBdElGLE9BQU87WUFBc0IsS0FBSzs7QUFpTDNDLE1BQU0sT0FBTyxhQUFjLFNBQVEsc0JBQWlDOzs7O1lBRG5FLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O0FBSWxDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxzQkFBK0I7Ozs7WUFEdEUsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBvZkFjdGlvblN1Y2Nlc3NmdWwsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBwdXNoVmFsdWVUbyB9IGZyb20gJy4uL3V0aWxzL2FycmF5LXV0aWxzJztcclxuaW1wb3J0IHsgQmFzZVRyZWVOb2RlLCBjcmVhdGVUcmVlRnJvbUxpc3QsIFRyZWVOb2RlIH0gZnJvbSAnLi4vdXRpbHMvdHJlZS11dGlscyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUcmVlU2VydmljZTxUIGV4dGVuZHMgb2JqZWN0PiB7XHJcbiAgYWJzdHJhY3QgaWQ6IHN0cmluZztcclxuICBhYnN0cmFjdCBwYXJlbnRJZDogc3RyaW5nO1xyXG4gIGFic3RyYWN0IGhpZGU6IChpdGVtOiBUKSA9PiBib29sZWFuO1xyXG4gIGFic3RyYWN0IHNvcnQ6IChhOiBULCBiOiBUKSA9PiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX2ZsYXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUW10+KFtdKTtcclxuICBwcml2YXRlIF90cmVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VHJlZU5vZGU8VD5bXT4oW10pO1xyXG4gIHByaXZhdGUgX3Zpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUcmVlTm9kZTxUPltdPihbXSk7XHJcblxyXG4gIGdldCBmbGF0KCk6IFRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmxhdCQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZmxhdCQoKTogT2JzZXJ2YWJsZTxUW10+IHtcclxuICAgIHJldHVybiB0aGlzLl9mbGF0JC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCB0cmVlKCk6IFRyZWVOb2RlPFQ+W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyZWUkLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRyZWUkKCk6IE9ic2VydmFibGU8VHJlZU5vZGU8VD5bXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyZWUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc2libGUoKTogVHJlZU5vZGU8VD5bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZSQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZSQoKTogT2JzZXJ2YWJsZTxUcmVlTm9kZTxUPltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlVHJlZShpdGVtczogVFtdKTogVHJlZU5vZGU8VD5bXSB7XHJcbiAgICByZXR1cm4gY3JlYXRlVHJlZUZyb21MaXN0PFQsIFRyZWVOb2RlPFQ+PihcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIGl0ZW0gPT4gaXRlbVt0aGlzLmlkXSxcclxuICAgICAgaXRlbSA9PiBpdGVtW3RoaXMucGFyZW50SWRdLFxyXG4gICAgICBpdGVtID0+IEJhc2VUcmVlTm9kZS5jcmVhdGUoaXRlbSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWx0ZXJXaXRoKHNldE9yTWFwOiBTZXQ8c3RyaW5nPiB8IE1hcDxzdHJpbmcsIFQ+KTogVFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9mbGF0JC52YWx1ZS5maWx0ZXIoaXRlbSA9PiAhc2V0T3JNYXAuaGFzKGl0ZW1bdGhpcy5pZF0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZEl0ZW1zVG9SZW1vdmUoc2V0OiBTZXQ8c3RyaW5nPik6IFNldDxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9mbGF0JC52YWx1ZS5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWFjYy5oYXMoaXRlbVt0aGlzLnBhcmVudElkXSkpIHJldHVybiBhY2M7XHJcbiAgICAgIGNvbnN0IGNoaWxkU2V0ID0gbmV3IFNldChbaXRlbVt0aGlzLmlkXV0pO1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZmluZEl0ZW1zVG9SZW1vdmUoY2hpbGRTZXQpO1xyXG4gICAgICByZXR1cm4gbmV3IFNldChbLi4uYWNjLCAuLi5jaGlsZHJlbl0pO1xyXG4gICAgfSwgc2V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHVibGlzaChmbGF0SXRlbXM6IFRbXSwgdmlzaWJsZUl0ZW1zOiBUW10pOiBUW10ge1xyXG4gICAgdGhpcy5fZmxhdCQubmV4dChmbGF0SXRlbXMpO1xyXG4gICAgdGhpcy5fdHJlZSQubmV4dCh0aGlzLmNyZWF0ZVRyZWUoZmxhdEl0ZW1zKSk7XHJcbiAgICB0aGlzLl92aXNpYmxlJC5uZXh0KHRoaXMuY3JlYXRlVHJlZSh2aXNpYmxlSXRlbXMpKTtcclxuICAgIHJldHVybiBmbGF0SXRlbXM7XHJcbiAgfVxyXG5cclxuICBhZGQoaXRlbXM6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgVD4oKTtcclxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiBtYXAuc2V0KGl0ZW1bdGhpcy5pZF0sIGl0ZW0pKTtcclxuXHJcbiAgICBjb25zdCBmbGF0SXRlbXMgPSB0aGlzLmZpbHRlcldpdGgobWFwKTtcclxuICAgIG1hcC5mb3JFYWNoKHB1c2hWYWx1ZVRvKGZsYXRJdGVtcykpO1xyXG5cclxuICAgIGZsYXRJdGVtcy5zb3J0KHRoaXMuc29ydCk7XHJcbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSBmbGF0SXRlbXMuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuaGlkZShpdGVtKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHVibGlzaChmbGF0SXRlbXMsIHZpc2libGVJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmaW5kKHByZWRpY2F0ZTogKGl0ZW06IFRyZWVOb2RlPFQ+KSA9PiBib29sZWFuLCB0cmVlID0gdGhpcy50cmVlKTogVHJlZU5vZGU8VD4gfCBudWxsIHtcclxuICAgIHJldHVybiB0cmVlLnJlZHVjZShcclxuICAgICAgKGFjYywgbm9kZSkgPT4gKGFjYyA/IGFjYyA6IHByZWRpY2F0ZShub2RlKSA/IG5vZGUgOiB0aGlzLmZpbmQocHJlZGljYXRlLCBub2RlLmNoaWxkcmVuKSksXHJcbiAgICAgIG51bGwsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGF0Y2goaWRlbnRpZmllcjogc3RyaW5nLCBwcm9wczogUGFydGlhbDxUPik6IFRbXSB8IGZhbHNlIHtcclxuICAgIGNvbnN0IGZsYXRJdGVtcyA9IHRoaXMuX2ZsYXQkLnZhbHVlO1xyXG4gICAgY29uc3QgaW5kZXggPSBmbGF0SXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbVt0aGlzLmlkXSA9PT0gaWRlbnRpZmllcik7XHJcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZmxhdEl0ZW1zW2luZGV4XSA9IHsgLi4uZmxhdEl0ZW1zW2luZGV4XSwgLi4ucHJvcHMgfTtcclxuXHJcbiAgICBmbGF0SXRlbXMuc29ydCh0aGlzLnNvcnQpO1xyXG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zID0gZmxhdEl0ZW1zLmZpbHRlcihpdGVtID0+ICF0aGlzLmhpZGUoaXRlbSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnB1Ymxpc2goZmxhdEl0ZW1zLCB2aXNpYmxlSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpOiBUW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkKFtdKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpZGVudGlmaWVyczogc3RyaW5nW10pOiBUW10ge1xyXG4gICAgY29uc3Qgc2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBpZGVudGlmaWVycy5mb3JFYWNoKGlkID0+IHNldC5hZGQoaWQpKTtcclxuXHJcbiAgICBjb25zdCBzZXRUb1JlbW92ZSA9IHRoaXMuZmluZEl0ZW1zVG9SZW1vdmUoc2V0KTtcclxuICAgIGNvbnN0IGZsYXRJdGVtcyA9IHRoaXMuZmlsdGVyV2l0aChzZXRUb1JlbW92ZSk7XHJcbiAgICBjb25zdCB2aXNpYmxlSXRlbXMgPSBmbGF0SXRlbXMuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuaGlkZShpdGVtKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHVibGlzaChmbGF0SXRlbXMsIHZpc2libGVJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2gocGFyYW1zOiBQYXJ0aWFsPFQ+LCB0cmVlID0gdGhpcy50cmVlKTogVHJlZU5vZGU8VD4gfCBudWxsIHtcclxuICAgIGNvbnN0IHNlYXJjaEtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiB0cmVlLnJlZHVjZShcclxuICAgICAgKGFjYywgbm9kZSkgPT5cclxuICAgICAgICBhY2NcclxuICAgICAgICAgID8gYWNjXHJcbiAgICAgICAgICA6IHNlYXJjaEtleXMuZXZlcnkoa2V5ID0+IG5vZGVba2V5XSA9PT0gcGFyYW1zW2tleV0pXHJcbiAgICAgICAgICA/IG5vZGVcclxuICAgICAgICAgIDogdGhpcy5zZWFyY2gocGFyYW1zLCBub2RlLmNoaWxkcmVuKSxcclxuICAgICAgbnVsbCxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE5hdlRyZWVTZXJ2aWNlPFQgZXh0ZW5kcyBBQlAuTmF2PiBleHRlbmRzIEFic3RyYWN0VHJlZVNlcnZpY2U8VD5cclxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICByZWFkb25seSBpZCA9ICduYW1lJztcclxuICByZWFkb25seSBwYXJlbnRJZCA9ICdwYXJlbnROYW1lJztcclxuICByZWFkb25seSBoaWRlID0gKGl0ZW06IFQpID0+IGl0ZW0uaW52aXNpYmxlIHx8ICF0aGlzLmlzR3JhbnRlZChpdGVtKTtcclxuICByZWFkb25seSBzb3J0ID0gKGE6IFQsIGI6IFQpID0+IHtcclxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihhLm9yZGVyKSkgcmV0dXJuIDE7XHJcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoYi5vcmRlcikpIHJldHVybiAtMTtcclxuXHJcbiAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFjdGlvbnM6IEFjdGlvbnMsIHByb3RlY3RlZCBzdG9yZTogU3RvcmUpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKEdldEFwcENvbmZpZ3VyYXRpb24pKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0dyYW50ZWQoeyByZXF1aXJlZFBvbGljeSB9OiBUKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRHcmFudGVkUG9saWN5KHJlcXVpcmVkUG9saWN5KSk7XHJcbiAgfVxyXG5cclxuICBoYXNDaGlsZHJlbihpZGVudGlmaWVyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmZpbmQoaXRlbSA9PiBpdGVtW3RoaXMuaWRdID09PSBpZGVudGlmaWVyKTtcclxuICAgIHJldHVybiBCb29sZWFuKG5vZGU/LmNoaWxkcmVuPy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgaGFzSW52aXNpYmxlQ2hpbGQoaWRlbnRpZmllcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5maW5kKGl0ZW0gPT4gaXRlbVt0aGlzLmlkXSA9PT0gaWRlbnRpZmllcik7XHJcbiAgICByZXR1cm4gbm9kZT8uY2hpbGRyZW4/LnNvbWUoY2hpbGQgPT4gY2hpbGQuaW52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlc1NlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdE5hdlRyZWVTZXJ2aWNlPEFCUC5Sb3V0ZT4ge31cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nVGFic1NlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdE5hdlRyZWVTZXJ2aWNlPEFCUC5UYWI+IHt9XHJcbiJdfQ==