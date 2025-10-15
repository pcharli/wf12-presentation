export const order = {
  groups: [],
  set(firstKey, secondKey) {
    const groupData = {
      groupe1: {
        name: 'L\'agence pas de risque',
        appUrl: 'https://urbex-chronicles.netlify.app/',
        cmsUrl: 'https://tubular-stroopwafel-1c150b.netlify.app/'
      },
      groupe2: {
        name: 'Poloma',
        appUrl: 'https://michonmaximilien.dev/urbex-front/',
        cmsUrl: ''
      }
    }

    this.groups = [groupData[firstKey], groupData[secondKey]]
  }
}
