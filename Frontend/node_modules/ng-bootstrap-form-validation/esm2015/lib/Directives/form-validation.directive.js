import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, Input, Output, HostListener } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
let FormValidationDirective = class FormValidationDirective {
    constructor() {
        this.validSubmit = new EventEmitter();
    }
    onSubmit() {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    }
    markAsTouchedAndDirty(control) {
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach(key => this.markAsTouchedAndDirty(control.controls[key]));
        }
        else if (control instanceof FormArray) {
            control.controls.forEach(c => this.markAsTouchedAndDirty(c));
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], FormValidationDirective.prototype, "formGroup", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormValidationDirective.prototype, "validSubmit", void 0);
__decorate([
    HostListener("submit"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormValidationDirective.prototype, "onSubmit", null);
FormValidationDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: "[formGroup]"
    })
], FormValidationDirective);
export { FormValidationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQU14QixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUFwQztRQUlFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQXVCeEMsQ0FBQztJQXBCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBd0I7UUFDNUMsSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNsRCxDQUFDO1NBQ0g7YUFBTSxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDthQUFNLElBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXpCQztJQURDLEtBQUssRUFBRTs4QkFDRyxTQUFTOzBEQUFDO0FBRXJCO0lBREMsTUFBTSxFQUFFOzs0REFDNkI7QUFHdEM7SUFEQyxZQUFZLENBQUMsUUFBUSxDQUFDOzs7O3VEQU10QjtBQVpVLHVCQUF1QjtJQUpuQyxTQUFTLENBQUM7UUFDVCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQztHQUNXLHVCQUF1QixDQTJCbkM7U0EzQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtQXJyYXksXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXBcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIltmb3JtR3JvdXBdXCJcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgQE91dHB1dCgpXG4gIHZhbGlkU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcihcInN1Ym1pdFwiKVxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eSh0aGlzLmZvcm1Hcm91cCk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkU3VibWl0LmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWRBbmREaXJ0eShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaChrZXkgPT5cbiAgICAgICAgdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkoY29udHJvbC5jb250cm9sc1trZXldKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIGNvbnRyb2wuY29udHJvbHMuZm9yRWFjaChjID0+IHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KGMpKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiBjb250cm9sLmVuYWJsZWQpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=