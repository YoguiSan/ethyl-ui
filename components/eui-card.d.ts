import type { Components, JSX } from "../dist/types/components";

interface EuiCard extends Components.EuiCard, HTMLElement {}
export const EuiCard: {
    prototype: EuiCard;
    new (): EuiCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
