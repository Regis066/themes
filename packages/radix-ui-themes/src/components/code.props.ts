import { weightProp, colorProp, highContrastProp } from '../props/index.js';
import type { PropDef } from '../props/index.js';
import { asChildProp } from '../props/as-child.prop.js';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const variants = ['solid', 'soft', 'outline', 'ghost'] as const;

const codePropDefs = {
  asChild: asChildProp,
  size: {
    type: 'enum',
    className: 'rt-r-size',
    values: sizes,
    default: undefined,
    responsive: true,
  },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'soft' },
  weight: weightProp,
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  asChild: typeof asChildProp;
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  weight: typeof weightProp;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { codePropDefs };
