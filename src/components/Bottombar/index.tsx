import { useState } from "react";
import Button from "./Button";
import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiMenu, FiTrash2, FiX } from "react-icons/fi";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full flex gap-2 md:hidden items-center relative">
        {/* @ts-ignore */}
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      {/* @ts-ignore */}
      <Button active>
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      {/* @ts-ignore */}
      <Button>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      {/* @ts-ignore */}
      <Button onClick={() => setIsMenuOpen(state => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>
      <div
        className={
          `${isMenuOpen ? "absolute" : "hidden"}
          right-0 bottom-12 flex flex-col gap-2 w-40`
        }
      >
        {/* @ts-ignore */}
        <Button>
          <FiArchive className="inline mr-2 mb-1" />
          Arquivados
        </Button>
        {/* @ts-ignore */}
        <Button>
          <FiAlertOctagon className="inline mr-2 mb-1" />
          Spam
        </Button>
        {/* @ts-ignore */}
        <Button>
          <FiTrash2 className="inline mr-2 mb-1" />
          Lixeira
        </Button>
      </div>
    </div>
  )
}

export default Bottombar