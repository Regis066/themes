import { colorProp, highContrastProp } from '../props/index.js';
import type { PropDef } from '../props/index.js';
import { asChildProp } from '../props/as-child.prop.js';

const sizes = ['1', '2', '3'] as const;
const variants = ['soft', 'surface', 'outline'] as const;

const calloutRootPropDefs = {
  asChild: asChildProp,
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'soft' },
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  asChild: typeof asChildProp;
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { calloutRootPropDefs };
