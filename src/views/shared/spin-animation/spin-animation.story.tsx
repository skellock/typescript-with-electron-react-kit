import * as React from "react"
import { StorybookStory as Story, StorybookGroup as Group } from "../../../../.storybook/views"
import { storiesOf } from "@storybook/react"
import { SpinAnimation } from "./index"

storiesOf("SpinAnimation", module).add("default", () => (
  <Story>
    <Group title="default">
      <span style={{ display: "inline-block", width: 100 }}>
        <SpinAnimation>I am going to spin.</SpinAnimation>
      </span>
    </Group>
  </Story>
))
