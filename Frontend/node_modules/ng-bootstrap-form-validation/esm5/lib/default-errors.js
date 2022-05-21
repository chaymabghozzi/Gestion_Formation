var ɵ0 = function (label) { return label + " is required"; }, ɵ1 = function (label) { return label + " is invalid"; }, ɵ2 = function (label, error) {
    return label + " must be at least " + error.requiredLength + " characters";
}, ɵ3 = function (label, error) {
    return label + " must be no longer than " + error.requiredLength + " characters";
}, ɵ4 = function (label, error) { return label + " is required"; }, ɵ5 = function (label, error) { return "Invalid email address"; }, ɵ6 = function (label, error) { return label + " must be no greater than " + error.max; }, ɵ7 = function (label, error) { return label + " must be no less than " + error.min; };
export var DEFAULT_ERRORS = [
    {
        error: "required",
        format: ɵ0
    },
    {
        error: "pattern",
        format: ɵ1
    },
    {
        error: "minlength",
        format: ɵ2
    },
    {
        error: "maxlength",
        format: ɵ3
    },
    {
        error: "requiredTrue",
        format: ɵ4
    },
    {
        error: "email",
        format: ɵ5
    },
    {
        error: "max",
        format: ɵ6
    },
    {
        error: "min",
        format: ɵ7
    }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lcnJvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJTQUtZLFVBQUEsS0FBSyxJQUFJLE9BQUcsS0FBSyxpQkFBYyxFQUF0QixDQUFzQixPQUkvQixVQUFBLEtBQUssSUFBSSxPQUFHLEtBQUssZ0JBQWEsRUFBckIsQ0FBcUIsT0FJOUIsVUFBQyxLQUFLLEVBQUUsS0FBSztJQUNuQixPQUFHLEtBQUssMEJBQXFCLEtBQUssQ0FBQyxjQUFjLGdCQUFhO0FBQTlELENBQThELE9BSXhELFVBQUMsS0FBSyxFQUFFLEtBQUs7SUFDbkIsT0FBRyxLQUFLLGdDQUEyQixLQUFLLENBQUMsY0FBYyxnQkFBYTtBQUFwRSxDQUFvRSxPQUk5RCxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBRyxLQUFLLGlCQUFjLEVBQXRCLENBQXNCLE9BSXhDLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixPQUl6QyxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBRyxLQUFLLGlDQUE0QixLQUFLLENBQUMsR0FBSyxFQUEvQyxDQUErQyxPQUlqRSxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBRyxLQUFLLDhCQUF5QixLQUFLLENBQUMsR0FBSyxFQUE1QyxDQUE0QztBQWpDMUUsTUFBTSxDQUFDLElBQU0sY0FBYyxHQUFtQjtJQUM1QztRQUNFLEtBQUssRUFBRSxVQUFVO1FBQ2pCLE1BQU0sSUFBaUM7S0FDeEM7SUFDRDtRQUNFLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sSUFBZ0M7S0FDdkM7SUFDRDtRQUNFLEtBQUssRUFBRSxXQUFXO1FBQ2xCLE1BQU0sSUFDMEQ7S0FDakU7SUFDRDtRQUNFLEtBQUssRUFBRSxXQUFXO1FBQ2xCLE1BQU0sSUFDZ0U7S0FDdkU7SUFDRDtRQUNFLEtBQUssRUFBRSxjQUFjO1FBQ3JCLE1BQU0sSUFBMEM7S0FDakQ7SUFDRDtRQUNFLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxJQUEyQztLQUNsRDtJQUNEO1FBQ0UsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLElBQW1FO0tBQzFFO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sSUFBZ0U7S0FDdkU7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JTOiBFcnJvck1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIGVycm9yOiBcInJlcXVpcmVkXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJwYXR0ZXJuXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgaW52YWxpZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pbmxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJtYXhsZW5ndGhcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+XG4gICAgICBgJHtsYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke2Vycm9yLnJlcXVpcmVkTGVuZ3RofSBjaGFyYWN0ZXJzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRUcnVlXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJlbWFpbFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYEludmFsaWQgZW1haWwgYWRkcmVzc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuICR7ZXJyb3IubWF4fWBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pblwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gbGVzcyB0aGFuICR7ZXJyb3IubWlufWBcbiAgfVxuXTtcbiJdfQ==