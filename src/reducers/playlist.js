import actions from './../api/actions';

const DEFAULT_PLAYLIST_STATE =
  [{ url: "http://telechargement.rfi.fr/savoirs//comprendre/economie/transports/ECONOMIE_20_ans_eurostar_accents_d_europe_14112014.mp3",
    displayText: "L’Eurostar est sorti de l’adolescence" }];


export default (state = DEFAULT_PLAYLIST_STATE, action) => {
  switch (action.type) {
    case actions.playlist.request:
      return state;
    case actions.playlist.requestSuccess:
      return action.payload;
    case actions.playlist.requestFailure:
      return state;
    default:
      return state;
  }
}
