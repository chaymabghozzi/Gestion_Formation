import { __decorate, __metadata, __param, __read, __spread } from "tslib";
import { Directive, Input, HostBinding, Optional, Host, SkipSelf, Inject } from "@angular/core";
import { ControlContainer, FormControl } from "@angular/forms";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../Tokens/tokens";
export function controlPath(name, parent) {
    // tslint:disable-next-line:no-non-null-assertion
    return __spread(parent.path, [name]);
}
var FormControlDirective = /** @class */ (function () {
    function FormControlDirective(
    // this value might be null, but we union type it as such until
    // this issue is resolved: https://github.com/angular/angular/issues/25544
    parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    Object.defineProperty(FormControlDirective.prototype, "validClass", {
        get: function () {
            if (!this.control) {
                return false;
            }
            return (this.bootstrapFour &&
                this.control.valid &&
                (this.control.touched || this.control.dirty));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "invalidClass", {
        get: function () {
            if (!this.control) {
                return false;
            }
            return (this.bootstrapFour &&
                this.control.invalid &&
                this.control.touched &&
                this.control.dirty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "path", {
        get: function () {
            return controlPath(this.formControlName, this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        get: function () {
            return this.formDirective && this.formDirective.getControl(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "formDirective", {
        get: function () {
            return this.parent ? this.parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "bootstrapFour", {
        get: function () {
            return this.bootstrapVersion === BootstrapVersion.Four;
        },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: undefined, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
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
    return FormControlDirective;
}());
export { FormControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxNQUF3QjtJQUNoRSxpREFBaUQ7SUFDakQsZ0JBQVcsTUFBTSxDQUFDLElBQUssR0FBRSxJQUFJLEdBQUU7QUFDakMsQ0FBQztBQU1EO0lBK0NFO0lBQ0UsK0RBQStEO0lBQy9ELDBFQUEwRTtJQUlsRSxNQUF3QixFQUNHLGdCQUFrQztRQUQ3RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDcEUsQ0FBQztJQWhESixzQkFBSSw0Q0FBVTthQUFkO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLENBQ0wsSUFBSSxDQUFDLGFBQWE7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUM3QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSw4Q0FBWTthQUFoQjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ25CLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFJO2FBQVI7WUFDRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQ3pELENBQUM7OztPQUFBOztnQkFRaUIsZ0JBQWdCLHVCQUgvQixRQUFRLFlBQ1IsSUFBSSxZQUNKLFFBQVE7Z0RBRVIsTUFBTSxTQUFDLGlCQUFpQjs7SUFwRDNCO1FBREMsS0FBSyxFQUFFOztpRUFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7OzZEQUNZO0lBR3BCO1FBREMsV0FBVyxDQUFDLGdCQUFnQixDQUFDOzs7MERBVTdCO0lBR0Q7UUFEQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7Ozs0REFXL0I7SUE3QlUsb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsdURBQXVEO1NBQ2xFLENBQUM7UUFtREcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsSUFBSSxFQUFFLENBQUE7UUFDTixXQUFBLFFBQVEsRUFBRSxDQUFBO1FBRVYsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTt5Q0FEVixnQkFBZ0I7T0FyRHZCLG9CQUFvQixDQXdEaEM7SUFBRCwyQkFBQztDQUFBLEFBeERELElBd0RDO1NBeERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgSG9zdCxcbiAgU2tpcFNlbGYsXG4gIEluamVjdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi4vRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi4vVG9rZW5zL3Rva2Vuc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbFBhdGgobmFtZTogc3RyaW5nLCBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIpOiBzdHJpbmdbXSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgcmV0dXJuIFsuLi5wYXJlbnQucGF0aCEsIG5hbWVdO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCIuZm9ybS1jb250cm9sLC5mb3JtLWNoZWNrLWlucHV0LC5jdXN0b20tY29udHJvbC1pbnB1dFwiXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGZvcm1Db250cm9sOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXMtdmFsaWRcIilcbiAgZ2V0IHZhbGlkQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYm9vdHN0cmFwRm91ciAmJlxuICAgICAgdGhpcy5jb250cm9sLnZhbGlkICYmXG4gICAgICAodGhpcy5jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5jb250cm9sLmRpcnR5KVxuICAgICk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pcy1pbnZhbGlkXCIpXG4gIGdldCBpbnZhbGlkQ2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuYm9vdHN0cmFwRm91ciAmJlxuICAgICAgdGhpcy5jb250cm9sLmludmFsaWQgJiZcbiAgICAgIHRoaXMuY29udHJvbC50b3VjaGVkICYmXG4gICAgICB0aGlzLmNvbnRyb2wuZGlydHlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMuZm9ybUNvbnRyb2xOYW1lLCB0aGlzLnBhcmVudCk7XG4gIH1cblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZSAmJiB0aGlzLmZvcm1EaXJlY3RpdmUuZ2V0Q29udHJvbCh0aGlzKTtcbiAgfVxuXG4gIGdldCBmb3JtRGlyZWN0aXZlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgYm9vdHN0cmFwRm91cigpIHtcbiAgICByZXR1cm4gdGhpcy5ib290c3RyYXBWZXJzaW9uID09PSBCb290c3RyYXBWZXJzaW9uLkZvdXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyB0aGlzIHZhbHVlIG1pZ2h0IGJlIG51bGwsIGJ1dCB3ZSB1bmlvbiB0eXBlIGl0IGFzIHN1Y2ggdW50aWxcbiAgICAvLyB0aGlzIGlzc3VlIGlzIHJlc29sdmVkOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNTU0NFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIEBTa2lwU2VsZigpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgQEluamVjdChCT09UU1RSQVBfVkVSU0lPTikgcHJpdmF0ZSBib290c3RyYXBWZXJzaW9uOiBCb290c3RyYXBWZXJzaW9uXG4gICkge31cbn1cbiJdfQ==