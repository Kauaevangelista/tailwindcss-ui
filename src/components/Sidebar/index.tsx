import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash2 } from "react-icons/fi"
import WriteButton from "./WriteButton"
import Button from "./Button"

const inlineIcon = "inline mr-1 mb-1"

const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
    <WriteButton>
      <FiEdit3 className={inlineIcon} /> Escrever
    </WriteButton>
    <Button active>
      <FiInbox className={inlineIcon} /> Caixa de Entrada
    </Button>
    {/* @ts-ignore */}
    <Button>
      <FiSend className={inlineIcon} /> Enviados
    </Button>
        {/* @ts-ignore */}
    <Button>
      <FiFileText className={inlineIcon} /> Rascunhos
    </Button>
        {/* @ts-ignore */}
    <Button>
      <FiArchive className={inlineIcon} /> Arquivados
    </Button>
        {/* @ts-ignore */}
    <Button>
      <FiAlertOctagon className={inlineIcon} /> Spam
    </Button>
        {/* @ts-ignore */}
    <Button>
      <FiTrash2 className={inlineIcon} /> Lixeira
    </Button>
  </aside>
)

export default Sidebar