import * as React from "react"
import { StorybookStory as Story, StorybookGroup as Group } from "../../../../.storybook/views"
import { storiesOf } from "@storybook/react"
import { CenteredContent } from "./index"

storiesOf("CenteredContent", module).add("default", () => (
  <Story>
    <Group title="default">
      <CenteredContent>
        <p>i am in the middle</p>
        <p>i am also a really strange component and shouldn't exist.</p>
      </CenteredContent>
    </Group>
  </Story>
))
