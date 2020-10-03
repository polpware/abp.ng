import { of } from 'rxjs';
import { Prop, PropList, Props, PropsFactory, } from './props';
export class EntityPropList extends PropList {
}
export class EntityProps extends Props {
    constructor() {
        super(...arguments);
        this._ctor = EntityPropList;
    }
}
export class EntityPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = EntityProps;
    }
}
export class EntityProp extends Prop {
    constructor(options) {
        super(options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);
        this.columnWidth = options.columnWidth;
        this.sortable = options.sortable || false;
        this.valueResolver = options.valueResolver || (data => of(data.record[this.name]));
        this.action = options.action;
    }
    static create(options) {
        return new EntityProp(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(EntityProp.create);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXByb3BzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9tb2RlbHMvZW50aXR5LXByb3BzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUNMLElBQUksRUFJSixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksR0FDYixNQUFNLFNBQVMsQ0FBQztBQUdqQixNQUFNLE9BQU8sY0FBd0IsU0FBUSxRQUEwQjtDQUFHO0FBRTFFLE1BQU0sT0FBTyxXQUFxQixTQUFRLEtBQXdCO0lBQWxFOztRQUNZLFVBQUssR0FBNEIsY0FBYyxDQUFDO0lBQzVELENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxrQkFBNEIsU0FBUSxZQUE0QjtJQUE3RTs7UUFDWSxVQUFLLEdBQXlCLFdBQVcsQ0FBQztJQUN0RCxDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sVUFBb0IsU0FBUSxJQUFPO0lBTTlDLFlBQVksT0FBNkI7UUFDdkMsS0FBSyxDQUNILE9BQU8sQ0FBQyxJQUFJLEVBQ1osT0FBTyxDQUFDLElBQUksRUFDWixPQUFPLENBQUMsV0FBVyxFQUNuQixPQUFPLENBQUMsVUFBVSxFQUNsQixPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFVLE9BQTZCO1FBQ2xELE9BQU8sSUFBSSxVQUFVLENBQUksT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQVUsY0FBc0M7UUFDL0QsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXHJcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTyB9IGZyb20gJ3RzLXRvb2xiZWx0JztcclxuaW1wb3J0IHtcclxuICBQcm9wLFxyXG4gIFByb3BDYWxsYmFjayxcclxuICBQcm9wQ29udHJpYnV0b3JDYWxsYmFjayxcclxuICBQcm9wQ29udHJpYnV0b3JDYWxsYmFja3MsXHJcbiAgUHJvcExpc3QsXHJcbiAgUHJvcHMsXHJcbiAgUHJvcHNGYWN0b3J5LFxyXG59IGZyb20gJy4vcHJvcHMnO1xyXG5pbXBvcnQgeyBBY3Rpb25DYWxsYmFjayB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5UHJvcExpc3Q8UiA9IGFueT4gZXh0ZW5kcyBQcm9wTGlzdDxSLCBFbnRpdHlQcm9wPFI+PiB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eVByb3BzPFIgPSBhbnk+IGV4dGVuZHMgUHJvcHM8RW50aXR5UHJvcExpc3Q8Uj4+IHtcclxuICBwcm90ZWN0ZWQgX2N0b3I6IFR5cGU8RW50aXR5UHJvcExpc3Q8Uj4+ID0gRW50aXR5UHJvcExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlQcm9wc0ZhY3Rvcnk8UiA9IGFueT4gZXh0ZW5kcyBQcm9wc0ZhY3Rvcnk8RW50aXR5UHJvcHM8Uj4+IHtcclxuICBwcm90ZWN0ZWQgX2N0b3I6IFR5cGU8RW50aXR5UHJvcHM8Uj4+ID0gRW50aXR5UHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlQcm9wPFIgPSBhbnk+IGV4dGVuZHMgUHJvcDxSPiB7XHJcbiAgcmVhZG9ubHkgY29sdW1uV2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBzb3J0YWJsZTogYm9vbGVhbjtcclxuICByZWFkb25seSB2YWx1ZVJlc29sdmVyOiBQcm9wQ2FsbGJhY2s8UiwgT2JzZXJ2YWJsZTxhbnk+PjtcclxuICByZWFkb25seSBhY3Rpb246IEFjdGlvbkNhbGxiYWNrPFI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRpdHlQcm9wT3B0aW9uczxSPikge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIG9wdGlvbnMudHlwZSxcclxuICAgICAgb3B0aW9ucy5uYW1lLFxyXG4gICAgICBvcHRpb25zLmRpc3BsYXlOYW1lLFxyXG4gICAgICBvcHRpb25zLnBlcm1pc3Npb24sXHJcbiAgICAgIG9wdGlvbnMudmlzaWJsZSxcclxuICAgICAgb3B0aW9ucy5pc0V4dHJhLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbHVtbldpZHRoID0gb3B0aW9ucy5jb2x1bW5XaWR0aDtcclxuICAgIHRoaXMuc29ydGFibGUgPSBvcHRpb25zLnNvcnRhYmxlIHx8IGZhbHNlO1xyXG4gICAgdGhpcy52YWx1ZVJlc29sdmVyID0gb3B0aW9ucy52YWx1ZVJlc29sdmVyIHx8IChkYXRhID0+IG9mKGRhdGEucmVjb3JkW3RoaXMubmFtZV0pKTtcclxuICAgIHRoaXMuYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlPFIgPSBhbnk+KG9wdGlvbnM6IEVudGl0eVByb3BPcHRpb25zPFI+KSB7XHJcbiAgICByZXR1cm4gbmV3IEVudGl0eVByb3A8Uj4ob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlTWFueTxSID0gYW55PihhcnJheU9mT3B0aW9uczogRW50aXR5UHJvcE9wdGlvbnM8Uj5bXSkge1xyXG4gICAgcmV0dXJuIGFycmF5T2ZPcHRpb25zLm1hcChFbnRpdHlQcm9wLmNyZWF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFbnRpdHlQcm9wT3B0aW9uczxSID0gYW55PiA9IE8uT3B0aW9uYWw8XHJcbiAgTy5Xcml0YWJsZTxFbnRpdHlQcm9wPFI+PixcclxuICB8ICdwZXJtaXNzaW9uJ1xyXG4gIHwgJ3Zpc2libGUnXHJcbiAgfCAnZGlzcGxheU5hbWUnXHJcbiAgfCAnaXNFeHRyYSdcclxuICB8ICdjb2x1bW5XaWR0aCdcclxuICB8ICdzb3J0YWJsZSdcclxuICB8ICd2YWx1ZVJlc29sdmVyJ1xyXG4gIHwgJ2FjdGlvbidcclxuPjtcclxuXHJcbmV4cG9ydCB0eXBlIEVudGl0eVByb3BEZWZhdWx0czxSID0gYW55PiA9IFJlY29yZDxzdHJpbmcsIEVudGl0eVByb3A8Uj5bXT47XHJcbmV4cG9ydCB0eXBlIEVudGl0eVByb3BDb250cmlidXRvckNhbGxiYWNrPFIgPSBhbnk+ID0gUHJvcENvbnRyaWJ1dG9yQ2FsbGJhY2s8RW50aXR5UHJvcExpc3Q8Uj4+O1xyXG5leHBvcnQgdHlwZSBFbnRpdHlQcm9wQ29udHJpYnV0b3JDYWxsYmFja3M8UiA9IGFueT4gPSBQcm9wQ29udHJpYnV0b3JDYWxsYmFja3M8RW50aXR5UHJvcExpc3Q8Uj4+O1xyXG4iXX0=