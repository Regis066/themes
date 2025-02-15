import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

interface GetChildrenArgs<T extends React.ElementType> {
  asChild: boolean | undefined;
  children: React.ReactNode;
  parent: T;
}

export const getRoot = <
  T extends React.ComponentType<any> | keyof JSX.IntrinsicElements,
  U extends React.ComponentProps<T> extends { asChild?: boolean } ? T : Exclude<T, typeof Slot>
>({
  asChild,
  children,
  parent: Parent,
}: GetChildrenArgs<T>): {
  Root: U;
  children: React.ReactNode;
} => {
  if (asChild) {
    let child = React.Children.only(children) as React.ReactElement;
    const grandChildren = child.props.children;
    return {
      Root: ((props) => {
        child = React.cloneElement(child, {
          children: props.children,
        });

        // Make sure we don't pass `asChild` to DOM elements
        if ((Parent as unknown) === Slot) {
          return <Parent {...props}>{child}</Parent>;
        }

        return (
          <Parent asChild={asChild} {...props}>
            {child}
          </Parent>
        );
      }) as U,
      children: grandChildren,
    };
  }

  return {
    Root: Parent as unknown as U,
    children: children,
  };
};
