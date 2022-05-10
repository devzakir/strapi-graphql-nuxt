import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import dataTypes from './fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: dataTypes
})

export default function () {
  return {
    httpEndpoint: `http://localhost:1337/graphql`,
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
