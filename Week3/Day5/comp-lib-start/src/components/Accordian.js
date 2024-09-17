import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'


export default function Accordian(props){
    const[expandedIndex, setExpandedIndex] = useState(-1)
    
    
    const {items} = props
    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex
        const icon = (<span className="text-2xl">
            {/* Our first ternary! 1-  condition that we are checking to be true}
            2- What to return if 1 is true;
            3- What to render else, aka if the 1 condition is false*/}
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft/>}
            {isExpanded}
        </span>
        )

        const handleClick = (nextIndex) => {
            //setExpandedIndex(nextIndex)
            //expandedIndex = index
            /* never do that thing above, because it react rerenders when it changes, there's a slot in memory for expandedIndex
            it's rendering it's own memory over and over
            */

            //if the item is already open, close it
            //else open it

            setExpandedIndex((currentExpandedIndex) => {
                if (currentExpandedIndex === nextIndex) {
                    return -1
                } else{
                    return nextIndex
                }
            })

           console.log(index)
        }

        return (
            <div key ={item.id}>
                <div onClick={() => handleClick(index)} 
                className= "flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer">
                    {item.label}{icon}
                    </div>
                {/*If the content index matches the expanded index in state render item otherwise render it  */}
                {isExpanded && <div className ="border-b p-5">{item.content}</div>}
            </div>
        )
    })

    return (<div>
        {renderedItems}
    </div>)
}


