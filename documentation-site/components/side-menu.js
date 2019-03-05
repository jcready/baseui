/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import {styled} from 'baseui';
import {Block} from 'baseui/block';
import Link from 'next/link';

import NavLink from './nav-link';
import Routes from '../routes';

const levelToPadding = {
  1: 'scale400',
  2: 'scale500',
  3: 'scale600',
};

const levelToFont = {
  1: 'font450',
  2: 'font400',
  3: 'font300',
};

const List = styled(Block, ({$theme}) => ({
  position: 'relative',
  marginTop: '0',
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  paddingLeft: $theme.sizing.scale800,
  paddingRight: $theme.sizing.scale800,

  listStyle: 'none',
  maxWidth: '200px',
}));

const NavigationLink = props => {
  return (
    <Block>
      <Link passHref={true} href={props.path} prefetch>
        <NavLink tabIndex="0">{props.text}</NavLink>
      </Link>
    </Block>
  );
};

const NavigationItem = props => {
  const {route, index, level = 1} = props;
  return (
    <Block
      font={levelToFont[level]}
      paddingLeft={levelToPadding[level]}
      paddingBottom={level !== 3 ? 'scale100' : 0}
      paddingTop={index === 0 && level === 3 ? 'scale100' : 0}
    >
      {route.path ? (
        <NavigationLink path={route.path} text={route.text} />
      ) : (
        route.text
      )}
      {route.children
        ? route.children.map((childRoute, index) => {
            return (
              <React.Fragment key={index}>
                <NavigationItem
                  level={level + 1}
                  route={childRoute}
                  index={index}
                />
              </React.Fragment>
            );
          })
        : null}
    </Block>
  );
};

export default props => (
  <List as="ul">
    {Routes.map((route, index) => {
      return <NavigationItem key={index} route={route} index={index} />;
    })}
  </List>
);