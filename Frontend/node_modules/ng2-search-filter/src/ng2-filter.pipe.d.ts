import { PipeTransform } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class Ng2SearchPipe implements PipeTransform {
    /**
       * @param items object from array
       * @param term term's search
       */
    transform(items: any, term: string): any;
    /**
     *
     * @param items List of items to filter
     * @param term  a string term to compare with every property of the list
     *
     */
    static filter(items: Array<{
        [key: string]: any;
    }>, term: string): Array<{
        [key: string]: any;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Ng2SearchPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<Ng2SearchPipe, "filter">;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Ng2SearchPipe>;
}

//# sourceMappingURL=ng2-filter.pipe.d.ts.map