import Item from './Item'
export default {
  name: 'HelloWorld',
  components: {Item},
  data () {
    return {
      keys: [1, 2, 3, 4, 5],
      values: {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'forth',
        5: 'fifth'
      },
      data: [
        {value: 'first'},
        {value: 'second'},
        {value: 'third'},
        {value: 'forth'}
      ],
      title: '123'
    }
  },
  methods: {
    changeValue () {
      this.values[1] = this.values[1] === 'X-change' ? 'first' : 'X-change'
     },
     handleChangeData () {
       this.data.splice(0, 1, {value: this.data[0] === 'X-change' ? 'first' : 'X-change'})
     },
     handleChangeTitle () {
        this.title = 'x-title'
     }
  },
  render () {
    const { keys, values, changeValue, data, handleChangeData, title, handleChangeTitle } = this

    return (
      <div>
        <button onClick={handleChangeTitle}>changeTitle</button>
        <h1>{title}</h1>
        <a style="cursor: pointer" onClick={changeValue}>change</a>
        {
          keys && keys.map(item => {
            console.log('item::', item)
            return (<Item key={item} dataKey={item} data={values}></Item>)
          })
        }
        <div style="padding-top: 20px">
          <button onClick={handleChangeData}>changeData</button>
          {
            data && data.map(item => {
              console.log('dataItem', item)
              return (<Item key={item.value} dataKey='value' data={item}></Item>)
            })
          }
        </div>
      </div>)
  }
}