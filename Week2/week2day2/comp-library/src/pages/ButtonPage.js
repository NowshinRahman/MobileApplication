import {FaAngry} from 'react-icons/fa'
import Button from '../component/Button'

export default function ButtonPage(props){

    /*false 100 || 200 returns the first truthy value
    100 && 200
    null && 200 returns first falsey value OR last truthy
    */

    const valueForCondition = false

    return(
        <div>
            {valueForCondition && <Button primary />}

            {valueForCondition || <Button danger />}
        
        <div>
          <Button primary rounded onClick={()=>console.log('click')} className= 'mb-8'>
            Click Me!</Button>
        </div>
        <div>
          <Button secondary rounded><FaAngry/>Click Me!</Button>
        </div>
        <div>
          <Button success rounded >Click Me!</Button>
        </div>
        <div>
          <Button warning rounded>Click Me!</Button>
        </div>
        <div>
          <Button danger rounded >Click Me!</Button>
        </div>
        </div>
      )

}