import { useWeb3React } from '@web3-react/core'
import { useState } from 'react'
import WalletDetailsView from './WalletDetailsView'

const ModalView = () => {
  const { active } = useWeb3React()
  const [isConnectOpen, setIsConnectOpen] = useState(false)

  const closeConnectModal = () => setIsConnectOpen(false)
  const openConnectModal = () => setIsConnectOpen(true)
  const connectModalProps = {
    open: isConnectOpen,
    closeModal: closeConnectModal
  }

  return (
    <>
      <div
        className='text-blue-400 text-center pt-px'
        onClick={openConnectModal}
      >
        Check Wallet Details
      </div>
      <WalletDetailsView {...connectModalProps} />
    </>
  )
}

export default ModalView
