'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import classNames from 'classnames';

interface HoverCardRootProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {}
const HoverCardRoot = (props: HoverCardRootProps) => (
  <HoverCardPrimitive.Root closeDelay={150} openDelay={200} {...props} />
);
HoverCardRoot.displayName = 'HoverCardRoot';

type HoverCardTriggerElement = React.ElementRef<typeof HoverCardPrimitive.Trigger>;
interface HoverCardTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>, 'asChild'> {}
const HoverCardTrigger = React.forwardRef<HoverCardTriggerElement, HoverCardTriggerProps>(
  (props, forwardedRef) => (
    <HoverCardPrimitive.Trigger
      ref={forwardedRef}
      className={classNames('rui-HoverCardTrigger', props.className)}
      {...props}
      asChild
    />
  )
);
HoverCardTrigger.displayName = 'HoverCardTrigger';

interface HoverCardContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>, 'asChild'> {
  container?: React.ComponentProps<typeof HoverCardPrimitive.Portal>['container'];
}
const HoverCardContent = React.forwardRef<HTMLDivElement, HoverCardContentProps>(
  (props, forwardedRef) => {
    const { className, forceMount, container, ...contentProps } = props;
    return (
      <HoverCardPrimitive.Portal container={container} forceMount={forceMount}>
        <HoverCardPrimitive.Content
          align="start"
          sideOffset={8}
          {...contentProps}
          ref={forwardedRef}
          className={classNames('rui-PopperContent', 'rui-HoverCardContent', className)}
        />
      </HoverCardPrimitive.Portal>
    );
  }
);
HoverCardContent.displayName = 'HoverCardContent';

const HoverCard = Object.assign(
  {},
  {
    Root: HoverCardRoot,
    Trigger: HoverCardTrigger,
    Content: HoverCardContent,
  }
);

export { HoverCard, HoverCardRoot, HoverCardTrigger, HoverCardContent };
