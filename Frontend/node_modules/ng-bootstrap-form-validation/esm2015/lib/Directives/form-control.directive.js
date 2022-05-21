import { __decorate, __metadata, __param } from "tslib";
import { Directive, Input, HostBinding, Optional, Host, SkipSelf, Inject } from "@angular/core";
import { ControlContainer, FormControl } from "@angular/forms";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../Tokens/tokens";
export function controlPath(name, parent) {
    // tslint:disable-next-line:no-non-null-assertion
    return [...parent.path, name];
}
let FormControlDirective = class FormControlDirective {
    constructor(
    // this value might be null, but we union type it as such until
    // this issue is resolved: https://github.com/angular/angular/issues/25544
    parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    get validClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.valid &&
            (this.control.touched || this.control.dirty));
    }
    get invalidClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.invalid &&
            this.control.touched &&
            this.control.dirty);
    }
    get path() {
        return controlPath(this.formControlName, this.parent);
    }
    get control() {
        return this.formDirective && this.formDirective.getControl(this);
    }
    get formDirective() {
        return this.parent ? this.parent.formDirective : null;
    }
    get bootstrapFour() {
        return this.bootstrapVersion === BootstrapVersion.Four;
    }
};
FormControlDirective.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], FormControlDirective.prototype, "formControlName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FormControlDirective.prototype, "formControl", void 0);
__decorate([
    HostBinding("class.is-valid"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FormControlDirective.prototype, "validClass", null);
__decorate([
    HostBinding("class.is-invalid"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FormControlDirective.prototype, "invalidClass", null);
FormControlDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: ".form-control,.form-check-input,.custom-control-input"
    }),
    __param(0, Optional()),
    __param(0, Host()),
    __param(0, SkipSelf()),
    __param(1, Inject(BOOTSTRAP_VERSION)),
    __metadata("design:paramtypes", [ControlContainer, Number])
], FormControlDirective);
export { FormControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxNQUF3QjtJQUNoRSxpREFBaUQ7SUFDakQsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBTUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUErQy9CO0lBQ0UsK0RBQStEO0lBQy9ELDBFQUEwRTtJQUlsRSxNQUF3QixFQUNHLGdCQUFrQztRQUQ3RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDcEUsQ0FBQztJQWhESixJQUFJLFVBQVU7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUNsQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQzdDLENBQUM7SUFDSixDQUFDO0lBR0QsSUFBSSxZQUFZO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsYUFBYTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7Q0FXRixDQUFBOztZQUhtQixnQkFBZ0IsdUJBSC9CLFFBQVEsWUFDUixJQUFJLFlBQ0osUUFBUTs0Q0FFUixNQUFNLFNBQUMsaUJBQWlCOztBQXBEM0I7SUFEQyxLQUFLLEVBQUU7OzZEQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTs7eURBQ1k7QUFHcEI7SUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7OztzREFVN0I7QUFHRDtJQURDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7O3dEQVcvQjtBQTdCVSxvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSx1REFBdUQ7S0FDbEUsQ0FBQztJQW1ERyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxJQUFJLEVBQUUsQ0FBQTtJQUNOLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFFVixXQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO3FDQURWLGdCQUFnQjtHQXJEdkIsb0JBQW9CLENBd0RoQztTQXhEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIEhvc3QsXG4gIFNraXBTZWxmLFxuICBJbmplY3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBCb290c3RyYXBWZXJzaW9uIH0gZnJvbSBcIi4uL0VudW1zL0Jvb3RzdHJhcFZlcnNpb25cIjtcbmltcG9ydCB7IEJPT1RTVFJBUF9WRVJTSU9OIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xQYXRoKG5hbWU6IHN0cmluZywgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKTogc3RyaW5nW10ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gIHJldHVybiBbLi4ucGFyZW50LnBhdGghLCBuYW1lXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwiLmZvcm0tY29udHJvbCwuZm9ybS1jaGVjay1pbnB1dCwuY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtQ29udHJvbDogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmlzLXZhbGlkXCIpXG4gIGdldCB2YWxpZENsYXNzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJvb3RzdHJhcEZvdXIgJiZcbiAgICAgIHRoaXMuY29udHJvbC52YWxpZCAmJlxuICAgICAgKHRoaXMuY29udHJvbC50b3VjaGVkIHx8IHRoaXMuY29udHJvbC5kaXJ0eSlcbiAgICApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXMtaW52YWxpZFwiKVxuICBnZXQgaW52YWxpZENsYXNzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJvb3RzdHJhcEZvdXIgJiZcbiAgICAgIHRoaXMuY29udHJvbC5pbnZhbGlkICYmXG4gICAgICB0aGlzLmNvbnRyb2wudG91Y2hlZCAmJlxuICAgICAgdGhpcy5jb250cm9sLmRpcnR5XG4gICAgKTtcbiAgfVxuXG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiBjb250cm9sUGF0aCh0aGlzLmZvcm1Db250cm9sTmFtZSwgdGhpcy5wYXJlbnQpO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmZvcm1EaXJlY3RpdmUgJiYgdGhpcy5mb3JtRGlyZWN0aXZlLmdldENvbnRyb2wodGhpcyk7XG4gIH1cblxuICBnZXQgZm9ybURpcmVjdGl2ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGJvb3RzdHJhcEZvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwVmVyc2lvbiA9PT0gQm9vdHN0cmFwVmVyc2lvbi5Gb3VyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gdGhpcyB2YWx1ZSBtaWdodCBiZSBudWxsLCBidXQgd2UgdW5pb24gdHlwZSBpdCBhcyBzdWNoIHVudGlsXG4gICAgLy8gdGhpcyBpc3N1ZSBpcyByZXNvbHZlZDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjU1NDRcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBAU2tpcFNlbGYoKVxuICAgIHByaXZhdGUgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgIEBJbmplY3QoQk9PVFNUUkFQX1ZFUlNJT04pIHByaXZhdGUgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvblxuICApIHt9XG59XG4iXX0=