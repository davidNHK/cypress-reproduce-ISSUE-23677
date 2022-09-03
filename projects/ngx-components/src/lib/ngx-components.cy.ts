import {mount} from "cypress/angular"
import {NgxComponentsComponent} from "./ngx-components.component"

describe("NGX Component", () => {
  it("render", () => {
    mount(NgxComponentsComponent)
  })
})
