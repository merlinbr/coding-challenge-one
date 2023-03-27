import gql from 'graphql-tag'

export const getDrawHistory = gql`query drawHistory($filter: DrawResultsFilterInput, $licensedTerritory: String!, $limit: Int!, $offset: Int!) {
    drawHistory(filter: $filter, licensedTerritory: $licensedTerritory, limit: $limit, offset: $offset) {
        draws {
            id
            drawDate
            addOns
            drawnNumbers {
                numbers {
                    values
                    name
                }
            }
        }
    }
}`
