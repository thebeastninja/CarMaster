// Unsplash photo pool, grouped by theme. Every <Img> falls back to a generated
// illustration if a photo fails to load, so the UI never shows a broken image.
const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const IMG = {
  sports: [
    'photo-1503376780353-7e6692767b70', // Porsche 911
    'photo-1544636331-e26879cd4d9b',
    'photo-1492144534655-ae79c964c9d7',
    'photo-1542362567-b07e54358753',
    'photo-1568605117036-5fe5e7bab0b7',
  ],
  super: [
    'photo-1583121274602-3e2820c69888',
    'photo-1614162692292-7ac56d7f7f1e',
    'photo-1600712242805-5f78671b24da',
    'photo-1590362891991-f776e747a588',
  ],
  muscle: ['photo-1494976388531-d1058494cdd8', 'photo-1552519507-da3b142c6e3d', 'photo-1547744152-14d985cb937f'],
  german: ['photo-1555215695-3004980ad54e', 'photo-1580273916550-e323be2ae537', 'photo-1617814076367-b759c7d7e738', 'photo-1606664515524-ed2f786a0bd6'],
  luxury: ['photo-1563720223185-11003d516935', 'photo-1525609004556-c46c7d6cf023', 'photo-1617814076367-b759c7d7e738'],
  suv: ['photo-1549317661-bd32c8ce0db2', 'photo-1519641471654-76ce0107ad1b', 'photo-1533473359331-0135ef1b58bf'],
  ev: ['photo-1560958089-b8a1929cea89', 'photo-1617788138017-80ad40651399', 'photo-1593941707882-a5bba14938c7'],
  classic: ['photo-1502877338535-766e1452684a', 'photo-1503736334956-4c8f8e92946d', 'photo-1514316454349-750a7fd3da3a'],
  everyday: ['photo-1511919884226-fd3cad34687c', 'photo-1621135802920-133df287f89c', 'photo-1609521263047-f8f205293f24', 'photo-1626668893632-6f3a4466d22f'],
  jdm: ['photo-1541899481282-d53bffe3c35d', 'photo-1617886322168-72b886573c35', 'photo-1626668893632-6f3a4466d22f'],
  engine: ['photo-1486262715619-67b85e0b08d3', 'photo-1487754180451-c456f719a1fc', 'photo-1504215680853-026ed2a45def'],
  road: ['photo-1511919884226-fd3cad34687c', 'photo-1530046339160-ce3e530c7d2f'],
}

export function pick(group, i = 0, w) {
  const arr = IMG[group] || IMG.everyday
  return u(arr[Math.abs(i) % arr.length], w)
}

export { u as unsplash }
