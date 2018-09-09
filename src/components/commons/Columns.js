/* @flow */

import React, { Children } from 'react';
import glamorous from 'glamorous';
import { margin, padding } from 'polished';

const calculateWidth = x => `${100 / x}%`;

type Props = {
  children: any,
  className?: string,
  desktop?: number,
  desktopLarge?: number,
  gutter?: number,
  mobile?: number,
  tabletLandscape?: number,
  tabletPortrait?: number,
};

const defaultProps = {
  className: undefined,
  desktop: undefined,
  desktopLarge: undefined,
  gutter: 5,
  mobile: undefined,
  tabletLandscape: undefined,
  tabletPortrait: undefined,
};

const Wrapper = glamorous.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  ...margin(null, -props.gutter),
}));

const Cell = glamorous.div(({ theme, ...props }) => ({
  flexBasis: calculateWidth(props.mobile || props.desktop),
  flexGrow: 0,
  flexShrink: 0,
  minWidth: 0, // flexbox hack
  ...padding(null, props.gutter),
  [theme.mediaQuery.tabletPortraitAndUp]: {
    flexBasis: props.tabletPortrait ? calculateWidth(props.tabletPortrait) : undefined,
  },
  [theme.mediaQuery.tabletLandscapeAndUp]: {
    flexBasis: props.tabletLandscape ? calculateWidth(props.tabletLandscape) : undefined,
  },
  [theme.mediaQuery.desktopAndUp]: {
    flexBasis: props.desktop ? calculateWidth(props.desktop) : undefined,
  },
  [theme.mediaQuery.desktopLargeAndUp]: {
    flexBasis: props.desktopLarge ? calculateWidth(props.desktopLarge) : undefined,
  },
}));

function Rows({
  children,
  className,
  desktop,
  desktopLarge,
  gutter,
  mobile,
  tabletLandscape,
  tabletPortrait,
}: Props) {
  return (
    <Wrapper gutter={gutter} className={className}>
      {Children.map(
        children,
        child =>
          child && (
            <Cell
              desktop={desktop}
              desktopLarge={desktopLarge}
              gutter={gutter}
              mobile={mobile}
              tabletLandscape={tabletLandscape}
              tabletPortrait={tabletPortrait}
            >
              {child}
            </Cell>
          ),
      )}
    </Wrapper>
  );
}

Rows.defaultProps = defaultProps;

export default Rows;
