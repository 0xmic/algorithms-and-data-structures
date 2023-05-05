const HOME_TEAM_WON = 1

// O(n) Time | O(k) Space
// n = number of competitions
// k = number of teams
export function tournamentWinner(competitions: string[][], results: number[]) {
  let currentBestTeam = ''
  const scores = { [currentBestTeam]: 0 }

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i]
    const result = results[i]

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

    updateScores(winningTeam, 3, scores)

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam
    }
  }

  return currentBestTeam
}

function updateScores(team: string, points: number, scores: { [key: string]: number }) {
  if (!(team in scores)) scores[team] = 0
  scores[team] += points
}
