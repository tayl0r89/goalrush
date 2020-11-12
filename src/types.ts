export interface Fixture {
    home: string,
    away: string,
    number: number
}

export interface FixtureChoice {
    username: string,
    fixture: Fixture
}

export interface FixtureSummary {
    fixture: Fixture
    homeTeamBTTS: boolean[]
    awayTeamBTTS: boolean[]
    homeTeamHomeBTTS: boolean[]
    awayTeamAwayBTTS: boolean[]
}