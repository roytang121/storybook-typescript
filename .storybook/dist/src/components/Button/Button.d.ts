import React, { PureComponent } from 'react';
import { SemanticICONS } from 'semantic-ui-react';
export declare type ButtonType = 'primary' | 'secondary';
export interface IButton {
    /**
     * fired when button is clicked
     */
    onClick: () => void;
    /**
     * Disabled state
     */
    disabled?: boolean;
    /**
     * Button Type
     */
    type?: ButtonType;
    /**
     * Icon name
     */
    icon?: SemanticICONS | null;
}
/**
 * Basic Button component
 */
export declare class Button extends PureComponent<IButton> {
    defaultProps: Partial<IButton>;
    get IconElement(): React.ReactNode;
    render(): JSX.Element;
}
