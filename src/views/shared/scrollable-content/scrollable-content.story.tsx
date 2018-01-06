import * as React from "react"
import { StorybookStory as Story, StorybookGroup as Group } from "../../../../.storybook/views"
import { storiesOf } from "@storybook/react"
import { ScrollableContent } from "./index"

storiesOf("ScrollableContent", module).add("default", () => (
  <Story>
    <Group title="default">
      <ScrollableContent style={{ height: 100 }}>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </ScrollableContent>
    </Group>
  </Story>
))
