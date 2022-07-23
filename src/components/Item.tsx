import {defineComponent, defineProps} from 'vue'
interface DataType {
  [x: number | string]: string
}
// interface PropsType {
//   dataKey: number | string,
//   data: DataType
// }
export default defineComponent({
    // const { data, dataKey } = defineProps<PropsType>()
    props: {
      dataKey: {
        type: [String, Number],
      },
      data: {
        type: Object
      }
    },
    setup (props) {
      const { data, dataKey } = props
      const render = () => {
        console.log('data', data)
        return <div>{data[dataKey]}</div>
      }
      return render

    }
})