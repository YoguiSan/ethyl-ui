import type { Components, JSX } from "../dist/types/components";

interface EuiGrid extends Components.EuiGrid, HTMLElement {}
export const EuiGrid: {
    prototype: EuiGrid;
    new (): EuiGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
