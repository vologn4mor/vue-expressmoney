export default interface ICoin {
  id: number,
  name: string,
  imageUrl: string,
  min: number,
  max: number,
  isFiat: boolean,
  course: number,
  available: number
}