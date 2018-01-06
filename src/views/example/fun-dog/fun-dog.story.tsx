import * as React from "react"
import { storiesOf } from "@storybook/react"
import { StorybookStory as Story, StorybookGroup as Group } from "../../../../.storybook/views"

import { FunDog } from "./fun-dog"

storiesOf("Fun Dog", module).add("default", () => (
  <Story>
    <Group title="is a doggo">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <FunDog />
      </div>
    </Group>
  </Story>
))
