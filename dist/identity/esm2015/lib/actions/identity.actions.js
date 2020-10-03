export class GetRoles {
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoles.type = '[Identity] Get Roles';
export class GetRoleById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoleById.type = '[Identity] Get Role By Id';
export class DeleteRole {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteRole.type = '[Identity] Delete Role';
export class CreateRole {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateRole.type = '[Identity] Create Role';
export class UpdateRole {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateRole.type = '[Identity] Update Role';
export class GetUsers {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUsers.type = '[Identity] Get Users';
export class GetUserById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserById.type = '[Identity] Get User By Id';
export class DeleteUser {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteUser.type = '[Identity] Delete User';
export class CreateUser {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateUser.type = '[Identity] Create User';
export class UpdateUser {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateUser.type = '[Identity] Update User';
export class GetUserRoles {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserRoles.type = '[Identity] Get User Roles';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2lkZW50aXR5L3NyYy9saWIvYWN0aW9ucy9pZGVudGl0eS5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQW1CLE9BQXdDO1FBQXhDLFlBQU8sR0FBUCxPQUFPLENBQWlDO0lBQUcsQ0FBQzs7QUFEL0MsYUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBSWhELE1BQU0sT0FBTyxXQUFXO0lBRXRCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQzs7QUFEdEIsZ0JBQUksR0FBRywyQkFBMkIsQ0FBQztBQUlyRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7O0FBRHRCLGVBQUksR0FBRyx3QkFBd0IsQ0FBQztBQUlsRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtJQUFHLENBQUM7O0FBRHJDLGVBQUksR0FBRyx3QkFBd0IsQ0FBQztBQUlsRCxNQUFNLE9BQU8sVUFBVTtJQUVyQixZQUFtQixPQUErQztRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUF3QztJQUFHLENBQUM7O0FBRHRELGVBQUksR0FBRyx3QkFBd0IsQ0FBQztBQUlsRCxNQUFNLE9BQU8sUUFBUTtJQUVuQixZQUFtQixPQUErQjtRQUEvQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtJQUFHLENBQUM7O0FBRHRDLGFBQUksR0FBRyxzQkFBc0IsQ0FBQztBQUloRCxNQUFNLE9BQU8sV0FBVztJQUV0QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7O0FBRHRCLGdCQUFJLEdBQUcsMkJBQTJCLENBQUM7QUFJckQsTUFBTSxPQUFPLFVBQVU7SUFFckIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDOztBQUR0QixlQUFJLEdBQUcsd0JBQXdCLENBQUM7QUFJbEQsTUFBTSxPQUFPLFVBQVU7SUFFckIsWUFBbUIsT0FBOEI7UUFBOUIsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7SUFBRyxDQUFDOztBQURyQyxlQUFJLEdBQUcsd0JBQXdCLENBQUM7QUFJbEQsTUFBTSxPQUFPLFVBQVU7SUFFckIsWUFBbUIsT0FBK0M7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0M7SUFBRyxDQUFDOztBQUR0RCxlQUFJLEdBQUcsd0JBQXdCLENBQUM7QUFJbEQsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDOztBQUR0QixpQkFBSSxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBBQlAsIFBhZ2VkQW5kU29ydGVkUmVzdWx0UmVxdWVzdER0byB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgR2V0SWRlbnRpdHlVc2Vyc0lucHV0LFxyXG4gIElkZW50aXR5Um9sZUNyZWF0ZUR0byxcclxuICBJZGVudGl0eVJvbGVVcGRhdGVEdG8sXHJcbiAgSWRlbnRpdHlVc2VyQ3JlYXRlRHRvLFxyXG4gIElkZW50aXR5VXNlclVwZGF0ZUR0byxcclxufSBmcm9tICcuLi9wcm94eS9pZGVudGl0eS9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJvbGVzIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbSWRlbnRpdHldIEdldCBSb2xlcyc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ/OiBQYWdlZEFuZFNvcnRlZFJlc3VsdFJlcXVlc3REdG8pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSb2xlQnlJZCB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0lkZW50aXR5XSBHZXQgUm9sZSBCeSBJZCc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVJvbGUge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tJZGVudGl0eV0gRGVsZXRlIFJvbGUnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVSb2xlIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbSWRlbnRpdHldIENyZWF0ZSBSb2xlJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogSWRlbnRpdHlSb2xlQ3JlYXRlRHRvKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlUm9sZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0lkZW50aXR5XSBVcGRhdGUgUm9sZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IElkZW50aXR5Um9sZVVwZGF0ZUR0byAmIHsgaWQ6IHN0cmluZyB9KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0VXNlcnMge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tJZGVudGl0eV0gR2V0IFVzZXJzJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZD86IEdldElkZW50aXR5VXNlcnNJbnB1dCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFVzZXJCeUlkIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbSWRlbnRpdHldIEdldCBVc2VyIEJ5IElkJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlciB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0lkZW50aXR5XSBEZWxldGUgVXNlcic7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXIge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tJZGVudGl0eV0gQ3JlYXRlIFVzZXInO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBJZGVudGl0eVVzZXJDcmVhdGVEdG8pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdbSWRlbnRpdHldIFVwZGF0ZSBVc2VyJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogSWRlbnRpdHlVc2VyVXBkYXRlRHRvICYgeyBpZDogc3RyaW5nIH0pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRVc2VyUm9sZXMge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tJZGVudGl0eV0gR2V0IFVzZXIgUm9sZXMnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuIl19