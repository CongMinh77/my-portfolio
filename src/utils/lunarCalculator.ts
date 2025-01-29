export const returnNumberDestiny = (destiny: number) => {
  if (destiny <= 5) {
    return destiny
  } else {
    do {
      destiny = destiny - 5
    } while (destiny > 5)
    return destiny
  }
}
