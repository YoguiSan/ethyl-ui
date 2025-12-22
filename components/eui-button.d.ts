import type { Components, JSX } from "../dist/types/components";

interface EuiButton extends Components.EuiButton, HTMLElement {}
export const EuiButton: {
    prototype: EuiButton;
    new (): EuiButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
