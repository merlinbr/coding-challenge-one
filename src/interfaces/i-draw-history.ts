export interface IDrawHistory {
  draws: Array<IFinishedDrawPayload>
}

interface IFinishedDrawPayload {
  addOns: string
  drawDate: Date
  drawnNumbers: IDrawnNumbers
  id: string
  lotteryId: LotteryId
}

enum LotteryId {
  Cash4Life,
  Cash5,
  MegaMillions,
  Pick3,
  Pick4,
  Pick6,
  PowerBall
}

interface IDrawnNumbers {
  numbers: number
}
