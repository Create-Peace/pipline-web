export default {
  name: 'item',
  props: {
    dataKey: [String, Number],
    data: Object
  },
  render () {
    const { data, dataKey } = this
    console.log('data', data[dataKey])
    return <div>{data[dataKey]}</div>
  }
}