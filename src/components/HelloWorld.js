import { defineComponent, ref } from '@vue/runtime-core'
import Item from './Item'

export default defineComponent(() => {

  const keys = ref([1, 2, 3, 4, 5])
  const values = ref({
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'forth',
    5: 'fifth'
  })
  const data = ref([
    {value: 'first'},
    {value: 'second'},
    {value: 'third'},
    {value: 'forth'}
  ])
  const title = ref('123')

  const handleChangeTitle = () => {
    title.value = title.value === 'X-Change' ? '123' : 'X-Change'
  }

  const changeValue = () => {
    values.value[1] = values.value[1] === 'X-change' ? 'first' : 'X-change'
  }

  const handleChangeData = () => {
    console.log('data.value[0]', data.value[0])
    data.value.splice(0, 1, {value: data.value[0].value === 'X-change' ? 'first' : 'X-change'})
  }

  const render = () => {
    return (
      <div>
        <button onClick={handleChangeTitle}>changeTitle</button>
        <h1>{title.value}</h1>
        <button style="cursor: pointer" onClick={changeValue}>change</button>
        {
          keys.value && keys.value.map(item => {
            return (<Item key={item} dataKey={item} data={values.value}></Item>)
          })
        }
        <div style="padding-top: 20px">
          <button onClick={handleChangeData}>changeData</button>
          {
            data.value && data.value.map(item => {
              console.log('dataItem', item)
              return (<Item key={item.value} dataKey='value' data={item}></Item>)
            })
          }
        </div>
      </div>
    )
  }

  return render

})
