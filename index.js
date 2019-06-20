import mjml2html, { components, registerComponent, BodyComponent, HeadComponent } from 'mjml-core'
import { dependencies, registerDependencies } from 'mjml-validator'
import defaultSkeleton from 'mjml-core/helpers/skeleton'

import { Social, SocialElement } from 'mjml-social'
import { Navbar, NavbarLink } from 'mjml-navbar'
import { Carousel, CarouselImage } from 'mjml-carousel'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-accordion'

registerComponent(require('mjml-body').default)
registerComponent(require('mjml-head').default)
registerComponent(require('mjml-head-attributes').default)
registerComponent(require('mjml-head-breakpoint').default)
registerComponent(require('mjml-head-font').default)
registerComponent(require('mjml-head-preview').default)
registerComponent(require('mjml-head-style').default)
registerComponent(require('mjml-head-title').default)
registerComponent(require('mjml-hero').default)
registerComponent(require('mjml-button').default)
registerComponent(require('mjml-column').default)
registerComponent(require('mjml-divider').default)
registerComponent(require('mjml-group').default)
registerComponent(require('mjml-image').default)

registerComponent(require('mjml-raw').default)
registerComponent(require('mjml-section').default)
registerComponent(require('mjml-spacer').default)
registerComponent(require('mjml-text').default)
registerComponent(require('mjml-table').default)
registerComponent(require('mjml-wrapper').default)

registerComponent(Social)
registerComponent(SocialElement)
registerComponent(Navbar)
registerComponent(NavbarLink)
registerComponent(Accordion)
registerComponent(AccordionElement)
registerComponent(AccordionText)
registerComponent(AccordionTitle)
registerComponent(Carousel)
registerComponent(CarouselImage)

registerDependencies(require('./mjml/packages/mjml/src/dependencies').default)

export {defaultSkeleton, components, dependencies, registerDependencies, registerComponent, BodyComponent, HeadComponent}

export default mjml2html
