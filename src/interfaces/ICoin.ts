// export default interface ICoin {
//   id: number,
//   name: string,
//   imageUrl: string,
//   min: number,
//   max: number,
//   isFiat: boolean,
//   course: number,
//   available: number,
//   code: string,
//   commission?:number
// }

interface IGet {
  name: string
  course: number
  rezerv: number
  min: number
  max: number
}

export default interface ICoin {
  id: number
  give: string
  isFiat: boolean
  get: IGet[]
}
