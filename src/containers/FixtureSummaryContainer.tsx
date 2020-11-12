import React from 'react'
import { Loader } from '@committed/components'
import { useApi } from '../hooks/useApi'
import { FixtureSummary } from '../types'
import { FixtureSummaryList } from '../components/FixtureSummaryCard'

export const FixtureSummariesContainer: React.FC = () => {
    const {loading, result} = useApi<{summaries: FixtureSummary[]}, {}>("api/fixturesummaries")
    if(loading){
        return <Loader/>
    }
    if(result){
        return <FixtureSummaryList summaries={result?.summaries ? result.summaries : []}/>
    }
    return <></>
}