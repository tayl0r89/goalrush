import { Loader } from '@committed/components'
import React from 'react'
import { FixtureList } from '../components/FixtureList'
import { useApi } from '../hooks/useApi'
import { Fixture } from '../types'

interface FixturesResult {
    fixtures: Fixture[]
}

export const FixtureListContainer: React.FC<{}> = () => {
    const {loading, result} = useApi<FixturesResult, {}>("/api/fixtures")
    console.log(loading)
    if(loading){
        return <Loader/>
    }
    return <FixtureList fixtures={result ? result.fixtures : []}/>
}