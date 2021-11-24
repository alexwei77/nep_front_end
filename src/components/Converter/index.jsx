import { useState } from 'react'
import { Card } from '../Home/Card'
import ModalView from './ModalView'

const cryptoSymbols = {
  N: 'NEP',
  B: 'BUSD'
}

const toNEP = (busd) => {
  return busd / 3
}

const toBUSD = (nep) => {
  return nep * 3
}

const tryConvert = (cryptoAmount, convert) => {
  const input = parseFloat(cryptoAmount)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 100) / 100
  return rounded.toString()
}

const CryptoInput = ({ symbol, amount, onCryptoChange }) => {
  const handleChange = (e) => {
    onCryptoChange(e.target.value)
  }

  return (
    <>
      <h2 className='mb-2 text-gray-400 font-bold text-sm tracking-wider'>
        {cryptoSymbols[symbol]}
      </h2>
      <input
        value={amount}
        onChange={(e) => handleChange(e)}
        className='w-full bg-gray-800 text-gray-200 p-3 pr-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        type='text'
      />
    </>
  )
}

const Converter = () => {
  const [cryptoAmount, setCryptoAmount] = useState('')
  const [symbol, setSymbol] = useState('N')

  const handleNepChange = (cryptoAmount) => {
    setSymbol('N')
    setCryptoAmount(cryptoAmount)
  }

  const handleBusdChange = (cryptoAmount) => {
    setSymbol('B')
    setCryptoAmount(cryptoAmount)
  }

  const nepAmount =
    symbol === 'B' ? tryConvert(cryptoAmount, toNEP) : cryptoAmount
  const busdAmount =
    symbol === 'N' ? tryConvert(cryptoAmount, toBUSD) : cryptoAmount

  const nep = {
    symbol: 'N',
    amount: nepAmount,
    onCryptoChange: handleNepChange
  }
  const busd = {
    symbol: 'B',
    amount: busdAmount,
    onCryptoChange: handleBusdChange
  }

  return (
    <Card>
      <h2 className='mb-2 text-gray-400 font-bold text-lg xl:text-lg tracking-wider uppercase'>
        Crypto converter
      </h2>
      <div>&nbsp;</div>
      <CryptoInput {...nep} />
      <div>&nbsp;</div>
      <CryptoInput {...busd} />
      <div>&nbsp;</div>
      <ModalView />
    </Card>
  )
}

export default Converter
