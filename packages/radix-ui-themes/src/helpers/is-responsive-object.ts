import { breakpoints } from '../props/index.js';
import type { Breakpoint, Responsive } from '../props/index.js';

export function isResponsiveObject<Value extends string>(
  obj: Responsive<Value | Omit<string, Value>> | undefined
): obj is Record<Breakpoint, string> {
  return (
    typeof obj === 'object' &&
    Object.keys(obj).some((key) => (breakpoints as readonly string[]).includes(key))
  );
}
