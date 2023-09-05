import TUserLayout from "@/components/Layout/userLayout/userLayout"
import RichTextEditor from "@/components/reusbales/Teditor"

const TBlogsPageComponent = () =>{
    return(
        <>
        <TUserLayout>
            <h1>Blogs</h1>
            <div className="container">
            <RichTextEditor/>
            </div>
        </TUserLayout>
        </>
    )
}
export default TBlogsPageComponent