/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {Layout, Header, Sidebar, Content} from '../index.js';
import {
  HeaderFiller,
  HeaderLeft,
  HeaderRight,
  SidebarFiller,
} from './helpers.js';
import {styled} from '../../styles/index.js';

export const name = 'layout-sidebar-multi';

const SidebarFillerSecondary = styled(SidebarFiller, ({$theme}) => ({
  backgroundColor: $theme.colors.primary50,
}));

export const component = () => (
  <Layout>
    <Header>
      <HeaderFiller>
        <HeaderLeft />
        <HeaderRight />
      </HeaderFiller>
    </Header>
    <Layout>
      <Sidebar>
        <SidebarFillerSecondary />
      </Sidebar>
      <Sidebar>
        <SidebarFiller />
      </Sidebar>
      <Content>
        <div />
      </Content>
    </Layout>
  </Layout>
);