export const order = {
  groups: [],
  set(firstKey, secondKey) {
    const groupData = {
      groupe1: {
        name: 'Équipe Alpha',
        appUrl: '',
        cmsUrl: ''
      },
      groupe2: {
        name: 'Équipe Beta',
        appUrl: '',
        cmsUrl: ''
      }
    }

    this.groups = [groupData[firstKey], groupData[secondKey]]
  }
}
