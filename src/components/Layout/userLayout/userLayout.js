import TUserHeader from "./userHeader"

const TUserLayout = (props) => {
    return (
        <>
            <TUserHeader />
            {props.children}
        </>
    )
}
export default TUserLayout