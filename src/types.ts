export interface Fixture {
    homeTeam: string,
    awayTeam: string,
    gameNumber: number
}

export interface FixtureChoice {
    username: string,
    fixture: Fixture
}