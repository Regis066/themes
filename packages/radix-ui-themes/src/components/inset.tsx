import * as React from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import { insetPropDefs } from './inset.props.js';
import { extractProps } from '../helpers/index.js';
import { marginPropDefs } from '../props/index.js';

import type { ComponentPropsWithoutColor } from '../helpers/index.js';
import type { MarginProps, GetPropDefTypes } from '../props/index.js';

type InsetElement = React.ElementRef<'div'>;
type InsetOwnProps = GetPropDefTypes<typeof insetPropDefs>;
interface InsetProps extends ComponentPropsWithoutColor<'div'>, MarginProps, InsetOwnProps {}

const Inset = React.forwardRef<InsetElement, InsetProps>((props, forwardedRef) => {
  const { asChild, className, ...insetProps } = extractProps(props, insetPropDefs, marginPropDefs);
  const Comp = asChild ? Slot : 'div';
  return <Comp {...insetProps} ref={forwardedRef} className={classNames('rt-Inset', className)} />;
});
Inset.displayName = 'Inset';

export { Inset };
export type { InsetProps };
