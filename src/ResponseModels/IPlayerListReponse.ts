interface IPlayerResponse {
  connectionId: string;
  name: string;
  room: string;
  isSpectator: boolean;
  color: string;
  squareIndex: number;
  button1: number;
  button2: number;
}
export default interface IPlayerListResponse {
  host: IPlayerResponse;
  players: IPlayerResponse[];
}
