import type { Components, JSX } from "../dist/types/components";

interface EuiFigure extends Components.EuiFigure, HTMLElement {}
export const EuiFigure: {
    prototype: EuiFigure;
    new (): EuiFigure;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
