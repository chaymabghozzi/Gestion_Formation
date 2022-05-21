var NgBootstrapFormValidationModule_1;
import { __decorate } from "tslib";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "./Tokens/tokens";
import { BootstrapVersion } from "./Enums/BootstrapVersion";
import { FormGroupComponent } from "./Components/form-group/form-group.component";
import { FormControlDirective } from "./Directives/form-control.directive";
let NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = class NgBootstrapFormValidationModule {
    static forRoot(userOptions = {
        bootstrapVersion: BootstrapVersion.Four
    }) {
        return {
            ngModule: NgBootstrapFormValidationModule_1,
            providers: [
                {
                    provide: CUSTOM_ERROR_MESSAGES,
                    useValue: userOptions.customErrorMessages || [],
                    multi: true
                },
                {
                    provide: BOOTSTRAP_VERSION,
                    useValue: userOptions.bootstrapVersion
                },
                ErrorMessageService
            ]
        };
    }
};
NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [
            FormValidationDirective,
            FormGroupComponent,
            MessagesComponent,
            FormControlDirective
        ],
        exports: [
            FormValidationDirective,
            FormGroupComponent,
            MessagesComponent,
            FormControlDirective
        ]
    })
], NgBootstrapFormValidationModule);
export { NgBootstrapFormValidationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBaUIzRSxJQUFhLCtCQUErQix1Q0FBNUMsTUFBYSwrQkFBK0I7SUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FDWixjQUFzRDtRQUNwRCxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJO0tBQ3hDO1FBRUQsT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBK0I7WUFDekMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsbUJBQW1CLElBQUksRUFBRTtvQkFDL0MsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0I7aUJBQ3ZDO2dCQUNELG1CQUFtQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQXRCWSwrQkFBK0I7SUFmM0MsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRTtZQUNaLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtTQUNyQjtLQUNGLENBQUM7R0FDVywrQkFBK0IsQ0FzQjNDO1NBdEJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vU2VydmljZXMvZXJyb3ItbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDVVNUT01fRVJST1JfTUVTU0FHRVMsIEJPT1RTVFJBUF9WRVJTSU9OIH0gZnJvbSBcIi4vVG9rZW5zL3Rva2Vuc1wiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuL0VudW1zL0Jvb3RzdHJhcFZlcnNpb25cIjtcbmltcG9ydCB7IEZvcm1Hcm91cENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZU9wdGlvbnMgfSBmcm9tIFwiLi9Nb2RlbHMvTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZU9wdGlvbnNcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSBcIi4vRGlyZWN0aXZlcy9mb3JtLWNvbnRyb2wuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSxcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXG4gICAgTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRm9ybUNvbnRyb2xEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlLFxuICAgIEZvcm1Hcm91cENvbXBvbmVudCxcbiAgICBNZXNzYWdlc0NvbXBvbmVudCxcbiAgICBGb3JtQ29udHJvbERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICB1c2VyT3B0aW9uczogTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZU9wdGlvbnMgPSB7XG4gICAgICBib290c3RyYXBWZXJzaW9uOiBCb290c3RyYXBWZXJzaW9uLkZvdXJcbiAgICB9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ1VTVE9NX0VSUk9SX01FU1NBR0VTLFxuICAgICAgICAgIHVzZVZhbHVlOiB1c2VyT3B0aW9ucy5jdXN0b21FcnJvck1lc3NhZ2VzIHx8IFtdLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBCT09UU1RSQVBfVkVSU0lPTixcbiAgICAgICAgICB1c2VWYWx1ZTogdXNlck9wdGlvbnMuYm9vdHN0cmFwVmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICBFcnJvck1lc3NhZ2VTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19