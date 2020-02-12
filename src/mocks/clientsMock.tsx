import { IClientItem } from '../components/Clients';

const FinancialTimes = require('../assets/images/logo-financial-times.png') as string;
const Forbes = require('../assets/images/logo-forbes.png') as string;
const DailyMail = require('../assets/images/logo-daily-mail.png') as string;
const HuntScanion = require('../assets/images/logo-hunt-scanion.png') as string;
const WESC = require('../assets/images/logo-wesc.png') as string;
const SIA = require('../assets/images/logo-sia.png') as string;

export const clients: IClientItem['items'] = [
  {
    src: FinancialTimes,
    alt: 'Financial Times',
  },
  {
    src: Forbes,
    alt: 'Forbes',
  },
  {
    src: DailyMail,
    alt: 'Daily Mail',
  },
  {
    src: HuntScanion,
    alt: 'Hunt Scanion',
  },
  {
    src: WESC,
    alt: 'WESC',
  },
  {
    src: SIA,
    alt: 'SIA',
  },
];
