import {Template} from '../src/template'

const date = new Date()

const pullRequests = [
  {number: 123, title: 'AAA', author: 'yutailang0119'},
  {number: 456, title: 'BBB', author: 'y7g'}
]

test('title', () => {
  const template = new Template(date, pullRequests)
  expect(template.title()).toEqual(`Release ${date}`)
})

test('checkList', () => {
  const template = new Template(date, pullRequests)
  expect(template.checkList()).toEqual(
    `- #123 AAA @yutailang0119\n- #456 BBB @y7g\n`
  )
})
