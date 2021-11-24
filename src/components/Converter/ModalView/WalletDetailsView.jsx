import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { useWeb3React } from '@web3-react/core'
import { Trans } from '@lingui/macro'

import Modal, { ModalTitle } from '../../shared/Modal'
import { wallets } from '../../../config/wallets'
import { networks } from '../../../config/networks'
import useAuth from '../../../hooks/useAuth'
import { classNames } from '../../../utils/class-names'
import Web3 from 'web3'
import { DetailsTable } from './DetailsTable'

const Content = ({ closeModal }) => {
  const { active } = useWeb3React()
  const { login, logout } = useAuth()

  const onConnect = () => {
    if (active) {
      logout()
    }

    const wallet = wallets[0]
    const connectorName = wallet.connectorName
    const networkId = networks[1].id

    login(connectorName, networkId)
  }

  return (
    <div className='flex justify-between'>
      <button
        onClick={onConnect}
        className={classNames(
          'w-40 inline-flex justify-center items-center mt-6 mb-2 py-1 px-8 border-2 border-transparent shadow-sm text-base font-medium rounded focus:outline-none',
          'text-white bg-blue-500 hover:bg-blue-600 ml-4'
        )}
      >
        Connect
      </button>
      <button
        onClick={closeModal}
        className='w-40 inline-flex justify-center items-center mt-6 mb-2 py-1 px-8 border-2 border-transparent shadow-sm text-base font-medium rounded focus:outline-none text-black bg-white hover:bg-gray-500 hover:text-white mr-4'
        style={{ color: 'black' }}
      >
        Cancel
      </button>
    </div>
  )
}

const WalletDetailsView = ({ open, closeModal }) => {
  const { account, chainId } = useWeb3React()
  const [balance, setBalance] = useState('0')
  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/')
  const [details, setDetails] = useState()
  const lab = ['Account', 'Chain ID', 'Balance']
  let val = [account, chainId]

  const createDetails = () => {
    let data = []
    for (let i = 0; i < 3; i++) {
      data.push({ label: lab[i], value: val[i] })
    }
    setDetails(data)
  }

  useEffect(() => {
    const updateTokenBalance = async () => {
      const result = await web3.eth.getBalance(account)
      val.push(web3.utils.fromWei(result, 'ether'))
      createDetails()
      setBalance(result)
    }

    account && updateTokenBalance()
  }, [balance])

  return (
    <Modal open={open} closeModal={closeModal}>
      {({ cancelButtonRef }) => (
        <>
          <Dialog.Title as='div'>
            <ModalTitle
              closeModal={closeModal}
              cancelButtonRef={cancelButtonRef}
            >
              <h3 className='text-2xl text-gray-300 font-medium'>
                <Trans>Wallet details</Trans>
              </h3>
            </ModalTitle>
          </Dialog.Title>
          {account && details ? (
            <DetailsTable details={details} />
          ) : (
            <>
              <p className='text-red-400 my-8'>
                Wallet is not connected. Please click the "Connect" button below
              </p>
              <Content closeModal={closeModal} />
            </>
          )}
        </>
      )}
    </Modal>
  )
}

export default WalletDetailsView
