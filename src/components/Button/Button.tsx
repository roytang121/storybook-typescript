import React, { PureComponent } from 'react';
import { Button as SButton, Icon, SemanticICONS } from 'semantic-ui-react';

export type ButtonType = 'primary' | 'secondary'

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
export class Button extends PureComponent<IButton> {
  defaultProps: Partial<IButton> = {
    disabled: false,
    type: 'primary',
    icon: null,
  }

  get IconElement(): React.ReactNode {
    return this.props.icon ? <Icon name={this.props.icon} /> : <span />;
  }

  render() {
     return (
      <SButton basic
        disabled={this.props.disabled}
        className='button-primary'>
        {this.IconElement}
        {this.props.children}
      </SButton>
    )
  }
};
