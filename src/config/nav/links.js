import {
  HomeIconOutlined,
  HomeIconFilled
} from '../../components/shared/icons/HomeIcon'
import {
  FarmIconOutlined,
  FarmIconFilled
} from '../../components/shared/icons/FarmIcon'
import {
  PredMktIconOutlined,
  PredMktIconFilled
} from '../../components/shared/icons/PredMktIcon'
import {
  InsuranceIconOutlined,
  InsuranceIconFilled
} from '../../components/shared/icons/InsuranceIcon'
import {
  ConvertIconOutlined,
  ConvertIconFilled
} from '../../components/shared/icons/ConvertIcon'

const data = [
  {
    name: 'Home',
    path: '/',
    icon: HomeIconOutlined,
    activeIcon: HomeIconFilled
  },
  {
    name: 'Pool',
    path: '/pool',
    icon: FarmIconOutlined,
    activeIcon: FarmIconFilled
  },
  {
    name: 'Cover',
    path: '/cover',
    icon: InsuranceIconOutlined,
    activeIcon: InsuranceIconFilled
  },
  {
    name: 'Bridge',
    path: '/prediction-market',
    icon: PredMktIconOutlined,
    activeIcon: PredMktIconFilled
  },
  {
    name: 'Convert',
    path: '/convert',
    icon: ConvertIconOutlined,
    activeIcon: ConvertIconFilled
  }
]

export default data
