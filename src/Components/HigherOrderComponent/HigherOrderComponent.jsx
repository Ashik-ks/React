
const withUppercase = (WrappedComponent) => {
    return function({text, ...restprops}) {

        const upperCaseText = text.toUpperCase();

        return <WrappedComponent {...restprops} text = {upperCaseText}/>
        
    }
}


//Component
const MyComponent = ({text}) => <div>{text}</div>


//Usage of HOC
const MyComponentWithUppercase = withUppercase(MyComponent)

export default MyComponentWithUppercase;