import * as React from "react"
import { StorybookStory as Story, StorybookGroup as Group } from "../../../../.storybook/views"

import { storiesOf } from "@storybook/react"
import { EnterAnimation } from "./index"
// import { Value } from 'react-powerplug'

storiesOf("EnterAnimation", module).add("default", () => (
  <Story>
    <Group title="grow">
      <EnterAnimation animation="grow">
        <p>hi</p>
      </EnterAnimation>
    </Group>
    <Group title="slide">
      <EnterAnimation animation="slide">
        <p>hi</p>
      </EnterAnimation>
    </Group>
  </Story>
))
