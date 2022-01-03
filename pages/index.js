import Logo from "./Components/Logo";
import PageImage from './Components/PageImage'
import ThreeButtons from './Components/ThreeButtons'
import AddPdf from './Components/AddPdf'
import PageEditor from './Components/PageEditor'

export default function Home() {
  return (
    <div >
     <Logo />
     <PageImage />
     <ThreeButtons />
     <PageEditor />
     <AddPdf />
    </div>
  )
}
