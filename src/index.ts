import { kebabCase } from 'lodash'

export class Hello {
  world (name: string = 'World') {
    console.log(`Hello, ${kebabCase(name)}`)
  }
}
