import * as React from "react"
import { StorybookStory as Story, StorybookGroup as Group } from "../../../../.storybook/views"

import { storiesOf } from "@storybook/react"

import { Text } from "./index"

storiesOf("Text", module)
  .add("text styles", () => (
    <Story>
      <Group title="regular text">
        <Text>Hello World!</Text>
        <Text>$123.45</Text>
        <Text>The quick brown fox jumped over the slow lazy dog.</Text>
      </Group>
      <Group title="with text property">
        <Text text="Passed in text property" />
      </Group>

      <Group title="huge paragraph">
        <Text>
          Wayfarers intelligentsia salvia sartorial keffiyeh locavore direct trade flexitarian
          vexillologist ugh single-origin coffee. Hexagon heirloom direct trade palo santo
          distillery, PBR&B bespoke fanny pack adaptogen affogato bitters kombucha sartorial taiyaki
          next level. Cliche artisan iPhone bushwick church-key. Artisan forage mustache, chartreuse
          vexillologist echo park cronut. 8-bit fanny pack 90's post-ironic venmo vegan. Humblebrag
          cliche pork belly, cronut twee wayfarers salvia meditation plaid cornhole. Tumeric
          literally yr XOXO, ennui single-origin coffee blog jianbing jean shorts plaid typewriter
          prism whatever pabst flannel. Tousled lomo next level pickled mixtape. Everyday carry
          ennui polaroid chartreuse, biodiesel trust fund hashtag umami cardigan hot chicken
          locavore gochujang quinoa coloring book williamsburg. Next level 8-bit cornhole brunch
          venmo. Enamel pin normcore DIY jianbing irony thundercats. Taxidermy quinoa kinfolk,
          hexagon godard hell of banjo forage ugh blog. Kale chips umami +1 shabby chic air plant
          keffiyeh authentic whatever sriracha wayfarers letterpress tofu brooklyn next level
          salvia. Selfies readymade vegan synth chillwave pug banjo dreamcatcher freegan. Artisan
          cliche subway tile mumblecore, whatever pok pok tote bag celiac hella poke tousled
          listicle. Deep v unicorn scenester cred direct trade kickstarter microdosing cardigan
          mustache ennui tumblr umami farm-to-table literally listicle. Post-ironic semiotics venmo
          gochujang cray green juice lo-fi cardigan tilde prism pop-up jean shorts shoreditch occupy
          readymade. Portland messenger bag art party, succulents cred lyft bespoke. Kinfolk plaid
          selfies pinterest iPhone pug narwhal, fashion axe coloring book meditation tousled. Lyft
          trust fund copper mug DIY la croix banh mi. Jianbing raclette man bun mustache tote bag.
          Vinyl taiyaki kombucha tattooed, try-hard blog freegan you probably haven't heard of them
          schlitz shaman listicle chambray. Swag slow-carb enamel pin affogato migas bespoke fashion
          axe flannel prism marfa activated charcoal pop-up shabby chic. Oh. You need a little dummy
          text for your mockup? How quaint. I bet you’re still using Bootstrap too…
        </Text>
      </Group>
      <Group title="style={{ color: &quot;red&quot; }}">
        <Text style={{ color: "red" }}>Hello World!</Text>
      </Group>
    </Story>
  ))
  .add("with nested children", () => (
    <Story>
      <Group title="with nested children">
        <Text>
          <p>
            <strong>I am STRONG</strong>
          </p>
          <p>
            <i>I am ITALIC</i>
          </p>
          <p>
            <Text>I am another nested Text component.</Text>
          </p>
        </Text>
      </Group>
    </Story>
  ))
