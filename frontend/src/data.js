// Static content for the tables and the result text

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Mies' },
  { value: 'female', label: 'Nainen' },
]

export const AGE_OPTIONS = [
  { value: 'young', label: '18–30' },
  { value: 'middleage', label: '31–60' },
  { value: 'old', label: 'yli 60' },
]

export const FREE_ACTIVITY_OPTIONS = [
  { value: 'not-free-active', label: 'Ei lainkaan aktiivinen' },
  { value: 'bit-free-active', label: 'Satunnaisesti aktiivinen' },
  { value: 'daily-free-active', label: 'Päivittäin aktiivinen' },
  { value: 'hc-free-active', label: 'Poikkeuksellisen aktiivinen' },
]

export const WORK_ACTIVITY_OPTIONS = [
  { value: 'not-work-active', label: 'Kevyt työ' },
  { value: 'bit-work-active', label: 'Kohtuullisen raskas työ' },
  { value: 'hc-work-active', label: 'Hyvin raskas työ' },
]

// The ids match the categories the API returns
export const BMI_ROWS = [
  { id: 'sick-underweight', label: 'Sairaalloinen alipaino', range: 'alle 15', comment: 'sairaalloisen alipainoinen' },
  { id: 'significant-underweight', label: 'Merkittävä alipaino', range: '15–17,9', comment: 'merkittävästi alipainoinen' },
  { id: 'slight-underweight', label: 'Lievä alipaino', range: '18–18,9', comment: 'lievästi alipainoinen' },
  { id: 'normal-weight', label: 'Normaali paino', range: '19–24,9', comment: 'normaalipainoinen' },
  { id: 'slight-overweight', label: 'Lievä ylipaino', range: '25–29,9', comment: 'lievästi ylipainoinen' },
  { id: 'significant-overweight', label: 'Merkittävä ylipaino', range: '30–34,9', comment: 'merkittävästi ylipainoinen' },
  { id: 'bad-overweight', label: 'Vaikea ylipaino', range: '35–39,9', comment: 'vaikeasti ylipainoinen' },
  { id: 'sick-overweight', label: 'Sairaalloinen ylipaino', range: '40 tai enemmän', comment: 'sairaalloisen ylipainoinen' },
]

export const WAIST_COLUMNS = [
  { id: 'normal-waist', title: 'Tavoitearvo (cm)', comment: 'on tavoitearvossa' },
  { id: 'slight-health-hazard', title: 'Lievä terveyshaitta (cm)', comment: 'aiheuttaa lievää terveyshaittaa' },
  { id: 'significant-health-hazard', title: 'Huomattava terveyshaitta (cm)', comment: 'aiheuttaa huomattavaa terveyshaittaa' },
]

export const WAIST_ROWS = [
  { gender: 'male', label: 'Miehet', values: ['alle 94', '94–101', '102 tai enemmän'] },
  { gender: 'female', label: 'Naiset', values: ['alle 80', '80–87', '88 tai enemmän'] },
]

export const VITAMINS = [
  {
    name: 'A-vitamiini',
    sources: 'Maito, juusto, voi, munat, maksa. Myös beetakaroteenia sisältävät vihannekset ja hedelmät, ...',
    tasks: 'Välttämätön hämäränäössä, solujen kasvussa ja erilaistumisessa ...',
    deficiency: 'Silmän sarveiskalvomuutokset, hämäräsokeus, ...',
    need: { male: '900 µg', female: '700 µg' },
  },
  // ...the other 12 vitamins in the same shape
]