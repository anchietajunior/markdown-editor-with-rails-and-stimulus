import { Controller } from "stimulus"
import marked from "marked"
import hljs from "highlight.js"

export default class extends Controller {
  static targets = ["viewer"]

  convertToMarkdown(event) {
    this.viewerTarget.innerHTML = marked(event.target.value, { sanitize: true })
  }
}