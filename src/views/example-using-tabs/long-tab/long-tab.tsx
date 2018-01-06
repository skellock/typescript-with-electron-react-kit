import * as React from "react"
import { CSSProperties } from "react"
import { spacing, cssProps } from "../../theme"
import { Text } from "../../shared/text"
import { ScrollableContent } from "../../shared/scrollable-content"
import { css } from "glamor"

const PADDED = cssProps({
  paddingBottom: spacing.large,
})

const ROOT = cssProps({
  padding: spacing.large,
})

export interface LongTabProps {
  style?: CSSProperties | CSSProperties[] | null | false
}

export class LongTab extends React.PureComponent<LongTabProps, {}> {
  render() {
    const root = css(ROOT, this.props.style)

    return (
      <ScrollableContent style={root}>
        <Text style={PADDED}>
          Lomo kombucha irony, keffiyeh man bun pitchfork helvetica organic godard brunch XOXO
          subway tile. Vexillologist gluten-free prism air plant godard raw denim tacos forage
          neutra kogi lyft beard. Direct trade retro ramps, pour-over slow-carb 8-bit hell of
          cold-pressed XOXO. Hashtag live-edge iceland readymade ethical. Meggings chia portland
          schlitz twee paleo. Knausgaard deep v farm-to-table iPhone. Migas tumblr YOLO chicharrones
          meh heirloom echo park vegan air plant sriracha next level actually. Vexillologist banjo
          lo-fi meggings affogato schlitz. Chicharrones messenger bag la croix hexagon ramps
          keffiyeh church-key food truck quinoa hella. Pabst trust fund cold-pressed gastropub
          bicycle rights. Post-ironic selfies gochujang franzen master cleanse chicharrones ethical
          coloring book keytar 8-bit poutine fixie.
        </Text>
        <Text style={PADDED}>
          Shaman glossier listicle, tousled knausgaard vegan microdosing mumblecore meditation
          freegan taiyaki. Dreamcatcher occupy enamel pin edison bulb PBR&B +1 food truck try-hard
          forage pug iceland sartorial scenester. Yr brooklyn pinterest +1 sustainable. Narwhal
          brunch pickled pop-up, poke yr humblebrag pinterest next level PBR&B occupy hammock deep v
          whatever. Echo park whatever pok pok master cleanse, venmo retro cold-pressed. Unicorn
          brooklyn drinking vinegar pork belly thundercats iceland fixie. Intelligentsia vinyl beard
          put a bird on it gastropub, hot chicken next level godard sustainable. Godard mustache
          VHS, brooklyn salvia lyft activated charcoal direct trade mlkshk unicorn williamsburg
          post-ironic banjo. Sriracha cray coloring book activated charcoal irony meditation.
        </Text>
        <Text style={PADDED}>
          Drinking vinegar 8-bit roof party leggings, master cleanse deep v slow-carb locavore
          hoodie. La croix thundercats trust fund synth, truffaut woke bitters twee craft beer next
          level mustache ramps yr hashtag. Portland 8-bit gentrify 3 wolf moon hexagon, 90's
          scenester health goth retro distillery. Meh fixie jianbing pop-up sriracha aesthetic
          kitsch brunch put a bird on it taxidermy. Kinfolk brunch tumeric four dollar toast
          dreamcatcher post-ironic selvage, forage four loko. Prism portland distillery subway tile
          asymmetrical master cleanse chambray retro lomo tilde locavore pork belly pug listicle
          helvetica. Flexitarian taiyaki copper mug iceland kitsch, four loko cold-pressed. Tumeric
          ugh ramps, pitchfork etsy fashion axe jianbing narwhal. Paleo literally enamel pin,
          chambray cardigan biodiesel subway tile. Fixie vexillologist portland, 8-bit microdosing
          neutra fanny pack. Viral kombucha pug sustainable succulents readymade adaptogen. Migas
          hot chicken flannel, everyday carry vexillologist etsy intelligentsia bushwick cronut.
          Listicle letterpress waistcoat actually, hell of typewriter normcore thundercats kale
          chips post-ironic helvetica pabst.
        </Text>
        <Text style={PADDED}>
          Chambray ethical vice williamsburg. Four loko chambray glossier seitan, stumptown fanny
          pack PBR&B normcore quinoa echo park. Direct trade taxidermy pok pok, unicorn you probably
          haven't heard of them letterpress leggings. Flannel kinfolk four loko taxidermy fanny pack
          lo-fi. Pour-over truffaut vegan twee pug man braid brooklyn pinterest ethical quinoa YOLO
          actually. Tumeric fingerstache ethical, lo-fi shabby chic distillery twee marfa yuccie.
          Microdosing drinking vinegar cred locavore stumptown squid normcore twee cold-pressed
          pabst. Taxidermy craft beer af pour-over DIY tofu salvia. Asymmetrical tbh photo booth
          meggings kale chips literally. Disrupt DIY put a bird on it, chia activated charcoal you
          probably haven't heard of them viral distillery try-hard wolf. Woke chartreuse
          fingerstache man bun aesthetic pitchfork adaptogen poke lumbersexual vaporware freegan
          master cleanse wayfarers. Mlkshk sriracha microdosing, chia post-ironic paleo chillwave
          PBR&B.
        </Text>
        <Text style={PADDED}>
          Ugh +1 narwhal, truffaut polaroid live-edge artisan tousled wayfarers taxidermy chia raw
          denim flannel. Vinyl polaroid franzen portland tilde edison bulb, you probably haven't
          heard of them hot chicken mlkshk. Prism blue bottle mustache, tattooed selvage franzen
          jianbing vice artisan. Tacos cred forage, tofu godard coloring book affogato 8-bit
          chillwave lo-fi normcore semiotics copper mug polaroid. Whatever stumptown jean shorts
          small batch live-edge single-origin coffee polaroid yuccie hashtag fam celiac locavore
          dreamcatcher VHS. Intelligentsia godard gochujang hammock, lo-fi hell of bushwick
          biodiesel waistcoat viral. Man bun hot chicken glossier DIY, disrupt beard narwhal austin
          palo santo ugh mixtape XOXO. Woke copper mug disrupt intelligentsia actually fashion axe
          synth affogato pickled. Truffaut typewriter quinoa copper mug fanny pack glossier 8-bit,
          meditation vape jean shorts. Ennui church-key cliche af intelligentsia, fam fingerstache.
        </Text>
        <Text style={PADDED}>Oh. You need a little dummy text for your mockup? How quaint.</Text>
        <Text>I bet you’re still using Bootstrap too…</Text>
      </ScrollableContent>
    )
  }
}
