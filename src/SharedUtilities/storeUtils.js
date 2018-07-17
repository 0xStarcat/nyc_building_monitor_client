export const responsesWaiting = store => {
  return store.censusTracts.awaitingResponse || store.neighborhoods.awaitingResponse || store.buildings.awaitingResponse
}

export const initialBoundaryDataLoaded = store => {
  return store.censusTracts.initialFetchCompleted
}

export const layersLoaded = store => {
  return store.appState.allLayersLoaded
}
