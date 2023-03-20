import ExampleComponent from "../../components/Example/ExampleComponent"
import styles from "./styles/Example.module.scss"
interface ExampleProps {
  
}
const ExampleModule = ({}: ExampleProps) => (
  <div>
    <p>MOdule text</p>
    <ExampleComponent/>
    </div>
)
export default ExampleModule