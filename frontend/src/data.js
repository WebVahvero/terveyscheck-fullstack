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
    sources: 'Maito, juusto, voi, munat, maksa. Myös beetakaroteenia sisältävät vihannekset ja hedelmät, erityisesti porkkana, mutta myös esimerkiksi lehtikaali, bataatti, pinaatti, tomaatti, paprika ja parsakaali. Elimistö muuntaa beetakaroteenin A-vitamiiniksi.',
    tasks: 'Välttämätön hämäränäössä, solujen kasvussa ja erilaistumisessa sekä ihmisen lisääntymisessä, ylläpitää ihon ja limakalvojen kuntoa.',
    deficiency: 'Silmän sarveiskalvomuutokset, hämäräsokeus, ihon ja silmien sekä suun ja limakalvojen kuivuminen.',
    need: { male: '900 µg', female: '700 µg' },
  },
  {
    name: 'B1-vitamiini eli tiamiini',
    sources: 'Sianliha, täysjyvävilja, palkokasvit, pähkinät ja peruna.',
    tasks: 'Muuttaa rasvaa ja hiilihydraatteja energiaksi ja osallistuu kasvuun, sekä hermoston, sydämen ja suoliston toimintaan.',
    deficiency: 'Yleisiä alkoholisteilla, ruokahaluttomuutta, väsymystä, lihasheikkoutta ja hermostovaurioita.',
    need: { male: '1,4 mg', female: '1,1 mg' },
  },
  {
    name: 'B2-vitamiini eli riboflaviini',
    sources: 'Maitotuotteet, liha ja kananmunat, täysjyvävilja ja oluthiiva.',
    tasks: 'Tuottaa hiilihydraateista, proteiineista ja rasvasta energiaa soluille.',
    deficiency: 'Haavaumat suupielessä, suussa ja kielessä sekä ihottuma kasvoissa, hiustenlähtö.',
    need: { male: '1,7 mg', female: '1,1 mg' },
  },
  {
    name: 'B3-vitamiini eli niasiini',
    sources: 'Liha, kala, täysjyvävilja, pähkinät, sienet ja vihreät salaatit.',
    tasks: 'Osallistuu solujen energiatuotantoon ja hermoston välittäjäaineiden muodostukseen sekä ihon ja ruuansulatusjärjestelmän ylläpitoon.',
    deficiency: 'Väsymys, masennus, ihottuma, ripuli.',
    need: { male: '19 mg', female: '15 mg' },
  },
  {
    name: 'B6-vitamiini eli pyridoksiini',
    sources: 'Sian- ja siipikarjanliha, munankeltuainen, maitotuotteet, kala, täysjyvävilja ja hiiva.',
    tasks: 'Osallistuu proteiini- ja hiilihydraattiaineenvaihduntaan, hermoston toimintaan ja punasolujen muodostukseen.',
    deficiency: 'Puutos liittyy usein runsaaseen alkoholinkäyttöön, oireita ovat ihottumat ja keskushermosto-oireet, kuten huimaus ja kouristelu, sekä limakalvomuutokset ja anemia.',
    need: { male: '1,6 mg', female: '1,2 mg' },
  },
  {
    name: 'Folaatti eli foolihappo',
    sources: 'Parhaita lähteitä tuoreet kasvikset, erityisesti kaalit, salaatit ja punajuuri, sekä hedelmät, pavut, marjat ja täysjyvävilja.',
    tasks: 'Välttämätön solunjakautumisessa ja solujen geeniperimän ja proteiinin muodostuksessa, solujen, erityisesti veren punasolujen muodostumisessa, kasvussa ja ruoansulatuskanavan hyvinvoinnissa. Raskauden aikana ehkäisee sikiön hermostoputken sulkeutumishäiriöitä.',
    deficiency: 'Anemia.',
    need: { male: '300 µg', female: '300 µg' },
  },
  {
    name: 'B12-vitamiini eli syanokobalamiini',
    sources: 'Vain eläinkunnan tuotteissa, etenkin lihassa, kalassa, maksassa ja maidossa, sekä joissakin maitohappokäymisellä valmistetuissa kasviselintarvikkeissa.',
    tasks: 'Osallistuu elimistön aineenvaihduntaan ja on välttämätön nopeasti uusiutuvien solujen, kuten punasolujen, muodostumisessa ja hermoston toiminnassa.',
    deficiency: 'Häiriöitä punasolun muodostuksessa, anemiaa ja hermostollisia häiriöitä, kuten raajojen pistelyä ja tuntoaistin katoaminen jäsenistä.',
    need: { male: '2 µg', female: '2 µg' },
  },
  {
    name: 'B5-vitamiini eli pantoteenihappo',
    sources: 'Monissa ruoissa kuten lihassa, kalassa, täysjyväviljassa ja vihanneksissa.',
    tasks: 'Osallistuu elimistön energiantuotantoon ja kolesterolin, rasvan ja punasolujen muodostukseen.',
    deficiency: 'Puutos erittäin harvinaista, oireina varpaiden tunnottomuus ja pistely.',
    need: { male: '4–7 mg', female: '4–7 mg' },
  },
  {
    name: 'Biotiini eli H-vitamiini',
    sources: 'Lähes kaikissa ruoissa pieniä määriä.',
    tasks: 'Osallistuu rasva- ja hiilihydraattiaineenvaihduntaan, vapauttaa ravinnosta energiaa.',
    deficiency: 'Puutos erittäin harvinaista.',
    need: { male: '30–100 µg', female: '30–100 µg' },
  },
  {
    name: 'C-vitamiini',
    sources: 'Parhaita lähteitä sitrushedelmät, marjat, tuoreet hedelmät ja vihannekset, peruna.',
    tasks: 'Edistää kasvua sekä luuston ja hampaiden muodostumista, osallistuu raudan imeytymiseen, ikenien ja ihon hyvinvointiin ja haavojen paranemiseen sekä edistää myös E-vitamiinin toimintaa ja suojaa elimistöä haitalliselta hapettumiselta.',
    deficiency: 'Väsymys ja tulehdusalttius, keripukki.',
    need: { male: '75 mg', female: '75 mg' },
  },
  {
    name: 'D-vitamiini',
    sources: 'Auringonvalo, kala, kananmuna, maksa ja sienet; myös D-vitaminoitu maito ja margariini.',
    tasks: 'Säätelee kalsium- ja fosforiaineenvaihduntaa ja välttämätön luun ja hampaiden muodostumisessa.',
    deficiency: 'Riisitauti ja luun pehmeneminen.',
    need: { male: '10 µg', female: '10 µg' },
  },
  {
    name: 'E-vitamiini',
    sources: 'Hyviä lähteitä ovat rypsi-, soija ja auringonkukkaöljy sekä monet marjat.',
    tasks: 'Pitää yllä solukalvon rakennetta, suojaa elimistön monityydyttymättömiä rasvahappoja vapailta radikaaleilta ja hapettumiselta.',
    deficiency: 'Puutos on erittäin harvinaista.',
    need: { male: '10 mg', female: '8 mg' },
  },
  {
    name: 'K-vitamiini',
    sources: 'Hyviä lähteitä ovat vihreät lehtikasvikset kuten parsakaali, lehtikaali, pinaatti, vihreät pavut, herneet, avokado sekä kasviöljyt ja maksa, ihmisen suolistobakteerit tuottavat K-vitamiinia.',
    tasks: 'Välttämätön veren normaalille hyytymiselle, osallistuu myös muiden proteiinien tuotantoon veressä, luu- ja sidekudoksessa sekä maksassa.',
    deficiency: 'Puutos on harvinaista, oireina ovat haavojen hidas paraneminen, mustelmataipumus ja limakalvoverenvuodot.',
    need: { male: 'Muodostuu elimistössä', female: 'Muodostuu elimistössä' },
  },
]