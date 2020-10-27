export interface Fixture {
    home: string,
    away: string,
    number: number
}

export interface FixtureChoice {
    username: string,
    fixture: Fixture
}