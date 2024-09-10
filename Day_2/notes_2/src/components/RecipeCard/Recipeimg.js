export default function RecipeImg(props){
    // use destructuring to pull out our imgSr prop as
    const {imgSrc, altText} = props
    return <img src= {props.imgSrc} alt={altText} />
}

// props = {
//     children: Some JSX element, 
//     imgSrc: require(...),
//     alt: "some text"
// }