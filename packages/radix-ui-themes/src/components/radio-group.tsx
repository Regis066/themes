'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { radioGroupPropDefs } from './radio-group.props.js';
import { extractProps } from '../helpers/index.js';
import { marginPropDefs } from '../props/index.js';

import type { ComponentPropsWithoutColor } from '../helpers/index.js';
import type { MarginProps, GetPropDefTypes } from '../props/index.js';

type RadioGroupRootElement = React.ElementRef<typeof RadioGroupPrimitive.Root>;
type RadioGroupRootOwnProps = GetPropDefTypes<typeof radioGroupPropDefs>;
interface RadioGroupRootProps
  extends ComponentPropsWithoutColor<typeof RadioGroupPrimitive.Root>,
    MarginProps,
    RadioGroupRootOwnProps {}
const RadioGroupRoot = React.forwardRef<RadioGroupRootElement, RadioGroupRootProps>(
  (props, forwardedRef) => {
    const { className, color, ...rootProps } = extractProps(
      props,
      radioGroupPropDefs,
      marginPropDefs
    );
    return (
      <RadioGroupPrimitive.Root
        data-accent-color={color}
        {...rootProps}
        ref={forwardedRef}
        className={classNames('rt-RadioGroupRoot', className)}
      />
    );
  }
);
RadioGroupRoot.displayName = 'RadioGroupRoot';

type RadioGroupItemElement = React.ElementRef<typeof RadioGroupPrimitive.Item>;
interface RadioGroupItemProps
  extends Omit<ComponentPropsWithoutColor<typeof RadioGroupPrimitive.Item>, 'asChild' | 'children'>,
    MarginProps {}
const RadioGroupItem = React.forwardRef<RadioGroupItemElement, RadioGroupItemProps>(
  (props, forwardedRef) => {
    const { className, ...itemProps } = extractProps(props, marginPropDefs);
    return (
      <RadioGroupPrimitive.Item
        {...itemProps}
        asChild={false}
        ref={forwardedRef}
        className={classNames('rt-reset', 'rt-RadioGroupItem', className)}
      >
        <RadioGroupPrimitive.Indicator className="rt-RadioGroupIndicator" />
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroupRoot, RadioGroupItem };
export type { RadioGroupRootProps, RadioGroupItemProps };
