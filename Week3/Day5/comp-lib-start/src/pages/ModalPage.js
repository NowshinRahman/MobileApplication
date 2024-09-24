import {useState} from 'react'

import Button from '../components/Button'
import Modal from '../components/Modal'

export default function ModalPage(){
    const [isModalOpen, setIsModalOpen] = useState(true)
    const handleClick = () => {
        setIsModalOpen(true)
    }

    const handleClose = ()=> {
        setIsModalOpen(false)
    }

    const actionBar = (
        <>
            <Button danger onClick={()=>console.log('click the danger button')} className="mr-5">
                Delete</Button>
            <Button success onClick={handleClose}>Accept</Button>
        </>)

    const modal = 
        (<Modal onClose ={handleClose} actionBar={actionBar}>
            This is a very important modal for you to accept or decline.
        </Modal>)

   

    return( 

        <div>
        <Button primary outline className="m-4" onClick= {handleClick}>
            Open Modal
        </Button>
        <Button danger outline className="m-4" onClick= {handleClose}>
            Close Modal
        </Button>
        {isModalOpen && modal}
        
        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>

        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic
         typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.</p>
        </div>
    )

}
